import { type PageProps as CorePageProps } from '@harpy-js/core';
import { Dictionary } from '../../../i18n/get-dictionary';

export interface PageProps extends CorePageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
  activeItemId?: string;
}

export default function GettingStartedPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-8 lg:p-12">
        {/* Introduction */}
        <section className="mb-16">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Getting started
            </h1>
            <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500 rounded-lg text-amber-600 text-xs md:text-sm font-bold">
              BETA
            </span>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mb-6">
            Welcome to Harpy.js documentation,
          </p>
          <p className="text-lg md:text-xl text-slate-600 mb-6">
            This Getting Started section will help you create your first
            Harpy.js app and learn the core features you'll use in every
            project.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-blue-900">
              <strong>⚠️ Beta Version:</strong> Harpy.js and this documentation
              are currently in beta. Features may change, and you might
              encounter bugs. We appreciate your feedback and contributions!
            </p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-amber-900">
              <strong>Note:</strong> Harpy.js is designed to leverage the full
              power of NestJS while adding server-side React rendering
              capabilities with automatic client-side hydration.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Pre-requisites
            </h2>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mb-6">
            This documentation assumes you have a basic understanding of:
          </p>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>NestJS framework and its core concepts</li>
            <li>React and JSX syntax</li>
            <li>Decorator design pattern and usage in NestJS</li>
          </ul>
          <p className="text-lg md:text-xl text-slate-600 mt-6">
            If you're new to any of these topics, consider reviewing their
            official documentation before proceeding.
          </p>
        </section>
        <section className="mb-16">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
              Next Steps
            </h2>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mb-6">
            Ready to dive in? Proceed to the{' '}
            <a
              href="/docs/installation"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Installation
            </a>{' '}
            section to set up your first Harpy.js project.
          </p>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between">
          <a
            href="/"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Home
          </a>
          <a
            href="https://github.com/Makhloufhleli/harpy.js"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}
