import CommandTabs from 'src/components/command-tabs';
import { Dictionary } from '../../../i18n/get-dictionary';
import { Info } from 'lucide-react';

export interface PageProps {
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
              Installation
            </h1>
          </div>
          <p className="text-xl text-slate-600 mb-6">
            Install the Harpy CLI or integrate Harpy.js manually into an
            existing project. This page covers system requirements, quick start
            using the CLI, manual installation, detailed setup steps, and the
            recommended project structure.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-4">
            <p className="text-amber-900">
              <strong>Quick tip:</strong> The CLI is the fastest path to a
              working project. Use manual install only if you need to integrate
              Harpy.js into an existing codebase.
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
                1. Install Dependencies
              </h3>
              <p className="text-slate-600 mb-3">
                Add the core runtime and React (latest version recommended) to
                your project.
              </p>

              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-3 text-sm">
                <code>{`
pnpm add @harpy-js/core react react-dom`}</code>
              </pre>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-700">
                <strong>Tip:</strong> Use pnpm for faster installs and
                consistent lockfiles, but npm and yarn are also supported.
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                2. Create a Layout Component
              </h3>
              <p className="text-slate-600 mb-3">
                Layouts render the common shell around pages (head tags, header,
                footer, navigation) and receive metadata and hydration script
                definitions.
              </p>

              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-3 text-sm">
                <code>{`// layouts/layout.tsx
import * as React from 'react';
import { JsxLayoutProps } from '@harpy-js/core';

export default function MainLayout({ children, meta, hydrationScripts, sections, lang }: JsxLayoutProps & { lang?: string }) {
  const title = meta?.title ?? 'Harpy Framework';
  const description = meta?.description;
  const canonical = meta?.canonical;
  const og = meta?.openGraph ?? {};
  const twitter = meta?.twitter ?? {};
  const chunkScripts = hydrationScripts || [];
  
  return (
    <html lang={lang || 'en'}>
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/styles.css" /> // 👈 Makes sure to add this for styling
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
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        <aside>
          <nav className="px-6 py-6 space-y-8">
            {sections.map((section) => (
              <div key={section.id}>
                <h3 >
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a href={item.href} >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <main>
        {children}
        <main>
        {/* Auto-injected hydration scripts */}
        {chunkScripts.map((script) => (
          <script key={script.componentName} src={script.path}></script>
        ))}
      </body>
    </html>
  );
}`}</code>
              </pre>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-blue-900">
                <strong>Note:</strong> the layout receives `sections` to build
                dynamic navigation and `hydrationScripts` to load client chunks.
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                3. Configure the Server Entry
              </h3>
              <p className="text-slate-600 mb-3">
                Register the JSX engine and static serving in your server
                bootstrap. Example below shows the renderer being wired into an
                Fastify server.
              </p>

              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-3 text-sm">
                <code>{`import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';
  import { withJsxEngine } from '@harpy-js/core';
  import fastifyStatic from '@fastify/static';
  import {
    FastifyAdapter,
    NestFastifyApplication,
  } from '@nestjs/platform-fastify';
   import DefaultLayout from './layouts/layout';


  async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );

    // Set up JSX rendering engine
    withJsxEngine(app, DefaultLayout);

    // Register Fastify plugins
    const fastify = app.getHttpAdapter().getInstance();

    // Register static file serving
    await fastify.register(fastifyStatic, {
      root: path.join(process.cwd(), 'dist'),
      prefix: '/',
      decorateReply: false,
    });

    await app.listen(3000);
  }
  bootstrap();`}</code>
              </pre>

              <div className="bg-red-50 border-l-4 border-red-300 p-4 rounded text-red-900">
                <Info className="size-6" /> <strong>Critical:</strong>
                Harpy.js <u>will not work</u> unless you use{' '}
                <strong>FastifyAdapter</strong>, the JSX rendering engine
                specifically designed for Fastify.
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                4. Add Decorators / Render Hooks
              </h3>
              <p className="text-slate-600 mb-3">
                If you use a controller-based server (NestJS or similar), use
                the provided decorator to render JSX pages from route handlers.
                Otherwise, call the renderer directly from your route handlers.
              </p>

              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-3 text-sm">
                <code>{`// controller example (conceptual)
@Controller()
  export class HomeController {
    constructor(private readonly navigationService: NavigationService) {}
  
    @Get()
    @JsxRender(Page, {
      layout: CustomLayout, // 👈 Provide a specific layout here, otherwise DefaultLayout will be used
      meta: {
        title: 'your page title',
        description:
          'your page description',
        canonical: 'https://your-site.com/your-page',
        openGraph: {
          title: 'OPen graph title',
          description:
            'Open graph description',
          type: 'website',
          url: 'https://your-site.com/your-page',
        },
        // Other meta data...
      },
    })
    async home(@CurrentLocale() locale: string): Promise<PageProps> {
      const dict = await getDictionary(locale); // 👈 Load translations
      const sections = this.navigationService.getAllSections(); // 👈 Load navigation sections
  
      return {
        sections,
        dict,
        locale,
      };
    }
  }`}</code>
              </pre>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded text-green-900 my-2">
                <strong>Result:</strong> Pages render on the server with proper
                head tags and can hydrate on the client.
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded text-blue-900">
                <strong>Note:</strong> Check the internationalization and
                routing docs for more details.
              </div>
            </div>

            {/* Step 5 */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                5. Start the Dev Server
              </h3>
              <p className="text-slate-600 mb-3">
                Run the dev server and open your app in the browser:
              </p>

              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-3 text-sm">
                <code>{`pnpm dev
# or
npm run dev`}</code>
              </pre>

              <p className="text-slate-600 text-sm">
                The dev server typically includes hot reload for server code and
                fast client-side updates for components.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT STRUCTURE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Recommended Project Structure
          </h2>
          <p className="text-slate-600 mb-4">
            This layout-agnostic structure helps the Harpy rendering engine
            discover pages, layouts and static assets.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`my-app/
├─ src/
│  ├─ assets/        # static assets (imust include styles.css)
│  ├─ components/        # reusable UI components
│  ├─ layouts/        # layout components (main, dashboard, etc.)
│  ├─ dictionaries/        # translation dictionaries
│  ├─ features/          # feature modules (auth, dashboard, etc.)
│  ├─ i18n/          # internationalization config and utilities
│  ├─ shared/          # shared module (must include navigation module)
│  ├─ app.module.ts      # root module
│  ├─ main.ts      # server bootstrap
├─ public/            # static assets
├─ package.json
└─ tailwind.config.ts    # framework configuration (Tailwind CSS)`}</code>
          </pre>

          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>
              <strong>src/assets</strong> — Contains static assets such as
              images, fonts, and required global files like{' '}
              <code>styles.css</code>.
            </li>
            <li>
              <strong>src/components</strong> — Reusable UI components shared
              across the application.
            </li>
            <li>
              <strong>src/layouts</strong> — Layout components (e.g., main
              layout, dashboard layout) that wrap feature pages.
            </li>
            <li>
              <strong>src/dictionaries</strong> — Translation dictionaries used
              for multi-language support.
            </li>
            <li>
              <strong>src/features</strong> — Feature-based modules (auth,
              dashboard, admin, etc.), each grouping pages, hooks, and logic.
            </li>
            <li>
              <strong>src/i18n</strong> — Internationalization configuration and
              utilities.
            </li>
            <li>
              <strong>src/shared</strong> — Shared module containing utilities,
              adapters, and the required navigation module.
            </li>
            <li>
              <strong>src/app.module.ts</strong> — The root application module.
            </li>
            <li>
              <strong>src/main.ts</strong> — The main server bootstrap,
              typically registering the Fastify adapter and SSR engine.
            </li>
            <li>
              <strong>public/</strong> — Static public assets.
            </li>
            <li>
              <strong>tailwind.config.ts</strong> — Tailwind CSS framework
              configuration.
            </li>
          </ul>
        </section>

        {/* FOOTER / NAV */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between">
          <a
            href="/docs"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Documentation
          </a>
          <a
            href="/docs/usage"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Next: Usage →
          </a>
        </div>
      </div>
    </div>
  );
}
