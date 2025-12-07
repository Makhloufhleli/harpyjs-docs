import * as React from 'react';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  className?: string;
  showLineNumbers?: boolean;
}

export default function CodeSnippet({
  code,
  className = '',
  showLineNumbers = false,
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      void err;
    }
  };

  // normalize common escapes in snippet strings so they render as expected
  // remove backslashes that were added to escape `<script>` in template strings
  const normalized = code.replace(/\\+(?=(?:\/)?script)/gi, '');

  return (
    <div
      className={`w-full max-w-4xl bg-white border border-slate-200 rounded-3xl p-4 text-slate-800 shadow-sm ${className}`}
      role="region"
      aria-label="Code snippet"
    >
      {/* Header */}
      <div className="flex justify-end items-center mb-2">
        <button
          onClick={() => void handleCopy()}
          className="p-2 rounded bg-slate-50 hover:bg-slate-100 transition cursor-pointer text-slate-700"
          title="Copy code"
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={18} className="text-emerald-600" />
          ) : (
            <Copy size={18} className="text-amber-600" />
          )}
        </button>
      </div>

      {/* Code block */}
      <pre className="overflow-x-auto p-3 text-sm font-mono bg-slate-50 rounded-md">
        <code className="block text-slate-800">
          {highlight(normalized, showLineNumbers)}
        </code>
      </pre>
    </div>
  );
}

/* ---------------- Syntax Highlighting ---------------- */
function highlight(code: string, showLineNumbers: boolean = false) {
  const jsKeywords = {
    blue: [
      'import',
      'from',
      'await',
      'async',
      'const',
      'let',
      'var',
      'return',
      'default',
      'export',
      'interface',
      'if',
      'else',
      'try',
      'catch',
    ],
    purple: ['function', 'class', 'extends', 'new'],
    yellow: ['AppModule', 'NestFactory', 'FastifyAdapter', 'MainLayout'],
    green: ['true', 'false', 'null', 'undefined'],
  };

  const htmlAttrs = [
    'className',
    'id',
    'href',
    'src',
    'alt',
    'type',
    'rel',
    'title',
  ];

  // React safely escapes text nodes, so avoid pre-escaping HTML here
  // (pre-escaping caused double-escaped entities like `&lt;div&gt;` appearing)
  const lines = code.split('\n');
  const nodes: React.ReactNode[] = [];

  lines.forEach((line, i) => {
    const chunks = line.split(/(\s+)/).map((chunk, j) => {
      const trimmed = chunk.trim();
      let colorClass = 'text-slate-800';

      if (trimmed === '') {
        return (
          <span key={`${i}-${j}`} className="text-slate-800">
            {chunk}
          </span>
        );
      }

      if (jsKeywords.green.includes(trimmed)) {
        colorClass = 'text-emerald-600';
      } else if (jsKeywords.purple.includes(trimmed)) {
        colorClass = 'text-violet-600';
      } else if (jsKeywords.yellow.includes(trimmed)) {
        colorClass = 'text-amber-600';
      } else if (jsKeywords.blue.includes(trimmed)) {
        colorClass = 'text-sky-600';
      } else if (/^<([a-zA-Z][\w-]*)/.test(trimmed)) {
        const tagMatch = trimmed.match(/^<([a-zA-Z][\w-]*)/);
        if (tagMatch) {
          const tagName = tagMatch[1];
          if (/^[A-Z]/.test(tagName)) {
            colorClass = 'text-emerald-600';
          } else {
            colorClass = 'text-sky-600';
          }
        }
      } else if (htmlAttrs.some((attr) => trimmed.startsWith(attr + '='))) {
        colorClass = 'text-cyan-600';
      } else if (/^".*"$/.test(trimmed) || /^'.*'$/.test(trimmed)) {
        colorClass = 'text-orange-500';
      }

      return (
        <span key={`${i}-${j}`} className={colorClass}>
          {chunk}
        </span>
      );
    });

    const lineNumber = showLineNumbers ? (
      <span
        key={`ln-${i}`}
        className="inline-block w-8 text-right pr-3 text-slate-400 select-none"
      >
        {i + 1}
      </span>
    ) : null;

    nodes.push(
      <span key={`line-${i}`} className="block">
        {lineNumber}
        {chunks}
      </span>,
    );
  });

  return nodes;
}
