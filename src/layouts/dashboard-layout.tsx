import * as React from 'react';
import { JsxLayoutProps } from '@hepta-solutions/harpy-core';
import MobileMenu from './components/MobileMenu';
import { NavSection } from './types/nav.types';
import Logo from 'src/components/logo';

/**
 * Dashboard Layout - Sidebar layout for admin/dashboard pages
 */
export default function DashboardLayout({
  children,
  meta,
  hydrationScripts,
  sections = [],
}: JsxLayoutProps & {
  hydrationScripts?: Array<{ componentName: string; path: string }>;
  sections?: NavSection[];
}) {
  const title = meta?.title ?? 'Harpy Framework';
  const description =
    meta?.description ??
    'A powerful NestJS + React framework with automatic hydration. Built for speed, precision, and adaptability.';
  const canonical =
    meta?.canonical ?? 'https://github.com/Makhloufhleli/harpy.js';

  const og = meta?.openGraph ?? {};
  const twitter = meta?.twitter ?? {};

  const chunkScripts = hydrationScripts || [];

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/styles.css" />
        <meta
          name="keywords"
          content="HarpyJS, JavaScript library, JS framework, web development, full-stack development, open source, Performance, NestJS, developer tools, web apps"
        />
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph tags */}
        <meta property="og:title" content={og.title || title} />
        <meta
          property="og:description"
          content={og.description || description}
        />
        <meta property="og:type" content={og.type || 'website'} />
        {og.image && <meta property="og:image" content={og.image} />}
        {og.url && <meta property="og:url" content={og.url} />}

        {/* Twitter cards */}
        <meta
          name="twitter:card"
          content={twitter.card || 'summary_large_image'}
        />
        <meta name="twitter:title" content={twitter.title || title} />
        <meta
          name="twitter:description"
          content={twitter.description || description}
        />
        {twitter.image && <meta name="twitter:image" content={twitter.image} />}
        <link
          rel="shortcut icon"
          href="/public/favicon.svg"
          type="image/x-icon"
        />
      </head>
      <body className="min-h-screen bg-gray-100 overflow-x-hidden max-w-full">
        {/* Mobile menu*/}
        <MobileMenu sections={sections} />
        <div className="relative">
          <div className="flex flex-col min-w-0">
            <header className="bg-white pl-16 lg:pl-8 pr-4 py-4 shadow-lg flex items-center gap-3  shadow-slate-200 sticky top-0 z-10">
              <div className="flex items-center gap-1 flex-1">
                <a
                  href="/"
                  className="flex items-center gap-2 text-xl font-bold"
                >
                  <Logo className="size-12" />
                </a>
              </div>
              <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500 rounded-lg text-amber-600 text-xs md:text-sm font-bold">
                BETA
              </span>

              <div className="flex gap-1 md:gap-3 items-center flex-shrink-0">
                <a
                  href="https://github.com/Makhloufhleli/harpy.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs md:text-sm font-medium rounded-lg transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://www.npmjs.com/package/@hepta-solutions/harpy-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs md:text-sm font-medium rounded-lg transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                  </svg>
                  <span className="hidden sm:inline">npm</span>
                </a>
              </div>
            </header>
            {/* Sidebar for desktop only */}
            <aside className="hidden lg:fixed lg:block left-0 top-20 z-60 w-[280px] shadow-lg shadow-slate-300 h-[calc(100vh-64px)] overflow-y-auto">
              <nav className="px-6 py-6 space-y-8">
                {sections.map((section) => (
                  <div key={section.id}>
                    <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wider px-2">
                      {section.title}
                    </h3>
                    <ul className="space-y-1">
                      {section.items.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.href}
                            className="block text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </aside>
            <main className="flex-1 p-4 md:p-8 bg-slate-50 overflow-x-hidden lg:ml-[280px]">
              {children}
            </main>
            {/* Footer */}
            <footer className="bg-white border-t lg:ml-[280px] border-slate-200 py-8">
              <div className="max-w-7xl mx-auto px-8">
                <div className=" pt-6 text-center text-sm text-slate-500">
                  <p>
                    Powered by{' '}
                    <span className="text-amber-600 font-semibold">
                      Harpy.js
                    </span>{' '}
                    - Soar above the competition
                    <Logo className="inline size-0.5 ml-1" />
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
