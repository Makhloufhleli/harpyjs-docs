import * as React from 'react';
import { JsxLayoutProps } from '@hepta-solutions/harpy-core';

/**
 * Dashboard Layout - Sidebar layout for admin/dashboard pages
 */
export default function DashboardLayout({
  children,
  meta,
  hydrationScripts,
}: JsxLayoutProps & {
  hydrationScripts?: Array<{ componentName: string; path: string }>;
}) {
  const chunkScripts = hydrationScripts || [];

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta?.title || 'Dashboard'}</title>
        {meta?.description && (
          <meta name="description" content={meta.description} />
        )}
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body className="min-h-screen bg-gray-100">
        <div className="grid grid-cols-[280px_1fr] min-h-screen">
          <aside className="bg-white border-r border-slate-200 sticky top-0 h-screen overflow-y-auto">
            <div className="px-6 py-4 border-b border-slate-200">
              <a href="/" className="flex items-center gap-2 text-xl font-bold">
                <span className="text-2xl">🦅</span>
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Harpy.js
                </span>
              </a>
            </div>
            <nav className="px-6 py-6 space-y-8">
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider px-2">
                  Getting Started
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#introduction"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#installation"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Installation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#quick-start"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Quick Start
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider px-2">
                  Core Concepts
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#architecture"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Architecture
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ssr"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Server-Side Rendering
                    </a>
                  </li>
                  <li>
                    <a
                      href="#hydration"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Client Hydration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#routing"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Routing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider px-2">
                  Features
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#jsx-rendering"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      JSX Rendering
                    </a>
                  </li>
                  <li>
                    <a
                      href="#i18n"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Internationalization
                    </a>
                  </li>
                  <li>
                    <a
                      href="#styling"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Styling with Tailwind
                    </a>
                  </li>
                  <li>
                    <a
                      href="#metadata"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      SEO & Metadata
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider px-2">
                  Guides
                </h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#components"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Creating Components
                    </a>
                  </li>
                  <li>
                    <a
                      href="#client-components"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Client Components
                    </a>
                  </li>
                  <li>
                    <a
                      href="#api-routes"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      API Routes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#deployment"
                      className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                    >
                      Deployment
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
          <div className="flex flex-col">
            <header className="bg-white px-8 py-4 shadow-sm flex justify-between items-center border-b border-slate-200 sticky top-0 z-10">
              <h1 className="text-slate-700 text-xl font-semibold">
                Documentation
              </h1>
              <div className="flex gap-3 items-center">
                <a
                  href="https://github.com/Makhloufhleli/harpy.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.npmjs.com/package/@hepta-solutions/harpy-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                  </svg>
                  npm
                </a>
              </div>
            </header>
            <main className="flex-1 p-8 bg-slate-50">{children}</main>
            {/* Footer */}
            <footer className="bg-white border-t border-slate-200 py-8">
              <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🦅</span>
                      <span className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        Harpy.js
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">
                      A powerful NestJS + React framework with automatic
                      hydration.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm">
                      Resources
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>
                        <a
                          href="https://github.com/Makhloufhleli/harpyjs-docs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-600 transition-colors"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.npmjs.com/package/@hepta-solutions/harpy-core"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-600 transition-colors"
                        >
                          NPM Core
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.npmjs.com/package/@hepta-solutions/harpy-cli"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-amber-600 transition-colors"
                        >
                          NPM CLI
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3 text-sm">
                      Built With
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>NestJS 11</li>
                      <li>React 19</li>
                      <li>Fastify</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
                  <p>
                    Powered by{' '}
                    <span className="text-amber-600 font-semibold">
                      Harpy.js
                    </span>{' '}
                    - Soar above the competition 🦅
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {/* Auto-injected hydration scripts */}
        {chunkScripts.map((script) => (
          <script key={script.componentName} src={script.path}></script>
        ))}
        <script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ucnhc3hgpk");
          `}
        </script>
      </body>
    </html>
  );
}
