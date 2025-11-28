import CommandTabs from 'src/components/command-tabs';
import { Dictionary } from '../../../i18n/get-dictionary';
import { ExternalLink, Link } from 'lucide-react';

export interface PageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
}

export default function IstallationPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-8 lg:p-12">
        {/* Installation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Installation
          </h2>
          <p className="text-slate-600 mb-4">
            Install the Harpy CLI globally using your preferred package manager,
            then create a new Harpy.js project:
          </p>
          <CommandTabs
            commands={{
              pnpm: `pnpm i -g @hepta-solutions/harpy-cli
              harpy create my-app
              cd my-app
              pnpm dev`,
              npm: `npm i -g @hepta-solutions/harpy-cli
              harpy create my-app
              cd my-app
              npm run dev`,
              yarn: `yarn global add @hepta-solutions/harpy-cli
              harpy create my-app
              cd my-app
              yarn dev`,
            }}
          />
        </section>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            System Requirements
          </h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>
              Minimum node.js version{' '}
              <small>
                <a
                  target="_blank"
                  className="text-amber-600 hover:text-amber-700"
                  href="https://nodejs.org"
                >
                  20.x
                  <ExternalLink className="inline-block ml-1 mb-1" size={12} />
                </a>
              </small>
            </li>
            <li>npm, pnpm, or yarn package manager</li>
            <li>Git installed on your system</li>
          </ul>
        </section>
        <section className="mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Manual Installation
          </h2>
          <p className="text-slate-600 mb-4">
            If you have already a nestjs project and want to set up Harpy.js
            manually without the CLI, use the following steps:
          </p>
          <h4 className="text-md text-slate-700">1. Install dependencies</h4>
          <CommandTabs
            commands={{
              pnpm: `pnpm add @hepta-solutions/harpy-core react react-dom`,
              npm: `npm install @hepta-solutions/harpy-core react react-dom`,
              yarn: `yarn add @hepta-solutions/harpy-core react react-dom`,
            }}
          />
          <h4 className="text-md text-slate-700">
            2. Create a layout component
          </h4>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`
  //layouts/layout.tsx
  import * as React from 'react';
  import { JsxLayoutProps } from '@hepta-solutions/harpy-core';
  

  interface NavItem {
    id: string;
    title: string;
    href: string;
  }

  interface NavSection {
    id: string;
    title: string;
    items: NavItem[];
  }
  
  export default function MainLayout({
    children,
    meta,
    hydrationScripts,
    sections = [],
    lang,
  }: JsxLayoutProps & {
    lang: string;
    hydrationScripts?: Array<{ componentName: string; path: string }>;
    sections?: NavSection[];
  }) {
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
          <link rel="stylesheet" href="/styles/styles.css" />

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

          <h4 className="text-md text-slate-700">
            3. Set up the JSX engine in your main.ts
          </h4>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';
  import { withJsxEngine } from '@hepta-solutions/harpy-core';
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

          <h4 className="text-md text-slate-700">
            4. Add @JsxRender decorator to your Controller
          </h4>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`import { JsxRender, CurrentLocale } from '@hepta-solutions/harpy-core';
  import { Controller, Get } from '@nestjs/common';
  import Page, { type PageProps } from './views/page';
  import { getDictionary } from '../../i18n/get-dictionary';
  import { NavigationService } from '../../shared/navigation.service';
  import CustomLayout from '../../layouts/custom-layout';
  
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
      const dict = await getDictionary(locale);
      const sections = this.navigationService.getAllSections();
  
      return {
        sections,
        dict,
        locale,
      };
    }
  }`}</code>
          </pre>
        </section>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <p className="text-amber-900 space-y-2">
            <strong>Note:</strong> <br />
            <code className="bg-slate-100 px-2 py-1 rounded">dict</code>
            is for localization support. Learn more in{' '}
            <a
              href="/docs/internationalization"
              className="font-bold text-amber-600"
            >
              Internationalization{' '}
              <Link className="inline-block ml-1 mb-1" size={12} />
            </a>
            <br />
            <code className="bg-slate-100 px-2 py-1 rounded">sections</code>
            is to build dynamic navigation menus. Learn more in{' '}
            <a href="/docs/routing" className="font-bold text-amber-600">
              Routing
              <Link
                className="inline-block ml-1 mb-1 text-amber-600"
                size={12}
              />
            </a>
            .
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between">
          <a
            href="/"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Home
          </a>
          <a
            target="_blank"
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
