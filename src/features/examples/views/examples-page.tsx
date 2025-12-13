import { type PageProps as CorePageProps } from '@harpy-js/core';
import { Dictionary } from '../../../i18n/get-dictionary';

export interface PageProps extends CorePageProps {
  sections: any[];
  dict: Dictionary;
  activeItemId?: string;
}

export default function ExamplesPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 lg:p-12">
        {/* Hero Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-xl shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Live Examples
              </h1>
              <p className="text-slate-600 text-lg mt-1">
                Real-world applications built with Harpy.js
              </p>
            </div>
          </div>

          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            The best way to learn a framework is to see it in action. Below are
            real production applications built with Harpy.js, demonstrating
            various features and best practices.
          </p>
        </div>

        {/* This Documentation Site */}
        <section id="docs-site" className="mb-10">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 shadow-md">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Harpy.js Documentation Site
                </h2>
                <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  🎯 You're looking at it!
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  This entire documentation website is built using Harpy.js
                  itself. It serves as a comprehensive, real-world example of
                  the framework's capabilities in production.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Features Demonstrated:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Server-Side Rendering
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Every page is rendered on the server for optimal
                      performance and SEO
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Client-Side Hydration
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Interactive components hydrate seamlessly after initial
                      page load
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Dynamic Navigation
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Auto-registered navigation with active state detection
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      SEO Optimization
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Automatic robots.txt and sitemap.xml generation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Internationalization
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Multi-language support with automatic locale detection
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      Tailwind CSS
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Modern styling with utility-first CSS framework
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 border-2 border-blue-300">
              <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-slate-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Source Code
              </h4>
              <p className="text-slate-700 mb-4">
                The complete source code for this documentation site is
                available on GitHub. Explore the implementation to learn how
                everything works together.
              </p>
              <a
                href="https://github.com/Makhloufhleli/harpyjs-docs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section id="insights" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Key Insights from Building This Site
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-50 p-5 rounded">
              <h4 className="font-semibold text-green-900 mb-2">
                ⚡ Fast Development
              </h4>
              <p className="text-green-800">
                The modular architecture and auto-registration system made it
                easy to add new documentation pages. Each feature module is
                self-contained and automatically registers its navigation.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-5 rounded">
              <h4 className="font-semibold text-blue-900 mb-2">
                🎯 Type Safety
              </h4>
              <p className="text-blue-800">
                TypeScript integration throughout the stack caught errors early
                and provided excellent IDE support. Props, routes, and data
                structures are all fully typed.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-5 rounded">
              <h4 className="font-semibold text-purple-900 mb-2">
                🚀 Production Ready
              </h4>
              <p className="text-purple-800">
                SEO features, internationalization, and performance
                optimizations work out of the box. No need to configure
                robots.txt, sitemaps, or meta tags separately.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 bg-amber-50 p-5 rounded">
              <h4 className="font-semibold text-amber-900 mb-2">
                🎨 Developer Experience
              </h4>
              <p className="text-amber-800">
                Hot reload, automatic hydration generation, and clear error
                messages made development smooth. The framework handles
                complexity while keeping code simple.
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section id="coming-soon">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            More Examples Coming Soon
          </h2>

          <p className="text-slate-600 mb-6">
            We're working on additional example applications to showcase
            different use cases:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h4 className="font-semibold text-slate-900 mb-2">
                📝 Blog Platform
              </h4>
              <p className="text-slate-600 text-sm">
                Full-featured blog with markdown support, comments, and dynamic
                sitemaps
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h4 className="font-semibold text-slate-900 mb-2">
                🛒 E-commerce Store
              </h4>
              <p className="text-slate-600 text-sm">
                Product catalog, shopping cart, and checkout with SSR
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h4 className="font-semibold text-slate-900 mb-2">
                👥 Social Dashboard
              </h4>
              <p className="text-slate-600 text-sm">
                Real-time updates, user profiles, and interactive feeds
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h4 className="font-semibold text-slate-900 mb-2">
                📊 Analytics Dashboard
              </h4>
              <p className="text-slate-600 text-sm">
                Data visualization, charts, and performance monitoring
              </p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
            <p className="text-blue-900">
              <strong>Want to contribute?</strong> If you've built something
              with Harpy.js and want to showcase it here, open a pull request or
              reach out on GitHub!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
