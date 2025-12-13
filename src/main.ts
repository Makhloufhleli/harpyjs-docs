import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { setupHarpyApp } from '@harpy-js/core';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import fastifyStatic from '@fastify/static';
import DefaultLayout from './layouts/layout';
import { inject } from '@vercel/analytics';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Centralized Harpy setup: JSX engine, cookies, and static handlers
  await setupHarpyApp(app, { layout: DefaultLayout, distDir: 'dist' });

  const fastify = app.getHttpAdapter().getInstance();

  await fastify.register(fastifyStatic, {
    root: path.join(process.cwd(), 'public'),
    prefix: '/public/',
    decorateReply: false,
  });

  inject();

  await app.listen({
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: '0.0.0.0',
  });

  console.log(`Application is running on: ${await app.getUrl()}`);
}

void bootstrap();
