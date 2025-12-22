import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { JsxRender } from '@harpy-js/core';
import JsxEnginePage from './views/jsx-engine-page';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class JsxEngineController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('jsx-engine')
  @JsxRender(JsxEnginePage, {
    layout: DashboardLayout,
    meta: {
      title: 'JSX Engine & Hydration - Harpy.js Architecture Deep Dive',
      description:
        'Comprehensive guide to Harpy.js JSX engine architecture, server-side rendering, automatic hydration, client component detection, and optimistic chunking strategy for high-performance React SSR with NestJS and Fastify.',
      keywords:
        'JSX engine, React SSR, server-side rendering, hydration, client components, chunking strategy, Fastify integration, NestJS React, JSX rendering, component hydration, performance optimization',
      canonical: 'https://www.harpyjs.org/docs/jsx-engine',
      openGraph: {
        title: 'JSX Engine & Hydration Architecture - Harpy.js Framework',
        description:
          'Deep dive into Harpy.js JSX rendering engine, automatic hydration mechanism, and how React components integrate seamlessly with Fastify and NestJS for lightning-fast SSR.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/jsx-engine',
        image: 'https://harpyjs.com/og-image.png',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'JSX Engine & Hydration - Harpy.js Architecture',
        description:
          'Learn how Harpy.js renders React components server-side with automatic hydration and optimistic chunking for optimal performance.',
        image: 'https://harpyjs.com/twitter-image.png',
      },
    },
  })
  async jsxEngine(@Req() request: FastifyRequest) {
    const currentPath = (request.originalUrl || request.url) ?? '/';
    const sections = this.navigationService.getSectionsForRoute(currentPath);
    const locale = 'en';
    const dict = await getDictionary(locale);
    const activeItemId = this.navigationService.getActiveItemId(currentPath);

    return {
      sections,
      dict,
      locale,
      activeItemId,
    };
  }
}
