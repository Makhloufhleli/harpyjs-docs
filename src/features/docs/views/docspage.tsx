import { Dictionary } from '../../../i18n/get-dictionary';

export interface PageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
}

export default function DocsPage({ sections, dict, locale }: PageProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 md:p-12">
        {/* Introduction */}
        <section id="introduction" className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-bold text-slate-900">Documentation</h1>
            <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500 rounded-lg text-amber-600 text-sm font-bold">
              BETA
            </span>
          </div>
          <p className="text-xl text-slate-600 mb-6">
            Welcome to Harpy.js - a full-stack framework that brings React SSR
            to the NestJS ecosystem.
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

        {/* Installation */}
        <section id="installation" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Installation
          </h2>
          <p className="text-slate-600 mb-4">
            Install the Harpy CLI globally using your preferred package manager:
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 mb-2">Using npm:</p>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>npm install -g @hepta-solutions/harpy-cli</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">Using pnpm:</p>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>pnpm add -g @hepta-solutions/harpy-cli</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">Using yarn:</p>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>yarn global add @hepta-solutions/harpy-cli</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quick-start" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Quick Start
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                1. Create a new project
              </h3>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>harpy create my-app</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                2. Navigate to your project
              </h3>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>cd my-app</code>
              </pre>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                3. Start the development server
              </h3>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>pnpm dev</code>
              </pre>
            </div>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <p className="text-green-900">
                ✅ Your app will be available at{' '}
                <code className="bg-green-100 px-2 py-1 rounded">
                  http://localhost:3000
                </code>
              </p>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Architecture
          </h2>
          <p className="text-slate-600 mb-4">
            Harpy.js is built on top of NestJS and extends it with React SSR
            capabilities. Here's how it works:
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">
                🏗️ NestJS Foundation
              </h4>
              <p className="text-slate-600">
                Use all NestJS features: modules, controllers, services,
                dependency injection, guards, interceptors, and more.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">
                ⚛️ React Server Components
              </h4>
              <p className="text-slate-600">
                Write your views using React/JSX with server-side rendering for
                optimal performance and SEO.
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">
                �� Automatic Hydration
              </h4>
              <p className="text-slate-600">
                Client components are automatically detected and hydrated on the
                client side for interactivity.
              </p>
            </div>
          </div>
        </section>

        {/* Server-Side Rendering */}
        <section id="ssr" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Server-Side Rendering
          </h2>
          <p className="text-slate-600 mb-4">
            Harpy.js renders your React components on the server using the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">@JsxRender</code>{' '}
            decorator:
          </p>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-4">
            <code>{`@Controller()
export class HomeController {
  @Get()
  @JsxRender(HomePage, {
    meta: async () => ({
      title: 'Welcome to My App',
      description: 'Built with Harpy.js'
    })
  })
  async home() {
    return { message: 'Hello World' };
  }
}`}</code>
          </pre>
          <p className="text-slate-600">
            The framework automatically renders the component on the server and
            sends the HTML to the client with optimal performance (1-7ms render
            times).
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
