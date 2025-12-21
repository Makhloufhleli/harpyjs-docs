import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { setupHarpyApp } from '@harpy-js/core';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

import DefaultLayout from './layouts/layout';
import { inject } from '@vercel/analytics';
import Custom404Page from './error-pages/404';
import Custom500Page from './error-pages/500';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Centralized Harpy setup: JSX engine, cookies, and static handlers
  await setupHarpyApp(app, {
    layout: DefaultLayout,
    distDir: 'dist',
    publicDir: 'public',
    errorPages: {
      404: Custom404Page,
      '500': Custom500Page,
    },
    enforceRedirects: true,
    mainDomain: 'harpyjs.org',
    enforceHttps: true,
    redirectWww: true,
  });

  inject();

  await app.listen({
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: '0.0.0.0',
  });

  console.log(`Application is running on: ${await app.getUrl()}`);
}

void bootstrap();
