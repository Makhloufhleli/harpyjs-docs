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

  const shellCommands = [
    'npm',
    'npx',
    'yarn',
    'pnpm',
    'cd',
    'mkdir',
    'ls',
    'pwd',
    'rm',
    'mv',
    'cp',
    'git',
    'node',
    'harpy',
    'nest',
    'docker',
    'curl',
    'wget',
    'echo',
    'cat',
    'touch',
  ];

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

  let inMultilineComment = false;

  lines.forEach((line, i) => {
    // Check for multiline comment continuation
    if (inMultilineComment) {
      const endCommentIndex = line.indexOf('*/');
      if (endCommentIndex !== -1) {
        // End of multiline comment found
        const commentPart = line.substring(0, endCommentIndex + 2);
        const restOfLine = line.substring(endCommentIndex + 2);
        inMultilineComment = false;

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
            <span className="text-green-600">{commentPart}</span>
            {restOfLine &&
              highlightLineChunks(
                restOfLine,
                i,
                jsKeywords,
                shellCommands,
                htmlAttrs,
              )}
          </span>,
        );
        return;
      } else {
        // Still in multiline comment
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
            <span className="text-green-600">{line}</span>
          </span>,
        );
        return;
      }
    }

    // Check for single-line comment
    const singleCommentIndex = line.indexOf('//');
    if (singleCommentIndex !== -1) {
      const beforeComment = line.substring(0, singleCommentIndex);
      const comment = line.substring(singleCommentIndex);

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
          {beforeComment &&
            highlightLineChunks(
              beforeComment,
              i,
              jsKeywords,
              shellCommands,
              htmlAttrs,
            )}
          <span className="text-green-600">{comment}</span>
        </span>,
      );
      return;
    }

    // Check for multiline comment start
    const multiCommentIndex = line.indexOf('/*');
    if (multiCommentIndex !== -1) {
      const endCommentIndex = line.indexOf('*/', multiCommentIndex + 2);
      const beforeComment = line.substring(0, multiCommentIndex);

      if (endCommentIndex !== -1) {
        // Comment starts and ends on same line
        const comment = line.substring(multiCommentIndex, endCommentIndex + 2);
        const afterComment = line.substring(endCommentIndex + 2);

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
            {beforeComment &&
              highlightLineChunks(
                beforeComment,
                i,
                jsKeywords,
                shellCommands,
                htmlAttrs,
              )}
            <span className="text-green-600">{comment}</span>
            {afterComment &&
              highlightLineChunks(
                afterComment,
                i,
                jsKeywords,
                shellCommands,
                htmlAttrs,
              )}
          </span>,
        );
        return;
      } else {
        // Comment starts but doesn't end on this line
        inMultilineComment = true;
        const comment = line.substring(multiCommentIndex);

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
            {beforeComment &&
              highlightLineChunks(
                beforeComment,
                i,
                jsKeywords,
                shellCommands,
                htmlAttrs,
              )}
            <span className="text-green-600">{comment}</span>
          </span>,
        );
        return;
      }
    }

    // Regular line without comments
    const chunks = highlightLineChunks(
      line,
      i,
      jsKeywords,
      shellCommands,
      htmlAttrs,
    );

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

function highlightLineChunks(
  line: string,
  lineIndex: number,
  jsKeywords: any,
  shellCommands: string[],
  htmlAttrs: string[],
) {
  return line.split(/(\s+)/).map((chunk, j) => {
    const trimmed = chunk.trim();
    let colorClass = 'text-slate-800';

    if (trimmed === '') {
      return (
        <span key={`${lineIndex}-${j}`} className="text-slate-800">
          {chunk}
        </span>
      );
    }

    // Shell commands
    if (shellCommands.includes(trimmed)) {
      colorClass = 'text-violet-600';
    }
    // Shell flags (like --save, -g, etc.)
    else if (/^--?[a-zA-Z][\w-]*$/.test(trimmed)) {
      colorClass = 'text-cyan-600';
    }
    // JSON keys with quotes
    else if (/^"[^"]+":$/.test(trimmed) || /^'[^']+':$/.test(trimmed)) {
      colorClass = 'text-sky-600';
    }
    // Numbers (for JSON and general)
    else if (/^-?\d+(\.\d+)?$/.test(trimmed)) {
      colorClass = 'text-amber-600';
    }
    // JS/JSON boolean and null values
    else if (jsKeywords.green.includes(trimmed)) {
      colorClass = 'text-emerald-600';
    } else if (jsKeywords.purple.includes(trimmed)) {
      colorClass = 'text-violet-600';
    } else if (jsKeywords.yellow.includes(trimmed)) {
      colorClass = 'text-amber-600';
    } else if (jsKeywords.blue.includes(trimmed)) {
      colorClass = 'text-sky-600';
    }
    // HTML/JSX tags
    else if (/^<([a-zA-Z][\w-]*)/.test(trimmed)) {
      const tagMatch = trimmed.match(/^<([a-zA-Z][\w-]*)/);
      if (tagMatch) {
        const tagName = tagMatch[1];
        if (/^[A-Z]/.test(tagName)) {
          colorClass = 'text-emerald-600';
        } else {
          colorClass = 'text-sky-600';
        }
      }
    }
    // HTML attributes
    else if (htmlAttrs.some((attr) => trimmed.startsWith(attr + '='))) {
      colorClass = 'text-cyan-600';
    }
    // String literals
    else if (
      /^".*"$/.test(trimmed) ||
      /^'.*'$/.test(trimmed) ||
      /^`.*`$/.test(trimmed)
    ) {
      colorClass = 'text-orange-500';
    }

    return (
      <span key={`${lineIndex}-${j}`} className={colorClass}>
        {chunk}
      </span>
    );
  });
}
