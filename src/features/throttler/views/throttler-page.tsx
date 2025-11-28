import { Dictionary } from '../../../i18n/get-dictionary';

export interface PageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
}

export default function ThrottlerPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-8 lg:p-12">
        {/* Introduction */}
        <section id="rate-limiting" className="mb-16">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Rate Limiting
            </h1>
            <span className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500 rounded-lg text-emerald-600 text-xs md:text-sm font-bold">
              SECURITY
            </span>
          </div>
          <p className="text-xl text-slate-600 mb-6">
            Protect your Harpy.js application from abuse with built-in rate
            limiting powered by @nestjs/throttler.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-blue-900">
              <strong>Why Rate Limiting?</strong> Rate limiting helps prevent
              DDoS attacks, protects against brute-force attempts, and ensures
              fair resource usage across all users.
            </p>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Installation
          </h2>
          <p className="text-slate-600 mb-4">
            Install the @nestjs/throttler package in your Harpy.js project:
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 mb-2">Using pnpm:</p>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>pnpm add @nestjs/throttler</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">Using npm:</p>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>npm install @nestjs/throttler</code>
              </pre>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">Using yarn:</p>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>yarn add @nestjs/throttler</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Basic Configuration */}
        <section id="basic-config" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Basic Configuration
          </h2>
          <p className="text-slate-600 mb-4">
            Add the ThrottlerModule to your app.module.ts and set up the
            ThrottlerGuard globally:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-4">
            <code>{`import { Module } from '@nestjs/common';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 10000,  // Time window in milliseconds (10 seconds)
        limit: 10,   // Maximum requests per time window
      },
    ]),
    // ... your other modules
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}`}</code>
          </pre>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-amber-900">
              <strong>Note:</strong> With this configuration, all routes in your
              application will be limited to 10 requests per 10 seconds by
              default.
            </p>
          </div>
        </section>

        {/* Custom Limits */}
        <section id="custom-limits" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Custom Rate Limits per Route
          </h2>
          <p className="text-slate-600 mb-4">
            You can override the default limits for specific routes using the
            @Throttle decorator:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-4">
            <code>{`import { Controller, Get } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';

@Controller('api')
export class ApiController {
  // Allow 50 requests per 10 seconds for this endpoint
  @Get('data')
  @Throttle({ default: { limit: 50, ttl: 10000 } })
  getData() {
    return { message: 'Data endpoint' };
  }

  // Skip rate limiting for this endpoint
  @Get('public')
  @Throttle({ default: { limit: 0 } })
  getPublicData() {
    return { message: 'Public endpoint - no rate limit' };
  }
}`}</code>
          </pre>
        </section>

        {/* Configuration Options */}
        <section id="config-options" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Configuration Options
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">
                    Option
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">
                    Type
                  </th>
                  <th className="border border-slate-300 px-4 py-3 text-left font-semibold text-slate-900">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-3">
                    <code className="text-purple-600">ttl</code>
                  </td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">
                    number
                  </td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">
                    Time window in milliseconds (e.g., 10000 = 10 seconds)
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3">
                    <code className="text-purple-600">limit</code>
                  </td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">
                    number
                  </td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">
                    Maximum number of requests allowed per time window
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-3">
                    <code className="text-purple-600">ignoreUserAgents</code>
                  </td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">
                    RegExp[]
                  </td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">
                    Array of user agent patterns to exclude from rate limiting
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-3">
                    <code className="text-purple-600">skipIf</code>
                  </td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">
                    Function
                  </td>
                  <td className="border border-slate-300 px-4 py-3 text-slate-600">
                    Function returning boolean to conditionally skip throttling
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Advanced Examples */}
        <section id="advanced-examples" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Advanced Configuration
          </h2>
          <p className="text-slate-600 mb-4">
            Here's an example with multiple throttle configurations and
            conditional skipping:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto">
            <code>{`ThrottlerModule.forRoot([
  {
    name: 'short',
    ttl: 1000,   // 1 second
    limit: 3,
  },
  {
    name: 'medium',
    ttl: 10000,  // 10 seconds
    limit: 20,
  },
  {
    name: 'long',
    ttl: 60000,  // 1 minute
    limit: 100,
  },
])`}</code>
          </pre>
        </section>

        {/* Testing */}
        <section id="testing" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Testing Rate Limits
          </h2>
          <p className="text-slate-600 mb-4">
            When a rate limit is exceeded, the API will return a 429 (Too Many
            Requests) status code:
          </p>
          <pre className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-4">
            <code>{`{
  "statusCode": 429,
  "message": "ThrottlerException: Too Many Requests"
}`}</code>
          </pre>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-900">
              <strong>Best Practice:</strong> Always implement proper error
              handling on the client side to gracefully handle 429 responses and
              inform users about rate limits.
            </p>
          </div>
        </section>

        {/* Real-world Use Cases */}
        <section id="use-cases" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Real-world Use Cases
          </h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">
                🔐 Authentication Endpoints
              </h4>
              <p className="text-slate-600 mb-2">
                Protect login routes from brute-force attacks with stricter
                limits:
              </p>
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                @Throttle({`{ default: { limit: 5, ttl: 60000 } }`})
              </code>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">
                📧 Email Sending
              </h4>
              <p className="text-slate-600 mb-2">
                Prevent spam by limiting contact form submissions:
              </p>
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                @Throttle({`{ default: { limit: 3, ttl: 3600000 } }`}) // 3 per
                hour
              </code>
            </div>
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2">🔍 Search APIs</h4>
              <p className="text-slate-600 mb-2">
                Balance between user experience and resource protection:
              </p>
              <code className="text-sm bg-slate-100 px-2 py-1 rounded">
                @Throttle({`{ default: { limit: 30, ttl: 10000 } }`})
              </code>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section id="resources" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Additional Resources
          </h2>
          <div className="space-y-3">
            <a
              href="https://docs.nestjs.com/security/rate-limiting"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-slate-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">📚</span>
                <span className="font-semibold text-slate-900">
                  NestJS Official Rate Limiting Documentation
                </span>
              </div>
            </a>
            <a
              href="https://github.com/nestjs/throttler"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-slate-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🔧</span>
                <span className="font-semibold text-slate-900">
                  @nestjs/throttler GitHub Repository
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Installation */}
        <section id="installation" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Installation
          </h2>
          <p className="text-slate-600 mb-4">
            Install the @nestjs/throttler package:
          </p>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
            <code>pnpm add @nestjs/throttler</code>
          </pre>
        </section>

        {/* Basic Configuration */}
        <section id="basic-config" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Basic Configuration
          </h2>
          <p className="text-slate-600 mb-4">
            Add the ThrottlerModule to your app.module.ts:
          </p>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>{`import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
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
export class AppModule {}`}</code>
          </pre>
        </section>

        {/* Custom Rate Limits */}
        <section id="custom-limits" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Custom Rate Limits per Route
          </h2>
          <p className="text-slate-600 mb-4">
            Apply different rate limits to specific routes using the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">@Throttle</code>{' '}
            decorator:
          </p>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>{`import { Throttle, SkipThrottle } from '@nestjs/throttler';

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
        </section>

        {/* Configuration Options */}
        <section id="config-options" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Configuration Options
          </h2>
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
        </section>

        {/* Learn More */}
        <section id="learn-more" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Learn More</h2>
          <div className="space-y-4">
            <a
              href="https://docs.nestjs.com/security/rate-limiting"
              className="block border border-slate-200 rounded-lg p-6 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">📚</span>
                <span className="font-semibold text-slate-900">
                  Official NestJS Rate Limiting Documentation
                </span>
              </div>
            </a>
            <a
              href="https://github.com/nestjs/throttler"
              className="block border border-slate-200 rounded-lg p-6 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🔧</span>
                <span className="font-semibold text-slate-900">
                  @nestjs/throttler GitHub Repository
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between">
          <a
            href="/docs"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Documentation
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
