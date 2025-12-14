export const customErrorPageExample = `import React from 'react';
import type { JsxLayoutProps } from '@harpy-js/core';
import Logo from 'src/components/logo';

export interface Custom404Props extends JsxLayoutProps {
  path?: string;
  message?: string;
}

export default function Custom404Page({ 
  path, 
  message = 'Page Not Found' 
}: Custom404Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 
                          bg-gradient-to-br from-purple-600 to-blue-600 
                          rounded-full shadow-lg mb-4">
            <Logo className="size-14 text-white" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text 
                       bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {message}
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>

        {/* Action Button */}
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gradient-to-r 
                     from-purple-600 to-blue-600 text-white 
                     font-semibold rounded-lg shadow-md 
                     hover:shadow-lg transform hover:-translate-y-0.5 
                     transition-all duration-200"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}`;

export const configurationExample = `import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { setupHarpyApp } from '@harpy-js/core';
import DefaultLayout from './layouts/layout';
import Custom404Page from './error-pages/404';
import Custom500Page from './error-pages/500';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(),
  );

  await setupHarpyApp(app, {
    layout: DefaultLayout,
    distDir: 'dist',
    publicDir: 'public',
    errorPages: {
      404: Custom404Page,
      500: Custom500Page,
      401: Custom401Page,
      403: Custom403Page,
    },
  });

  await app.listen({ port: 3000, host: '0.0.0.0' });
}

bootstrap();`;

export const defaultPagesExample = `import { 
  404Page, 
  500Page, 
  401Page, 
  403Page,
} from '../path-to-custom-error-pages';

// Use custom pages (no extra configuration needed)
// Harpy.js automatically uses default pages from core if no custom pages are provided

// Or import and customize:
await setupHarpyApp(app, {
    layout: DefaultLayout,
    distDir: 'dist',
    publicDir: 'public',
    errorPages: {
        404: 404Page,
        500: 500Page,
        401: 401Page,
        403: 403Page,
    },
});`;

export const errorLayoutExample = `import React from 'react';

interface ErrorLayoutProps {
  title?: string;
  children: React.ReactNode;
}

export default function ErrorLayout({ 
  title = 'Error', 
  children 
}: ErrorLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        {/* CSS imports for Tailwind styling */}
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}`;

export const propsInterfaceExample = `import type { JsxLayoutProps } from '@harpy-js/core';

export interface NotFoundPageProps extends JsxLayoutProps {
  message?: string;
  path?: string;
}

export interface ServerErrorPageProps extends JsxLayoutProps {
  message?: string;
  error?: string;
}

export interface UnauthorizedPageProps extends JsxLayoutProps {
  message?: string;
}

export interface ForbiddenPageProps extends JsxLayoutProps {
  message?: string;
}`;
