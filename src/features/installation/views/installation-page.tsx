import CommandTabs from 'src/components/command-tabs';
import CodeSnippet from '../../../components/code-snippet';
import { type PageProps as CorePageProps } from '@harpy-js/core';
import { Dictionary } from '../../../i18n/get-dictionary';
import * as snippets from '../snippets';

export interface PageProps extends CorePageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
  activeItemId?: string;
}

export default function IstallationPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-8 lg:p-12">
        {/* HERO */}
        <section className="mb-12">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Installation & Setup
            </h1>
          </div>
          <p className="text-xl text-slate-600 mb-6">
            Get started with Harpy.js in minutes. Choose between using the CLI
            to scaffold a new full-stack project or integrating Harpy.js into an
            existing NestJS application for server-side React rendering.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-4">
            <p className="text-amber-900">
              <strong>Quick tip:</strong> The CLI is the fastest path to a
              production-ready full-stack application. Use manual integration
              only if you're adding Harpy.js to an existing NestJS project.
            </p>
          </div>
        </section>

        {/* SYSTEM REQUIREMENTS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            System Requirements
          </h2>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h3 className="font-semibold text-slate-900 mb-2">Minimum</h3>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>
                <strong>Node.js:</strong> 18+ (20.x recommended for latest
                features){' '}
                <small className="text-slate-500">
                  — native ESM & modern runtime APIs
                </small>
              </li>
              <li>
                <strong>Package manager:</strong> pnpm (recommended), npm, or
                yarn
              </li>
              <li>Git installed</li>
            </ul>
          </div>
        </section>

        {/* INSTALLATION METHODS */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Installation Methods
          </h2>

          <p className="text-slate-600 mb-6">
            Choose the method that fits your workflow. The CLI scaffolds a
            complete project; manual installation is for integrating into
            existing projects.
          </p>

          {/* Quick Start */}
          <div className="border border-slate-200 rounded-lg p-6 bg-gradient-to-b from-white to-amber-50 mb-4">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Quick Start (recommended)
            </h3>
            <p className="text-slate-600 mb-4">
              Use the Harpy CLI to create a new project with sensible defaults
              and a working dev server.
            </p>

            <CommandTabs
              commands={{
                pnpm: `pnpm i -g @harpy-js/cli
harpy create my-app
cd my-app
pnpm dev`,
                npm: `npm i -g @harpy-js/cli
harpy create my-app
cd my-app
npm run dev`,
                yarn: `yarn global add @harpy-js/cli
harpy create my-app
cd my-app
yarn dev`,
              }}
            />

            <p className="text-slate-600 mt-4 text-sm">
              The CLI will scaffold routes, layouts, a working dev server and
              example pages so you can focus on building features.
            </p>
          </div>

          {/* Manual */}
          <div className="border border-slate-200 rounded-lg p-6 bg-gradient-to-b from-white to-purple-50">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              Manual Installation
            </h3>
            <p className="text-slate-600 mb-4">
              Install the core packages and configure the rendering engine if
              you prefer to add Harpy.js to an existing project.
            </p>

            <CommandTabs
              commands={{
                pnpm: `pnpm add @harpy-js/core react react-dom`,
                npm: `npm install @harpy-js/core react react-dom`,
                yarn: `yarn add @harpy-js/core react react-dom`,
              }}
            />

            <p className="text-slate-600 mt-4 text-sm">
              You'll then set up a layout, configure rendering in your server
              entry, and add decorators to your controllers (if using NestJS or
              similar) to render JSX pages.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-6">
            <p className="text-blue-900">
              <strong>Why JSX/layouts?</strong> Harpy.js uses JSX-based layouts
              to enable full server-side rendering plus client hydration —
              layouts are components that wrap pages. Ensure your environment
              supports JSX tooling.
            </p>
          </div>
        </section>

        {/* DETAILED STEPS */}
        <section className="mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Detailed Steps
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                1. Install Core Dependencies
              </h3>
              <p className="text-slate-600 mb-3">
                Add the Harpy.js core runtime, React, NestJS, and required
                adapters to your project. The core package includes the JSX
                rendering engine, automatic hydration, and utilities for
                server-side React rendering.
              </p>

              <CommandTabs
                commands={{
                  pnpm: snippets.INSTALL_PACKAGES,
                  npm: snippets.INSTALL_NPM,
                  yarn: snippets.INSTALL_YARN,
                }}
              />

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
                <strong>Package Breakdown:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <code>@harpy-js/core</code> — JSX engine, hydration,
                    routing, and decorators
                  </li>
                  <li>
                    <code>@nestjs/platform-fastify</code> — Required adapter
                    (Fastify only)
                  </li>
                  <li>
                    <code>react react-dom</code> — UI framework (React 18+)
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                2. Create a Root Layout Component
              </h3>
              <p className="text-slate-600 mb-3">
                Layouts wrap your pages and receive metadata (SEO tags, Open
                Graph, Twitter), hydration scripts for client components, and
                optional navigation sections. This is the HTML shell that
                renders on the server.
              </p>

              <CodeSnippet
                code={snippets.LAYOUT_COMPONENT}
                showLineNumbers
                className="mb-3"
              />

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-blue-900 text-sm">
                <strong>Key Points:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    The layout receives SEO metadata from your controllers
                  </li>
                  <li>
                    <code>hydrationScripts</code> contains auto-generated client
                    component bundles
                  </li>
                  <li>
                    This HTML is rendered on the server and sent as the initial
                    response
                  </li>
                  <li>
                    Client components hydrate automatically in the browser
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                3. Bootstrap Your NestJS Application
              </h3>
              <p className="text-slate-600 mb-3">
                Configure your NestJS server to use Fastify adapter and
                initialize the Harpy JSX rendering engine. The{' '}
                <code className="bg-slate-100 px-2 py-1 rounded">
                  setupHarpyApp
                </code>{' '}
                function handles JSX engine initialization, static file serving,
                and automatic hydration setup.
              </p>

              <CodeSnippet
                code={snippets.BOOTSTRAP_MAIN}
                showLineNumbers
                className="mb-3"
              />

              <div className="bg-red-50 border-l-4 border-red-300 p-4 rounded text-red-900 mb-3">
                <strong>⚠️ Critical Requirement:</strong> Harpy.js requires the{' '}
                <strong>FastifyAdapter</strong>. Express and other adapters are
                not supported. The JSX rendering engine is specifically
                optimized for Fastify's performance characteristics.
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-blue-900">
                <strong>What setupHarpyApp does:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Registers the JSX rendering interceptor on all HTTP
                    responses
                  </li>
                  <li>Configures automatic hydration script injection</li>
                  <li>
                    Sets up cookie middleware for client-side interactivity
                  </li>
                  <li>
                    Initializes the NavigationService for routing management
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                4. Create Controllers & Render JSX Pages
              </h3>
              <p className="text-slate-600 mb-3">
                Use the{' '}
                <code className="bg-slate-100 px-2 py-1 rounded">
                  @JsxRender
                </code>{' '}
                decorator to render React components as HTML on the server. Your
                controller returns page data, and the decorator handles
                rendering and automatic hydration.
              </p>

              <CodeSnippet
                code={snippets.CONTROLLER_EXAMPLE}
                showLineNumbers
                className="mb-4"
              />

              <CodeSnippet
                code={snippets.PAGE_VIEW_EXAMPLE}
                showLineNumbers
                className="mb-3"
              />

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded text-green-900 my-3">
                <strong>✨ What Happens:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>NestJS calls your controller method</li>
                  <li>
                    <code>@JsxRender</code> renders HomePage component on the
                    server
                  </li>
                  <li>HTML with proper head tags is sent to the browser</li>
                  <li>
                    Client components automatically hydrate for interactivity
                  </li>
                  <li>Instant first paint with full SEO support</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-blue-900 text-sm">
                <strong>Metadata Options:</strong> The <code>meta</code> field
                supports <code>title</code>, <code>description</code>,{' '}
                <code>keywords</code>, <code>canonical</code>,{' '}
                <code>openGraph</code> (title, description, type, image, url),
                and <code>twitter</code> (card, title, description, image).
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                5. Build & Run Your Application
              </h3>
              <p className="text-slate-600 mb-3">
                Compile your TypeScript code and start the development server.
                Harpy.js will automatically detect client components and
                generate hydration bundles.
              </p>

              <CodeSnippet
                code={snippets.BUILD_COMMANDS}
                showLineNumbers
                className="mb-3"
              />

              <p className="text-slate-600 text-sm mb-3">
                Your application will be available at{' '}
                <code className="bg-slate-100 px-2 py-1 rounded">
                  http://localhost:3000
                </code>
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
                <strong>Development Features:</strong>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Hot module reloading for controllers and pages</li>
                  <li>Automatic hydration bundle regeneration</li>
                  <li>Fast refresh for client components</li>
                  <li>TypeScript compilation with source maps</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT STRUCTURE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Recommended Project Structure
          </h2>
          <p className="text-slate-600 mb-4">
            Harpy.js follows a feature-based modular architecture optimized for
            server-side rendering, automatic hydration, and scalability. This
            structure keeps related code (controllers, views, services) together
            while separating shared utilities.
          </p>

          <CodeSnippet code={snippets.PROJECT_STRUCTURE} className="mb-6" />

          <div className="space-y-3">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-slate-900 mb-2">
                Core Directories
              </h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    src/main.ts
                  </code>{' '}
                  — Bootstrap file that initializes NestJS with Fastify and
                  setupHarpyApp()
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    src/layouts/layout.tsx
                  </code>{' '}
                  — Root HTML layout receiving metadata and hydration scripts
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    src/features/
                  </code>{' '}
                  — Domain-based modules (home, auth, docs) each with
                  controllers, services, views
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">
                    src/components/
                  </code>{' '}
                  — Shared UI components (both server and client)
                </li>
                <li>
                  <code className="bg-white px-2 py-1 rounded">dist/</code> —
                  Build output including hydration manifests and client bundles
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">How It Works</h3>
              <ol className="text-blue-900 space-y-1 text-sm list-decimal list-inside">
                <li>
                  Controllers use <code>@JsxRender()</code> to render pages
                </li>
                <li>Pages render on the server with proper HTML head tags</li>
                <li>
                  Client components marked with <code>'use client'</code> are
                  detected and bundled
                </li>
                <li>Hydration scripts automatically inject into the layout</li>
                <li>
                  Browser loads HTML, hydrates client components, app becomes
                  interactive
                </li>
              </ol>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">
                Best Practices
              </h3>
              <ul className="text-amber-900 space-y-1 text-sm list-disc list-inside">
                <li>
                  Keep features self-contained with their own controllers,
                  services, and views
                </li>
                <li>
                  Use layouts for common UI shells (different layouts for public
                  vs. dashboard pages)
                </li>
                <li>
                  Place only reusable components in <code>src/components/</code>
                </li>
                <li>
                  Mark interactive components with <code>'use client'</code> at
                  the top
                </li>
                <li>
                  Leverage NestJS services for business logic and data fetching
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER / NAV */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between">
          <a
            href="/docs"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Getting Started
          </a>
          <a
            href="/docs/routing"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Next: Routing →
          </a>
        </div>
      </div>
    </div>
  );
}
