import { type PageProps as CorePageProps } from '@harpy-js/core';
import { Dictionary } from '../../../i18n/get-dictionary';
import CodeSnippet from '../../../components/code-snippet';
import ArchitectureDiagram from '../components/architecture-diagram';
import * as snippets from '../snippets';

export interface PageProps extends CorePageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
}

export default function JsxEnginePage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 lg:p-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
            JSX Engine & Hydration Architecture
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            A comprehensive guide to understanding how Harpy.js renders React
            components server-side, integrates with Fastify, and automatically
            hydrates client components with optimistic chunking for maximum
            performance.
          </p>
        </div>

        {/* Architecture Overview */}
        <section id="architecture-overview" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Architecture Overview
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Visual Architecture Flow
            </h3>
            <p className="text-slate-600 mb-4">
              This diagram illustrates the complete request-response cycle, from
              browser request through Fastify, NestJS, React SSR, hydration
              chunk generation, and back to the browser with interactive
              components.
            </p>
            <ArchitectureDiagram />
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">
              The Complete Flow
            </h3>
            <CodeSnippet
              code={snippets.JSX_ENGINE_ARCHITECTURE}
              className="mb-4"
            />
          </div>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Harpy.js implements a sophisticated JSX rendering engine that
            seamlessly integrates React Server-Side Rendering with NestJS
            controllers and Fastify's high-performance HTTP server. The engine
            intelligently distinguishes between server components (rendered once
            on the server) and client components (hydrated on the browser) to
            deliver optimal performance.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="border border-slate-200 rounded-lg p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-slate-900 mb-2">
                1-7ms Render Time
              </h4>
              <p className="text-slate-600 text-sm">
                Highly optimized React SSR engine delivers HTML in milliseconds,
                ensuring instant First Contentful Paint.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-slate-900 mb-2">
                Automatic Detection
              </h4>
              <p className="text-slate-600 text-sm">
                Client components are automatically detected via 'use client'
                directive. No manual configuration needed.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="font-bold text-slate-900 mb-2">
                Optimistic Chunking
              </h4>
              <p className="text-slate-600 text-sm">
                Each client component gets its own chunk, enabling parallel
                loading and aggressive browser caching.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <div className="text-3xl mb-3">🔄</div>
              <h4 className="font-bold text-slate-900 mb-2">
                Seamless Hydration
              </h4>
              <p className="text-slate-600 text-sm">
                Client components automatically hydrate without flickering,
                preserving server-rendered HTML perfectly.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            How It Works: Step by Step
          </h2>

          <div className="space-y-8">
            {/* Step 1: Request Handling */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white font-bold text-lg">
                  1
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Request Handling with @JsxRender
                </h3>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                When a request arrives, Fastify routes it to a NestJS
                controller. The{' '}
                <code className="bg-slate-100 px-2 py-1 rounded text-sm">
                  @JsxRender
                </code>{' '}
                decorator tells Harpy to render the specified component
                server-side with the returned props.
              </p>

              <CodeSnippet
                code={snippets.JSX_RENDER_EXAMPLE}
                language="typescript"
                showLineNumbers
                className="mb-4"
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-900">
                  <strong>Key Point:</strong> The controller returns plain data
                  (props), and the decorator handles all the JSX rendering
                  complexity automatically.
                </p>
              </div>
            </div>

            {/* Step 2: Component Types */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-lg">
                  2
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Server vs Client Components
                </h3>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                Harpy distinguishes between two types of React components:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="border-2 border-slate-200 rounded-lg p-4">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-green-600">🖥️</span> Server Components
                  </h4>
                  <p className="text-slate-600 text-sm mb-3">
                    Rendered once on the server. Pure HTML sent to client. No
                    JavaScript needed. Perfect for static content.
                  </p>
                  <CodeSnippet
                    code={snippets.SERVER_COMPONENT_EXAMPLE}
                    language="typescript"
                    className="text-xs"
                  />
                </div>

                <div className="border-2 border-blue-400 rounded-lg p-4 bg-blue-50">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-blue-600">⚡</span> Client Components
                  </h4>
                  <p className="text-slate-600 text-sm mb-3">
                    Require interactivity (hooks, events). Rendered on server,
                    then hydrated on client. Marked with 'use client'.
                  </p>
                  <CodeSnippet
                    code={snippets.CLIENT_COMPONENT_EXAMPLE}
                    language="typescript"
                    className="text-xs"
                  />
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                <p className="text-amber-900 text-sm">
                  <strong>Best Practice:</strong> Use server components by
                  default. Only add 'use client' when you need interactivity
                  (useState, useEffect, onClick, etc.). This minimizes
                  JavaScript sent to the browser.
                </p>
              </div>
            </div>

            {/* Step 3: Server-Side Rendering */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white font-bold text-lg">
                  3
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Server-Side Rendering Process
                </h3>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                The JSX Engine uses React's{' '}
                <code className="bg-slate-100 px-2 py-1 rounded text-sm">
                  renderToString()
                </code>{' '}
                to generate HTML on the server. This happens in 1-7ms for most
                pages. The engine tracks which client components were used
                during rendering.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-slate-900 mb-3">
                  Rendering Steps:
                </h4>
                <ol className="space-y-3 text-slate-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">1.</span>
                    <div>
                      <strong>Execute component function</strong> with props
                      from controller
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">2.</span>
                    <div>
                      <strong>Recursively render children</strong> including
                      layouts and nested components
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">3.</span>
                    <div>
                      <strong>Detect client components</strong> in the tree and
                      mark them for hydration
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">4.</span>
                    <div>
                      <strong>Generate complete HTML string</strong> with proper
                      structure
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-purple-600">5.</span>
                    <div>
                      <strong>Inject hydration metadata</strong> and script tags
                      for required chunks
                    </div>
                  </li>
                </ol>
              </div>

              <CodeSnippet
                code={snippets.HYBRID_COMPONENT}
                language="typescript"
                showLineNumbers
                className="mb-4"
              />
            </div>

            {/* Step 4: Hydration */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white font-bold text-lg">
                  4
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Client-Side Hydration
                </h3>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">
                After the HTML arrives and renders (instant FCP!), the hydration
                scripts execute to make client components interactive. This
                process is automatic and seamless.
              </p>

              <CodeSnippet
                code={snippets.HYDRATION_MECHANISM}
                className="mb-4"
              />

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-900">
                  <strong>Zero Flickering:</strong> Because the HTML is already
                  correct from the server, there's no layout shift or content
                  flickering during hydration. The page looks perfect
                  immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Optimistic Chunking */}
        <section id="chunking-strategy" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Optimistic Chunking Strategy
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Harpy implements an "optimistic" code-splitting strategy where each
            client component gets its own JavaScript chunk. This approach
            optimizes for HTTP/2 parallel loading and aggressive browser
            caching.
          </p>

          <CodeSnippet code={snippets.CHUNKING_STRATEGY} className="mb-6" />

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">
                🚀 Parallel Loading
              </h4>
              <p className="text-slate-600 text-sm">
                With HTTP/2, browsers load all chunks simultaneously. No
                waterfall delays.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">
                💾 Smart Caching
              </h4>
              <p className="text-slate-600 text-sm">
                Change one component, only that chunk invalidates. vendor.js
                cached forever.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-bold text-slate-900 mb-2">📦 Minimal Size</h4>
              <p className="text-slate-600 text-sm">
                Only load JavaScript for components actually rendered on the
                page.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h4 className="font-semibold text-slate-900 mb-3">
              Why Not Bundle Everything Together?
            </h4>
            <p className="text-slate-600 mb-3">
              Traditional approaches bundle all JavaScript into one large file.
              This seems simpler, but has major downsides:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>Large initial download (500kb+)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>
                  Cache invalidation on any change (users re-download
                  everything)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>Loads code for components not on the current page</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">✗</span>
                <span>Slower Time to Interactive</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Fastify Integration */}
        <section id="fastify-integration" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Fastify Integration
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Harpy.js leverages Fastify's performance and extensibility to serve
            JSX-rendered content efficiently. The integration is seamless and
            requires minimal configuration.
          </p>

          <CodeSnippet
            code={snippets.FASTIFY_INTEGRATION}
            language="typescript"
            showLineNumbers
            className="mb-6"
          />

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-slate-900 mb-3">
              What Harpy Adds to Fastify:
            </h4>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <div>
                  <strong>JSX Reply Decorator:</strong> Adds{' '}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
                    reply.jsx()
                  </code>{' '}
                  method for rendering components
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <div>
                  <strong>Static File Serving:</strong> Automatically serves
                  chunks from{' '}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm">
                    dist/chunks/
                  </code>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <div>
                  <strong>Content-Type Headers:</strong> Proper HTML/CSS/JS/JSON
                  headers automatically set
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <div>
                  <strong>Error Handling:</strong> Custom error pages rendered
                  with JSX
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <div>
                  <strong>Response Streaming:</strong> Efficient HTML delivery
                  with low memory usage
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <p className="text-purple-900">
              <strong>Performance Note:</strong> Fastify is one of the fastest
              Node.js web frameworks (30,000+ req/sec). Combined with Harpy's
              1-7ms SSR, you get sub-50ms Time to First Byte consistently.
            </p>
          </div>
        </section>

        {/* Build Process */}
        <section id="build-process" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Build Process Deep Dive
          </h2>

          <p className="text-slate-600 mb-4 leading-relaxed">
            Understanding the build process helps you optimize your application
            and debug issues effectively. Harpy's build is fast and transparent.
          </p>

          <CodeSnippet
            code={snippets.BUILD_PROCESS}
            language="bash"
            className="mb-6"
          />

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded">
              <h4 className="font-bold text-slate-900 mb-2">
                1. TypeScript Compilation
              </h4>
              <p className="text-slate-600 text-sm">
                Server-side code is compiled with{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">tsc</code>. JSX
                is preserved in components for the JSX engine to process at
                runtime. Fast incremental builds in development.
              </p>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded">
              <h4 className="font-bold text-slate-900 mb-2">
                2. Client Component Detection
              </h4>
              <p className="text-slate-600 text-sm mb-2">
                The build system scans all{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">.tsx</code>{' '}
                files for the{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  'use client'
                </code>{' '}
                directive. Each client component becomes a separate entry point.
              </p>
              <p className="text-slate-600 text-sm">
                Dependencies are analyzed to create the vendor chunk with shared
                code (React, ReactDOM, common utilities).
              </p>
            </div>

            <div className="border-l-4 border-purple-500 bg-purple-50 p-4 rounded">
              <h4 className="font-bold text-slate-900 mb-2">
                3. Hydration Build (esbuild)
              </h4>
              <p className="text-slate-600 text-sm mb-2">
                Using esbuild for maximum speed (10-100x faster than Webpack):
              </p>
              <ul className="text-slate-600 text-sm space-y-1 ml-4">
                <li>• Bundle each component independently</li>
                <li>• Tree-shaking to remove unused code</li>
                <li>• Minification for production</li>
                <li>• Source maps for debugging</li>
                <li>• Typical build time: 30-200ms per component</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
              <h4 className="font-bold text-slate-900 mb-2">
                4. Style Compilation
              </h4>
              <p className="text-slate-600 text-sm">
                Tailwind CSS processed with PostCSS. Production builds are
                minified with cssnano. Critical CSS can be inlined for instant
                first paint.
              </p>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section id="performance" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Performance Metrics
          </h2>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Real-world performance data from production Harpy.js applications:
          </p>

          <CodeSnippet code={snippets.PERFORMANCE_METRICS} className="mb-6" />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                1-7ms SSR
              </h3>
              <p className="text-slate-600 mb-3">
                Most pages render in under 5 milliseconds on the server. Complex
                pages with many components: under 10ms.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Compare:</strong> Traditional SSR frameworks: 50-200ms
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                ~200kb Total JS
              </h3>
              <p className="text-slate-600 mb-3">
                vendor.js (188kb cached) + page-specific chunks (10-30kb). Only
                interactive components send JavaScript.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Compare:</strong> Typical SPA: 500kb-2mb initial bundle
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                &lt;200ms FCP
              </h3>
              <p className="text-slate-600 mb-3">
                First Contentful Paint happens almost instantly because HTML is
                already rendered and sent immediately.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Compare:</strong> Client-side apps: 1-3 seconds FCP
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                &lt;500ms TTI
              </h3>
              <p className="text-slate-600 mb-3">
                Time to Interactive is extremely fast. Small JS bundles load and
                execute quickly. Page is fully interactive in half a second.
              </p>
              <p className="text-slate-600 text-sm">
                <strong>Compare:</strong> Heavy SPAs: 3-10 seconds TTI
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Best Practices
          </h2>

          <div className="space-y-6">
            <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                DO: Use Server Components by Default
              </h3>
              <p className="text-slate-600 mb-2">
                Start with server components. They're simpler, faster, and send
                zero JavaScript to the client. Only add{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  'use client'
                </code>{' '}
                when you actually need interactivity.
              </p>
              <p className="text-slate-600 text-sm italic">
                Example: Headers, footers, static content, lists → server
                components
              </p>
            </div>

            <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                DO: Keep Client Components Small
              </h3>
              <p className="text-slate-600 mb-2">
                Don't wrap entire pages in{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  'use client'
                </code>
                . Extract only the interactive parts into separate client
                components. This minimizes JavaScript bundle size.
              </p>
              <p className="text-slate-600 text-sm italic">
                Example: Interactive button/form inside a static article →
                button is client, rest is server
              </p>
            </div>

            <div className="border-2 border-green-200 bg-green-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-green-600">✓</span>
                DO: Trust the Chunking Strategy
              </h3>
              <p className="text-slate-600">
                Don't try to manually optimize chunk sizes or bundle components
                together. Harpy's optimistic chunking strategy is designed for
                HTTP/2 and modern browsers. More small chunks = better caching
                and parallel loading.
              </p>
            </div>

            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-600">✗</span>
                DON'T: Use 'use client' Everywhere
              </h3>
              <p className="text-slate-600">
                Adding{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  'use client'
                </code>{' '}
                to every component defeats the purpose of SSR. You'll send
                unnecessary JavaScript and lose the performance benefits of
                server rendering.
              </p>
            </div>

            <div className="border-2 border-red-200 bg-red-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-red-600">✗</span>
                DON'T: Import Heavy Libraries in Server Components
              </h3>
              <p className="text-slate-600">
                If a server component imports a large library (like lodash
                entire package), it increases server memory. Use targeted
                imports or move heavy logic to services.
              </p>
            </div>
          </div>
        </section>

        {/* Debugging & Troubleshooting */}
        <section id="debugging" className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Debugging & Troubleshooting
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">
                Common Issue: Component Not Hydrating
              </h3>
              <p className="text-slate-600 mb-2">
                <strong>Symptom:</strong> Click events don't work, useState
                doesn't update.
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Cause:</strong> Forgot to add{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  'use client'
                </code>{' '}
                directive.
              </p>
              <p className="text-slate-600">
                <strong>Solution:</strong> Add{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  'use client'
                </code>{' '}
                as the first line of the component file.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">
                Common Issue: Hydration Mismatch
              </h3>
              <p className="text-slate-600 mb-2">
                <strong>Symptom:</strong> Console warning about server/client
                HTML mismatch.
              </p>
              <p className="text-slate-600 mb-2">
                <strong>Cause:</strong> Component renders different content on
                server vs client (e.g., Date.now(), random numbers).
              </p>
              <p className="text-slate-600">
                <strong>Solution:</strong> Move dynamic values to{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  useEffect
                </code>{' '}
                or pass them as props from the server.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">
                Debugging Tip: Check Build Output
              </h3>
              <p className="text-slate-600 mb-2">
                Run{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  harpy build
                </code>{' '}
                and check the console output. You'll see:
              </p>
              <ul className="text-slate-600 text-sm space-y-1 ml-4">
                <li>• List of detected client components</li>
                <li>• Chunk sizes for each component</li>
                <li>• Build time per component</li>
                <li>• Any warnings about large dependencies</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">
                Debugging Tip: Check Network Tab
              </h3>
              <p className="text-slate-600">
                Open browser DevTools → Network tab. Filter by JS. You should
                see{' '}
                <code className="bg-white px-1.5 py-0.5 rounded">
                  vendor.js
                </code>{' '}
                and individual component chunks. If a chunk is missing, that
                component won't hydrate.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section id="summary" className="mb-12">
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 border-2 border-orange-300 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Summary</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Harpy.js delivers exceptional performance through its
              sophisticated JSX engine architecture:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Server-first rendering</strong> with 1-7ms response
                  times
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Automatic client component detection</strong> via 'use
                  client'
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Optimistic chunking</strong> for parallel loading and
                  aggressive caching
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Seamless hydration</strong> without flickering or
                  layout shifts
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>
                  <strong>Fastify integration</strong> for maximum server
                  performance
                </span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-4">
              The result: lightning-fast pages that feel instant to users while
              maintaining full React interactivity where needed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
