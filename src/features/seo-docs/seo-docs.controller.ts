import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { JsxRender } from '@harpy-js/core';
import SeoDocsPage from './views/seo-docs-page';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class SeoDocsController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('seo')
  @JsxRender(SeoDocsPage, {
    layout: DashboardLayout,
    meta: {
      title:
        'HarpyJS | Harpy.js - High-Performance Full-Stack Framework | NestJS + React SSR + Fastify',
      description:
        'HarpyJS (Harpy.js) - Ultra-fast full-stack framework built on NestJS, React SSR, and Fastify. Build high-performance, SEO-optimized web applications with React.js server-side rendering, automatic client hydration, and sub-7ms page loads. The modern fullstack TypeScript framework for Node.js with enterprise-grade features. Perfect for building scalable fullstack applications with React frontend and NestJS backend.',
      keywords:
        'HarpyJS, Harpy.js, Harpy JS, harpyjs, harpy js, harpy.js, NestJS, NestJS framework, React, ReactJS, React.js, React SSR, server-side rendering, SSR framework, fullstack, full-stack, full stack framework, Node.js, NodeJS, Node.js framework, Fastify, performance, high-performance, fast, blazing fast, web performance, TypeScript, TypeScript framework, web development, Next.js alternative, Nextjs alternative, SEO, SEO optimized, React hydration, automatic hydration, client-side hydration, scalable applications, enterprise framework, modern framework, backend framework, frontend framework, web framework, JavaScript framework, fullstack development, full-stack development, React framework, NestJS React, i18n, internationalization, dynamic layouts, web app framework, progressive web app, PWA',
      canonical: 'https://www.harpyjs.org/',
      openGraph: {
        title:
          'HarpyJS - High-Performance Full-Stack Framework with NestJS + React SSR + Fastify',
        description:
          'Build blazing-fast fullstack applications with HarpyJS. Combines NestJS backend, React server-side rendering, and Fastify for ultra-fast performance. Sub-7ms render times, automatic hydration, and SEO optimization. The modern fullstack TypeScript framework for Node.js.',
        type: 'website',
        url: 'https://www.harpyjs.org/',
        image: 'https://harpyjs.org/favicon.png',
      },
      twitter: {
        card: 'summary',
        title: 'HarpyJS - High-Performance NestJS + React SSR Framework',
        description:
          'Build blazing-fast, SEO-optimized fullstack apps with HarpyJS. NestJS + React SSR + Fastify with automatic hydration and sub-7ms render times. Modern TypeScript framework for high-performance Node.js applications.',
        image: 'https://harpyjs.org/twitter-card.jpg',
      },
    },
  })
  async seo(@Req() req: FastifyRequest) {
    const currentPath = (req.originalUrl || req.url) ?? '/';
    const sections = this.navigationService.getSectionsForRoute(currentPath);
    const dict = await getDictionary('en');
    const activeItemId = this.navigationService.getActiveItemId(currentPath);

    return {
      sections,
      activeItemId,
      dict,
    };
  }
}
