import { Dictionary } from '../../../i18n/get-dictionary';

export interface PageProps {
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

        {/* Quick Start */}
        {/* <section id="quick-start" className="mb-16">
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
        </section> */}

        {/* Architecture */}
        {/* <section id="architecture" className="mb-16">
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
        </section> */}

        {/* Server-Side Rendering */}
        {/* <section id="ssr" className="mb-16">
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
        </section> */}

        {/* Rate Limiting */}
        {/* <section id="rate-limiting" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Rate Limiting
          </h2>
          <p className="text-slate-600 mb-4">
            Protect your Harpy.js application from abuse with built-in rate
            limiting using{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              @nestjs/throttler
            </code>
            .
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
            <p className="text-green-900">
              <strong>✅ Why Rate Limiting?</strong> Prevents DDoS attacks, bot
              abuse, and ensures fair resource distribution across all users.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Installation
          </h3>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>pnpm add @nestjs/throttler</code>
          </pre>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Basic Configuration
          </h3>
          <p className="text-slate-600 mb-3">
            Add the ThrottlerModule to your app.module.ts:
          </p>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>
              {`import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
              import { APP_GUARD } from '@nestjs/core';

              @Module({
                imports: [
                  ThrottlerModule.forRoot([
                    {
                      ttl: 10000,  // Time to live: 10 seconds
                      limit: 10,   // Maximum 10 requests per TTL
                    },
                  ]),
                  // ... other modules
                ],
                providers: [
                  {
                    provide: APP_GUARD,
                    useClass: ThrottlerGuard,
                  },
                ],
              })
              export class AppModule {}`}
            </code>
          </pre>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Custom Rate Limits per Route
          </h3>
          <p className="text-slate-600 mb-3">
            Apply different rate limits to specific routes using the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">@Throttle</code>{' '}
            decorator:
          </p>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>{`import { Throttle } from '@nestjs/throttler';

              @Controller('api')
              export class ApiController {
                // Allow 5 requests per 60 seconds for this endpoint
                @Throttle({ default: { limit: 5, ttl: 60000 } })
                @Get('sensitive-data')
                getSensitiveData() {
                  return { data: 'Protected content' };
                }

                // Skip rate limiting for specific routes
                @SkipThrottle()
                @Get('public-data')
                getPublicData() {
                  return { data: 'Public content' };
                }
              }`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Configuration Options
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-slate-200 rounded-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b">
                    Option
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-slate-900">
                    <code className="bg-slate-100 px-2 py-1 rounded">ttl</code>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">number</td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    Time to live in milliseconds
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-sm text-slate-900">
                    <code className="bg-slate-100 px-2 py-1 rounded">
                      limit
                    </code>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">number</td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    Maximum number of requests within TTL
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-slate-900">
                    <code className="bg-slate-100 px-2 py-1 rounded">
                      ignoreUserAgents
                    </code>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-600">RegExp[]</td>
                  <td className="px-4 py-3 text-sm text-slate-600">
                    Array of user agents to ignore
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-amber-900">
              <strong>💡 Best Practice:</strong> Adjust rate limits based on
              your application needs. API endpoints may need stricter limits
              than public pages. Monitor your application's traffic patterns and
              adjust accordingly.
            </p>
          </div>
        </section> */}

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
