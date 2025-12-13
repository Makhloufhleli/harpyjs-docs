// Centralized code snippets for installation documentation
// These strings are rendered using the CodeSnippet component to keep JSX clean

export const INSTALL_PACKAGES = `pnpm add @harpy-js/core @nestjs/common @nestjs/core @nestjs/platform-fastify react react-dom reflect-metadata`;

export const INSTALL_NPM = `npm install @harpy-js/core @nestjs/common @nestjs/core @nestjs/platform-fastify react react-dom reflect-metadata`;

export const INSTALL_YARN = `yarn add @harpy-js/core @nestjs/common @nestjs/core @nestjs/platform-fastify react react-dom reflect-metadata`;

export const LAYOUT_COMPONENT = `// src/layouts/layout.tsx
import React from 'react';
import { type JsxLayoutProps } from '@harpy-js/core';

export default function MainLayout({ 
  children, 
  meta, 
  hydrationScripts 
}: JsxLayoutProps) {
  const title = meta?.title ?? 'My App';
  const description = meta?.description ?? '';
  const canonical = meta?.canonical;
  const keywords = meta?.keywords;
  const og = meta?.openGraph ?? {};
  const twitter = meta?.twitter ?? {};
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        {og.title && <meta property="og:title" content={og.title} />}
        {og.description && <meta property="og:description" content={og.description} />}
        {og.type && <meta property="og:type" content={og.type} />}
        {og.image && <meta property="og:image" content={og.image} />}
        {og.url && <meta property="og:url" content={og.url} />}
        
        {/* Twitter Card */}
        {twitter.card && <meta name="twitter:card" content={twitter.card} />}
        {twitter.title && <meta name="twitter:title" content={twitter.title} />}
        {twitter.description && <meta name="twitter:description" content={twitter.description} />}
        {twitter.image && <meta name="twitter:image" content={twitter.image} />}
        
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        {/* Page content */}
        <main>{children}</main>
        
        {/* Auto-injected client hydration scripts */}
        {hydrationScripts?.map((script) => (
          <script 
            key={script.componentName} 
            src={script.path}
            type="module"
            async
          />
        ))}
      </body>
    </html>
  );
}`;

export const BOOTSTRAP_MAIN = `// src/main.ts
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { setupHarpyApp } from '@harpy-js/core';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyStatic from '@fastify/static';
import DefaultLayout from './layouts/layout';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Initialize Harpy.js JSX engine with your layout
  await setupHarpyApp(app, { 
    layout: DefaultLayout,
    distDir: 'dist' // directory for built hydration assets
  });

  // Register static file serving (optional, for public assets)
  const fastify = app.getHttpAdapter().getInstance();
  await fastify.register(fastifyStatic, {
    root: path.join(process.cwd(), 'public'),
    prefix: '/public/',
    decorateReply: false,
  });

  await app.listen({
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  });

  console.log(\`Application running on: \${await app.getUrl()}\`);
}

bootstrap();`;

export const CONTROLLER_EXAMPLE = `// src/features/home/home.controller.ts
import { Controller, Get } from '@nestjs/common';
import { JsxRender, type PageProps } from '@harpy-js/core';
import HomePage from './views/home-page';

export interface HomePageProps extends PageProps {
  title: string;
  timestamp: string;
}

@Controller()
export class HomeController {
  @Get()
  @JsxRender(HomePage, {
    meta: {
      title: 'Home - My Full-Stack App',
      description: 'Welcome to my high-performance full-stack application',
      keywords: 'home, welcome, React SSR, NestJS',
      canonical: 'https://myapp.com/',
      openGraph: {
        title: 'Home',
        description: 'Welcome to my app',
        type: 'website',
        url: 'https://myapp.com/',
        image: 'https://myapp.com/og-image.png',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Home',
        description: 'Welcome to my app',
      },
    },
  })
  async home(): Promise<HomePageProps> {
    return {
      title: 'Welcome to Harpy.js',
      timestamp: new Date().toISOString(),
    };
  }
}`;

export const PAGE_VIEW_EXAMPLE = `// src/features/home/views/home-page.tsx
import React from 'react';
import { HomePageProps } from '../home.controller';

export default function HomePage({ title, timestamp }: HomePageProps) {
  return (
    <div className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
      <h1 className="text-4xl font-bold text-slate-900 mb-2">{title}</h1>
      <p className="text-slate-600">Built at: {timestamp}</p>
    </div>
  );
}`;

export const BUILD_COMMANDS = `# Build for production
pnpm build

# Run development server with hot reload
pnpm dev

# Run production build
pnpm start`;

export const PROJECT_STRUCTURE = `my-fullstack-app/
├─ src/
│  ├─ assets/              # Images, fonts, and static files
│  │  └─ styles.css        # Global Tailwind CSS (required)
│  ├─ components/          # Reusable UI components (buttons, cards, etc.)
│  ├─ layouts/             # Layout wrappers (default, dashboard, etc.)
│  │  └─ layout.tsx        # Root layout with HTML shell
│  ├─ features/            # Feature modules (one per domain)
│  │  ├─ home/
│  │  │  ├─ home.controller.ts
│  │  │  ├─ home.module.ts
│  │  │  └─ views/
│  │  │     └─ home-page.tsx
│  │  ├─ docs/
│  │  │  ├─ docs.controller.ts
│  │  │  ├─ docs.module.ts
│  │  │  └─ views/
│  │  └─ auth/
│  │     ├─ auth.controller.ts
│  │     └─ auth.service.ts
│  ├─ i18n/                # Internationalization
│  │  ├─ get-dictionary.ts
│  │  └─ translations/
│  ├─ shared/              # Shared utilities, decorators, services
│  │  ├─ navigation.service.ts
│  │  └─ app.module.ts     # Root module importing all features
│  ├─ main.ts              # Server bootstrap (NestJS + Fastify)
│  └─ app.module.ts        # Root NestJS module
├─ public/                 # Public static files (images, favicon, etc.)
├─ dist/                   # Compiled output + hydration bundles
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js      # Tailwind CSS configuration
└─ README.md`;
