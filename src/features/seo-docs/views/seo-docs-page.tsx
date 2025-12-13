import { type PageProps as CorePageProps } from '@harpy-js/core';
import { Dictionary } from '../../../i18n/get-dictionary';
import CodeSnippet from '../../../components/code-snippet';
import * as snippets from '../snippets';

export interface PageProps extends CorePageProps {
  sections: any[];
  dict: Dictionary;
  activeItemId?: string;
}

export default function SeoDocsPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 lg:p-12">
        {/* Hero Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 rounded-xl shadow-lg">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                SEO & Discoverability
              </h1>
              <p className="text-slate-600 text-lg mt-1">
                Built-in tools for search engine optimization
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <div>
                <p className="text-green-900 font-semibold mb-2">
                  Core Framework Feature
                </p>
                <p className="text-green-800">
                  SEO support is built into Harpy.js core. Every new project
                  automatically includes{' '}
                  <code className="bg-green-100 px-2 py-0.5 rounded">
                    robots.txt
                  </code>{' '}
                  and{' '}
                  <code className="bg-green-100 px-2 py-0.5 rounded">
                    sitemap.xml
                  </code>{' '}
                  generation out of the box, making your application
                  discoverable by search engines from day one.
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-700 text-lg leading-relaxed">
            Harpy.js provides a powerful SEO module that automatically generates{' '}
            <code className="bg-slate-100 px-2 py-1 rounded text-sm">
              robots.txt
            </code>{' '}
            and{' '}
            <code className="bg-slate-100 px-2 py-1 rounded text-sm">
              sitemap.xml
            </code>{' '}
            files for your application. Built on top of NestJS's dependency
            injection system, the SEO module offers both default implementations
            and extensible services for advanced use cases.
          </p>
        </div>

        {/* Quick Start */}
        <section id="quick-start" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Quick Start
          </h2>

          <p className="text-slate-600 mb-4">
            For new projects created with the Harpy.js CLI, SEO is automatically
            configured. For existing projects, add the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">SeoModule</code> to
            your app module:
          </p>

          <CodeSnippet
            code={snippets.IMPORT_SEO_MODULE}
            showLineNumbers
            className="mb-6"
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
            <p className="text-blue-900">
              <strong>⚡ Instant Results:</strong> Once imported, your
              application automatically serves{' '}
              <code className="bg-blue-100 px-2 py-0.5 rounded">
                /robots.txt
              </code>{' '}
              and{' '}
              <code className="bg-blue-100 px-2 py-0.5 rounded">
                /sitemap.xml
              </code>{' '}
              endpoints with sensible defaults.
            </p>
          </div>
        </section>

        {/* What Gets Generated */}
        <section id="generated-files" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What Gets Generated
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            robots.txt
          </h3>
          <p className="text-slate-600 mb-3">
            The{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">robots.txt</code>{' '}
            file tells search engine crawlers which parts of your site they can
            access. Here's what the default configuration generates:
          </p>

          <CodeSnippet
            code={snippets.ROBOTS_TXT_OUTPUT}
            showLineNumbers
            className="mb-6"
          />

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            sitemap.xml
          </h3>
          <p className="text-slate-600 mb-3">
            The sitemap provides search engines with a structured list of your
            pages, including metadata about update frequency and priority:
          </p>

          <CodeSnippet
            code={snippets.SITEMAP_XML_OUTPUT}
            showLineNumbers
            className="mb-6"
          />

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2">Key Benefits:</h4>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Faster indexing of new and updated pages</li>
              <li>Better crawl budget allocation</li>
              <li>Improved discovery of deep or dynamic pages</li>
              <li>Priority hints for important content</li>
            </ul>
          </div>
        </section>

        {/* Custom Implementation */}
        <section id="custom-service" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Custom SEO Service
          </h2>

          <p className="text-slate-600 mb-4">
            For most applications, you'll want to customize which URLs appear in
            your sitemap. Create a custom service by extending{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              BaseSeoService
            </code>
            :
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Step 1: Create Your SEO Service
          </h3>

          <CodeSnippet
            code={snippets.CUSTOM_SEO_SERVICE}
            showLineNumbers
            className="mb-6"
          />

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Step 2: Register Your Custom Service
          </h3>

          <CodeSnippet
            code={snippets.CUSTOM_SERVICE_MODULE}
            showLineNumbers
            className="mb-6"
          />

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <p className="text-purple-900">
              <strong>💡 Protected Access:</strong> The{' '}
              <code className="bg-purple-100 px-2 py-0.5 rounded">baseUrl</code>{' '}
              property is protected in{' '}
              <code className="bg-purple-100 px-2 py-0.5 rounded">
                BaseSeoService
              </code>
              , giving your custom service access to the configured base URL
              without manually passing it around.
            </p>
          </div>
        </section>

        {/* Dynamic Sitemaps */}
        <section id="dynamic-sitemaps" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Dynamic Sitemaps from Database
          </h2>

          <p className="text-slate-600 mb-4">
            Real-world applications often need to generate sitemaps from
            database content like blog posts, products, or user profiles. Here's
            how to integrate with TypeORM:
          </p>

          <CodeSnippet
            code={snippets.DYNAMIC_SITEMAP_DATABASE}
            showLineNumbers
            className="mb-6"
          />

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-amber-900">
              <strong>⚠️ Performance Tip:</strong> For large databases, consider
              caching sitemap results or implementing pagination with sitemap
              index files to avoid overwhelming your database with every crawler
              request.
            </p>
          </div>
        </section>

        {/* Multi-language Support */}
        <section id="multi-language" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Multi-language Sitemaps
          </h2>

          <p className="text-slate-600 mb-4">
            For internationalized applications, you can use the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">alternates</code>{' '}
            property to specify alternate language versions of each page:
          </p>

          <CodeSnippet
            code={snippets.MULTI_LANGUAGE_SITEMAP}
            showLineNumbers
            className="mb-6"
          />

          <p className="text-slate-600">
            This generates proper{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              &lt;xhtml:link&gt;
            </code>{' '}
            tags in your sitemap, helping search engines understand the
            relationship between translated versions of your content.
          </p>
        </section>

        {/* Advanced robots.txt */}
        <section id="advanced-robots" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Advanced robots.txt Configuration
          </h2>

          <p className="text-slate-600 mb-4">
            You can define different rules for different crawlers and specify
            multiple sitemaps:
          </p>

          <CodeSnippet
            code={snippets.MULTIPLE_ROBOTS_RULES}
            showLineNumbers
            className="mb-6"
          />

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2">Use Cases:</h4>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>
                <strong>Crawl delays:</strong> Prevent aggressive crawlers from
                overwhelming your server
              </li>
              <li>
                <strong>Multiple sitemaps:</strong> Separate sitemaps for
                different content types (pages, images, videos)
              </li>
              <li>
                <strong>Bot-specific rules:</strong> Customize behavior for
                Google, Bing, or other specific crawlers
              </li>
            </ul>
          </div>
        </section>

        {/* Type Reference */}
        <section id="types" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            TypeScript Types
          </h2>

          <p className="text-slate-600 mb-4">
            The SEO module is fully typed for excellent IDE support:
          </p>

          <CodeSnippet
            code={snippets.SITEMAP_TYPES}
            showLineNumbers
            className="mb-6"
          />
        </section>

        {/* Testing */}
        <section id="testing" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Testing Your Configuration
          </h2>

          <p className="text-slate-600 mb-4">
            Once your application is running, test your SEO endpoints:
          </p>

          <CodeSnippet
            code={snippets.TEST_ENDPOINTS}
            showLineNumbers
            className="mb-6"
          />
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2">
              🔍 Validation Tools:
            </h4>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>
                <a
                  href="https://www.google.com/webmasters/tools/robots-testing-tool"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google's robots.txt Tester
                </a>
              </li>
              <li>
                <a
                  href="https://search.google.com/search-console"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Search Console
                </a>{' '}
                - Submit and validate sitemaps
              </li>
              <li>
                <a
                  href="https://www.xml-sitemaps.com/validate-xml-sitemap.html"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  XML Sitemap Validator
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Best Practices
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
              <h4 className="font-semibold text-green-900 mb-2">
                ✅ Update Frequencies
              </h4>
              <p className="text-green-800">
                Set realistic{' '}
                <code className="bg-green-100 px-2 py-0.5 rounded">
                  changeFrequency
                </code>{' '}
                values. Use 'daily' for homepage, 'weekly' for blog posts, and
                'monthly' for static pages.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h4 className="font-semibold text-blue-900 mb-2">
                ✅ Priority Values
              </h4>
              <p className="text-blue-800">
                Reserve{' '}
                <code className="bg-blue-100 px-2 py-0.5 rounded">
                  priority: 1.0
                </code>{' '}
                for your most important pages. Use 0.8-0.9 for major sections
                and 0.5-0.7 for standard content.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
              <h4 className="font-semibold text-purple-900 mb-2">
                ✅ Caching Strategy
              </h4>
              <p className="text-purple-800">
                The SEO controllers include cache headers by default (24h for
                robots.txt, 1h for sitemap.xml). Adjust these based on how
                frequently your content changes.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 bg-amber-50 p-4 rounded">
              <h4 className="font-semibold text-amber-900 mb-2">
                ✅ Environment Variables
              </h4>
              <p className="text-amber-800">
                Always use{' '}
                <code className="bg-amber-100 px-2 py-0.5 rounded">
                  process.env.BASE_URL
                </code>{' '}
                for your base URL configuration. This ensures correct URLs
                across development, staging, and production environments.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section id="why-it-matters" className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why SEO Matters in Modern Web Development
          </h2>

          <p className="text-slate-600 mb-4">
            Search engine optimization isn't just about rankings—it's about
            making your application discoverable, accessible, and successful:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-5">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                Organic Traffic
              </h4>
              <p className="text-blue-800 text-sm">
                Properly configured sitemaps help search engines discover and
                index your content faster, leading to increased organic traffic.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-5">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Lower Acquisition Costs
              </h4>
              <p className="text-green-800 text-sm">
                Good SEO reduces reliance on paid advertising by improving
                organic visibility and reducing customer acquisition costs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-5">
              <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Credibility & Trust
              </h4>
              <p className="text-purple-800 text-sm">
                Users trust search results. Higher rankings signal authority and
                build credibility with your audience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-5">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Global Reach
              </h4>
              <p className="text-amber-800 text-sm">
                Multi-language sitemap support helps international audiences
                find your content in their preferred language.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-xl p-6">
            <h4 className="font-bold text-xl mb-2">
              Built for Production from Day One
            </h4>
            <p className="text-slate-300">
              By including SEO as a core framework feature, Harpy.js ensures
              that developers don't have to remember to add these critical
              features later. Your application is search-engine ready from the
              moment you start development, following industry best practices
              automatically.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section id="next-steps">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Next Steps</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="/docs/routing"
              className="block bg-white border-2 border-slate-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">
                📍 Routing Guide
              </h4>
              <p className="text-slate-600 text-sm">
                Learn how to structure your routes for optimal SEO
              </p>
            </a>

            <a
              href="/docs/internationalization"
              className="block bg-white border-2 border-slate-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">
                🌍 Internationalization
              </h4>
              <p className="text-slate-600 text-sm">
                Combine i18n with multi-language sitemaps
              </p>
            </a>

            <a
              href="https://github.com/Makhloufhleli/harpy.js"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-2 border-slate-200 rounded-lg p-5 hover:border-blue-400 hover:shadow-md transition-all"
            >
              <h4 className="font-semibold text-slate-900 mb-2">
                📦 View Source
              </h4>
              <p className="text-slate-600 text-sm">
                Explore the SEO module implementation on GitHub
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
