import CodeSnippet from '../../../components/code-snippet';
import { snippets } from './snippets';

export default function LayoutsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-600 p-3 rounded-lg">
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
                  d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">
                Multiple Layouts
              </h1>
              <p className="text-slate-600 text-lg">
                Use different layouts for different sections of your application
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-700 text-lg leading-relaxed mb-6">
          Harpy.js supports multiple layouts, allowing you to create different
          visual structures for different parts of your application. This is
          perfect for having a marketing layout for your homepage and a sidebar
          layout for your documentation or admin dashboard.
        </p>
      </div>

      {/* Why Multiple Layouts */}
      <section id="why-multiple-layouts" className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Why Use Multiple Layouts?
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Landing Pages
            </h3>
            <p className="text-blue-800 text-sm">
              Full-width marketing pages with hero sections, testimonials, and
              call-to-action buttons.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
              Documentation
            </h3>
            <p className="text-purple-800 text-sm">
              Sidebar navigation layout for docs, guides, and knowledge base
              articles.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Authentication
            </h3>
            <p className="text-green-800 text-sm">
              Centered, minimal layout for login, register, and password reset
              pages.
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              Admin Dashboard
            </h3>
            <p className="text-amber-800 text-sm">
              Complex layout with sidebar, top navigation, and content area for
              admin panels.
            </p>
          </div>
        </div>
      </section>

      {/* Setting Default Layout */}
      <section id="default-layout" className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          1. Setting the Default Layout
        </h2>

        <p className="text-slate-600 mb-4">
          In{' '}
          <code className="text-sm bg-slate-100 px-2 py-1 rounded">
            main.ts
          </code>
          , configure your default layout that will be used for all routes
          unless explicitly overridden:
        </p>

        <CodeSnippet code={snippets.MAIN_TS} showLineNumbers className="mb-4" />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-blue-900 text-sm">
            <strong>💡 Tip:</strong> The default layout is typically a simple,
            full-width layout used for landing pages and marketing content.
          </p>
        </div>

        <h3 className="text-xl font-semibold text-slate-900 mb-3">
          Example: Default Layout
        </h3>
        <CodeSnippet code={snippets.DEFAULT_LAYOUT} showLineNumbers />
      </section>

      {/* Creating Additional Layouts */}
      <section id="creating-layouts" className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          2. Creating Additional Layouts
        </h2>

        <p className="text-slate-600 mb-4">
          Create additional layouts in your{' '}
          <code className="text-sm bg-slate-100 px-2 py-1 rounded">
            src/layouts/
          </code>{' '}
          folder. Here's an example of a dashboard layout with a sidebar:
        </p>

        <CodeSnippet
          code={snippets.DASHBOARD_LAYOUT}
          showLineNumbers
          className="mb-6"
        />

        <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
          Example: Authentication Layout
        </h3>
        <p className="text-slate-600 mb-4">
          A minimal, centered layout for authentication pages:
        </p>
        <CodeSnippet code={snippets.AUTH_LAYOUT} showLineNumbers />
      </section>

      {/* Using Layouts in Controllers */}
      <section id="using-layouts" className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          3. Using Layouts in Controllers
        </h2>

        <p className="text-slate-600 mb-4">
          Override the default layout for specific routes by passing the{' '}
          <code className="text-sm bg-slate-100 px-2 py-1 rounded">layout</code>{' '}
          option to the{' '}
          <code className="text-sm bg-slate-100 px-2 py-1 rounded">
            @JsxRender
          </code>{' '}
          decorator:
        </p>

        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          Using the Default Layout
        </h3>
        <CodeSnippet
          code={snippets.CONTROLLER_DEFAULT}
          showLineNumbers
          className="mb-6"
        />

        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          Overriding with Dashboard Layout
        </h3>
        <CodeSnippet
          code={snippets.CONTROLLER_DASHBOARD}
          showLineNumbers
          className="mb-6"
        />

        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          Passing Data to Layouts
        </h3>
        <p className="text-slate-600 mb-4">
          Layouts can receive data from controllers, such as navigation
          sections:
        </p>
        <CodeSnippet code={snippets.CONTROLLER_DOCS} showLineNumbers />
      </section>

      {/* Real-World Example */}
      <section id="real-world-example" className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Real-World Example: This Documentation Site
        </h2>

        <p className="text-slate-600 mb-4">
          This very documentation site uses multiple layouts! Here's how it's
          structured:
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Project Structure
          </h3>
          <CodeSnippet code={snippets.PROJECT_STRUCTURE} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-lg p-5">
            <h4 className="font-semibold text-slate-900 mb-2">
              🏠 Homepage (/)
            </h4>
            <p className="text-slate-600 text-sm mb-2">
              Uses <strong>DefaultLayout</strong>
            </p>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Full-width hero section</li>
              <li>• Feature showcase</li>
              <li>• Call-to-action buttons</li>
              <li>• Footer with links</li>
            </ul>
          </div>

          <div className="border border-purple-200 bg-purple-50 rounded-lg p-5">
            <h4 className="font-semibold text-purple-900 mb-2">
              📚 Docs (/docs/*)
            </h4>
            <p className="text-purple-800 text-sm mb-2">
              Uses <strong>DashboardLayout</strong>
            </p>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Sidebar navigation</li>
              <li>• Active section highlighting</li>
              <li>• Mobile-responsive menu</li>
              <li>• Table of contents</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Layout Props */}
      <section id="layout-props" className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Layout Props Reference
        </h2>

        <p className="text-slate-600 mb-4">
          All layouts receive these props from the{' '}
          <code className="text-sm bg-slate-100 px-2 py-1 rounded">
            JsxLayoutProps
          </code>{' '}
          interface:
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-3 font-semibold text-slate-900">
                  Prop
                </th>
                <th className="text-left p-3 font-semibold text-slate-900">
                  Type
                </th>
                <th className="text-left p-3 font-semibold text-slate-900">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="p-3 font-mono text-xs text-purple-600">
                  children
                </td>
                <td className="p-3 text-slate-600">React.ReactNode</td>
                <td className="p-3 text-slate-600">
                  The page content to render
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs text-purple-600">meta</td>
                <td className="p-3 text-slate-600">MetaOptions</td>
                <td className="p-3 text-slate-600">
                  SEO metadata (title, description, etc.)
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs text-purple-600">
                  hydrationScripts
                </td>
                <td className="p-3 text-slate-600">Array</td>
                <td className="p-3 text-slate-600">
                  Client-side hydration scripts
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs text-purple-600">lang</td>
                <td className="p-3 text-slate-600">string</td>
                <td className="p-3 text-slate-600">
                  Current language code (for i18n)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-6">
          <p className="text-amber-900 text-sm">
            <strong>⚠️ Note:</strong> You can extend JsxLayoutProps with custom
            props by using TypeScript intersection types, as shown in the
            DashboardLayout example above.
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Best Practices
        </h2>

        <div className="space-y-4">
          <div className="border-l-4 border-green-500 bg-green-50 p-5 rounded">
            <h3 className="font-semibold text-green-900 mb-2">
              ✅ Keep Layouts Focused
            </h3>
            <p className="text-green-800 text-sm">
              Each layout should serve a specific purpose. Don't create too many
              layouts - typically 2-4 layouts are sufficient for most
              applications.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50 p-5 rounded">
            <h3 className="font-semibold text-blue-900 mb-2">
              💡 Share Common Components
            </h3>
            <p className="text-blue-800 text-sm">
              Extract shared header, footer, and navigation components into
              reusable modules that can be used across different layouts.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50 p-5 rounded">
            <h3 className="font-semibold text-purple-900 mb-2">
              🎨 Consistent Styling
            </h3>
            <p className="text-purple-800 text-sm">
              Maintain consistent branding, colors, and typography across all
              layouts even if the structure differs.
            </p>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50 p-5 rounded">
            <h3 className="font-semibold text-amber-900 mb-2">
              📱 Mobile-First
            </h3>
            <p className="text-amber-800 text-sm">
              Design your layouts to be responsive. Complex layouts like
              dashboards should collapse appropriately on mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Next Steps</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="/docs/routing"
            className="block border border-blue-200 rounded-lg p-5 hover:border-blue-400 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              Routing &amp; Navigation
            </h3>
            <p className="text-blue-800 text-sm">
              Learn how to create routes and navigation systems
            </p>
          </a>

          <a
            href="/docs/seo"
            className="block border border-purple-200 rounded-lg p-5 hover:border-purple-400 hover:bg-purple-50 transition-colors"
          >
            <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              SEO &amp; Metadata
            </h3>
            <p className="text-purple-800 text-sm">
              Optimize your layouts with proper SEO metadata
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
