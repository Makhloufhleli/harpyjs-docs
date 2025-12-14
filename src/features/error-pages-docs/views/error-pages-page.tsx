import React from 'react';
import type { JsxLayoutProps } from '@harpy-js/core';
import CodeSnippet from 'src/components/code-snippet';
import {
  customErrorPageExample,
  configurationExample,
  errorLayoutExample,
  propsInterfaceExample,
} from './snippets';

interface ErrorPagesPageProps extends JsxLayoutProps {
  title: string;
  description: string;
  sections: Array<{
    id: string;
    title: string;
    content: string;
  }>;
}

export default function ErrorPagesPage({
  title,
  description,
}: ErrorPagesPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl text-gray-600">{description}</p>
        </div>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-4xl">📄</span>
            Overview
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-600">
            <p className="text-gray-700 leading-relaxed mb-4">
              Harpy.js provides a flexible error handling system that allows you
              to customize error pages for different HTTP status codes (404,
              500, 401, 403) with full support for JSX components and Tailwind
              CSS styling.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All error pages are automatically wrapped in an{' '}
              <code className="px-2 py-1 bg-gray-100 rounded text-purple-600">
                ErrorLayout
              </code>{' '}
              component that ensures proper HTML structure and CSS imports,
              giving you beautiful styled error pages out of the box.
            </p>
          </div>
        </section>

        {/* Default Error Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-4xl">✨</span>
            Default Error Pages
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Harpy.js comes with beautifully designed default error pages that
              include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                Gradient backgrounds with custom color schemes per error type
              </li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Helpful error messages and actions</li>
              <li>Proper accessibility and SEO meta tags</li>
              <li>Error details display in development mode</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Available Default Pages:
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  <span className="text-gray-700">404 - Not Found</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💥</span>
                  <span className="text-gray-700">500 - Server Error</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-gray-700">401 - Unauthorized</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⛔</span>
                  <span className="text-gray-700">403 - Forbidden</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creating Custom Error Pages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            Creating Custom Error Pages
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Create custom error pages as JSX components that match your
              application's design. Your custom pages will automatically be
              wrapped in{' '}
              <code className="px-2 py-1 bg-gray-100 rounded text-purple-600">
                ErrorLayout
              </code>
              to include proper CSS styling.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 1: Create the Component
              </h3>
              <CodeSnippet
                code={customErrorPageExample}
                language="typescript"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 2: Define Props Interface
              </h3>
              <p className="text-gray-700 mb-3">
                Your error page components should extend{' '}
                <code className="px-2 py-1 bg-gray-100 rounded text-purple-600">
                  JsxLayoutProps
                </code>
                and can accept additional props:
              </p>
              <CodeSnippet code={propsInterfaceExample} language="typescript" />
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-4xl">⚙️</span>
            Configuration
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Configure custom error pages in your{' '}
              <code className="px-2 py-1 bg-gray-100 rounded text-purple-600">
                main.ts
              </code>{' '}
              file using the{' '}
              <code className="px-2 py-1 bg-gray-100 rounded text-purple-600">
                setupHarpyApp
              </code>{' '}
              function:
            </p>
            <CodeSnippet code={configurationExample} language="typescript" />

            <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Pro Tip</h4>
                  <p className="text-blue-800 text-sm">
                    You don't need to configure all error pages. Any status code
                    without a custom page will automatically use the default
                    Harpy.js error page for that status code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ErrorLayout Component */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-4xl">🎁</span>
            ErrorLayout Wrapper
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              The{' '}
              <code className="px-2 py-1 bg-gray-100 rounded text-purple-600">
                ErrorLayout
              </code>{' '}
              component is automatically applied to all error pages (both
              default and custom). It ensures:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                Proper HTML structure with DOCTYPE, html, head, and body tags
              </li>
              <li>CSS links are included for Tailwind styling</li>
              <li>Responsive viewport meta tag</li>
              <li>Page title is set appropriately</li>
            </ul>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                ErrorLayout Implementation:
              </h3>
              <CodeSnippet code={errorLayoutExample} language="typescript" />
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
              <div className="flex gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">
                    Automatic Wrapping
                  </h4>
                  <p className="text-green-800 text-sm">
                    You don't need to manually wrap your error pages in
                    ErrorLayout. The Harpy.js error handling system
                    automatically applies this wrapper to all error pages,
                    ensuring consistent styling and structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Styling with Tailwind */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-4xl">🎨</span>
            Styling with Tailwind CSS
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Error pages automatically receive Tailwind CSS styling through the
              ErrorLayout wrapper. You can use any Tailwind utility classes in
              your custom error pages:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Recommended Tailwind Patterns:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>
                    <code className="px-2 py-1 bg-white rounded text-purple-600">
                      min-h-screen
                    </code>{' '}
                    - Full viewport height
                  </li>
                  <li>
                    <code className="px-2 py-1 bg-white rounded text-purple-600">
                      bg-gradient-to-br
                    </code>{' '}
                    - Beautiful gradient backgrounds
                  </li>
                  <li>
                    <code className="px-2 py-1 bg-white rounded text-purple-600">
                      rounded-2xl shadow-2xl
                    </code>{' '}
                    - Card-style containers
                  </li>
                  <li>
                    <code className="px-2 py-1 bg-white rounded text-purple-600">
                      text-transparent bg-clip-text
                    </code>{' '}
                    - Gradient text effects
                  </li>
                  <li>
                    <code className="px-2 py-1 bg-white rounded text-purple-600">
                      transform hover:-translate-y-0.5
                    </code>{' '}
                    - Interactive hover effects
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
              <div className="flex gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">
                    Design Consistency
                  </h4>
                  <p className="text-purple-800 text-sm">
                    The default error pages use consistent design patterns that
                    you can follow in your custom pages. Check the{' '}
                    <code className="px-2 py-1 bg-white rounded text-purple-700">
                      @harpy-js/core
                    </code>{' '}
                    package for reference implementations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <span className="text-4xl">⭐</span>
            Best Practices
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-3xl">1️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Keep Error Pages Simple
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Error pages should load quickly and not depend on external
                    resources that might fail. Keep them self-contained.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">2️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Provide Helpful Actions
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Include links to common pages (home, docs, support) and
                    actions (retry, go back) to help users recover from errors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">3️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Show Error Details in Development
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Use conditional rendering to show technical error details in
                    development mode while keeping production pages
                    user-friendly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">4️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Match Your Brand
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Customize error pages to match your application's design
                    system, colors, and branding for a consistent user
                    experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-3xl">5️⃣</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Test Your Error Pages
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Visit invalid routes and test error scenarios to ensure your
                    custom error pages render correctly with proper styling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Documentation */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Related Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/docs/layouts"
                className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-4 transition-all"
              >
                <h3 className="font-semibold mb-2">📐 Layouts</h3>
                <p className="text-sm text-white/90">
                  Learn about layout systems
                </p>
              </a>
              <a
                href="/docs/routing"
                className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-4 transition-all"
              >
                <h3 className="font-semibold mb-2">🛣️ Routing</h3>
                <p className="text-sm text-white/90">
                  Understand route handling
                </p>
              </a>
              <a
                href="/docs"
                className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-4 transition-all"
              >
                <h3 className="font-semibold mb-2">📚 Getting Started</h3>
                <p className="text-sm text-white/90">Start with the basics</p>
              </a>
              <a
                href="/docs/seo"
                className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-4 transition-all"
              >
                <h3 className="font-semibold mb-2">🔍 SEO</h3>
                <p className="text-sm text-white/90">
                  Optimize for search engines
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
