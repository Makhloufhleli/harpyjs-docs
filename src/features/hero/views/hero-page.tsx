import { Dictionary } from '../../../i18n/get-dictionary';
import { LanguageSwitcher } from '../../../components/language-switcher';

export interface PageProps {
  items?: string[];
  dict: Dictionary;
  locale: string;
}

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Language Switcher */}
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <div className="container mx-auto max-w-7xl px-4 pt-20 pb-32">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="text-9xl mb-8 animate-pulse">🦅</div>

          {/* Title */}
          <h1 className="text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Harpy.js
            </span>
            <span className="inline-block ml-4 px-4 py-2 bg-amber-500/20 border border-amber-500 rounded-lg text-amber-400 text-2xl font-bold">
              BETA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-slate-300 mb-4 font-light">
            Full-Stack NestJS Framework with React SSR
          </p>

          {/* Description */}
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
            Build powerful full-stack applications leveraging the NestJS
            ecosystem with server-side React rendering and automatic client-side
            hydration.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="/docs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-2xl transition-all hover:shadow-amber-500/50 hover:scale-105 text-lg"
            >
              📖 Get Started
              <span>→</span>
            </a>
          </div>

          {/* Version Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            <img
              src="https://img.shields.io/npm/v/@hepta-solutions/harpy-core?label=harpy-core&style=for-the-badge&color=orange"
              alt="Core Version"
            />
            <img
              src="https://img.shields.io/npm/v/@hepta-solutions/harpy-cli?label=harpy-cli&style=for-the-badge&color=orange"
              alt="CLI Version"
            />
            <img
              src="https://img.shields.io/badge/render_time-1--7ms-success?style=for-the-badge"
              alt="Performance"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: '🚀',
              title: 'NestJS Ecosystem',
              desc: 'Build on top of the powerful NestJS framework with all its features and modules',
            },
            {
              icon: '⚡',
              title: 'Lightning Fast',
              desc: 'Server-side rendering with 1-7ms render times and automatic client hydration',
            },
            {
              icon: '🎨',
              title: 'Modern Stack',
              desc: 'React 19, Tailwind CSS, TypeScript, and SWC for the best developer experience',
            },
            {
              icon: '🌍',
              title: 'Built-in i18n',
              desc: 'Advanced internationalization with dictionary caching and locale switching',
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Quick Start */}
        {/* <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Quick Start
          </h2>
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-2xl">
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 mb-2">Install the CLI:</p>
                <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-amber-400">
                    npm install -g @hepta-solutions/harpy-cli
                  </code>
                </pre>
              </div>
              <div>
                <p className="text-slate-400 mb-2">Create a new project:</p>
                <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-amber-400">harpy create my-app</code>
                </pre>
              </div>
              <div>
                <p className="text-slate-400 mb-2">Start developing:</p>
                <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                  <code className="text-amber-400">cd my-app && pnpm dev</code>
                </pre>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
