'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

type CommandMap = Record<string, string>;

interface CommandTabsProps {
  commands?: CommandMap;
}

export default function CommandTabs({ commands }: CommandTabsProps) {
  // Provide a default command if none are passed
  const defaultCommands: CommandMap = {
    Terminal: 'echo "No command provided"',
  };
  const data: CommandMap =
    commands && Object.keys(commands).length > 0 ? commands : defaultCommands;
  const tabs = Object.keys(data);
  const [active, setActive] = useState<string>(tabs[0]);
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    if (data[active]) {
      await navigator.clipboard.writeText(data[active]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="w-full max-w-4xl bg-slate-900 border border-neutral-800 rounded-3xl p-6 text-white">
      {/* TABS */}
      <div className="flex gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 rounded-xl text-sm capitalize transition font-medium
              ${
                active === tab
                  ? 'bg-white text-neutral-900'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TERMINAL HEADER */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-neutral-800">
        <span className="flex items-center gap-2 text-neutral-300 text-lg">
          <span className="-mt-1">›_</span> Terminal
        </span>

        <button
          onClick={() => void handleCopy()}
          className="p-2 rounded hover:bg-neutral-800 transition cursor-pointer"
          title="Copy"
        >
          {copied ? (
            <Check size={18} className="text-green-400" />
          ) : (
            <Copy size={18} className="text-neutral-300" />
          )}
        </button>
      </div>

      {/* COMMAND OUTPUT */}
      <pre className="p-4 text-sm font-mono text-neutral-200 overflow-x-auto whitespace-pre-wrap">
        {highlight(data[active] || '')}
      </pre>
    </div>
  );
}

/* ---------------- Syntax Highlighting ---------------- */

function highlight(text: string) {
  if (!text) return null;
  // remove indentation to avoid the "0 1 2 ..." issue
  const clean = text.replace(/^[\s]+/gm, '');

  return clean.split('\n').map((line, idx) => (
    <div key={idx}>
      {line.split(' ').map((word, widx) => (
        <span key={widx} className={color(word)}>
          {word + ' '}
        </span>
      ))}
    </div>
  ));
}

function color(word: string): string {
  if (['pnpm', 'npm', 'yarn', 'harpy'].includes(word)) return 'text-green-400';
  if (word === 'cd') return 'text-purple-400';
  return '';
}
