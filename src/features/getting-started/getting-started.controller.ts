import { JsxRender } from '@harpy-js/core';
import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import DocsPage, { type PageProps } from './views/getting-started-page';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '@harpy-js/core';
import { CurrentLocale } from '@harpy-js/i18n';

@Controller('docs')
export class GettingStartedController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get()
  @JsxRender(DocsPage, {
    layout: DashboardLayout,
    meta: {
      title:
        'Harpy.js Documentation - Full-Stack NestJS & React SSR Framework Guide',
      description:
        'Complete Harpy.js documentation for building high-performance full-stack applications with NestJS, React SSR, Node.js, and automatic hydration. Learn routing, i18n, performance optimization, and deployment strategies for enterprise applications.',
      keywords:
        'NestJS documentation, React SSR guide, full-stack framework, Node.js framework, server-side rendering, hydration, TypeScript web development, performance optimization, React framework, SSR best practices',
      canonical: 'https://harpyjs.com/docs',
      openGraph: {
        title:
          'Harpy.js Documentation - Full-Stack NestJS, React SSR & Node.js Framework',
        description:
          'Master building high-performance full-stack applications with Harpy.js. Comprehensive guides on NestJS + React SSR, automatic hydration, routing, internationalization, and deployment. Node.js framework for modern web development.',
        type: 'website',
        url: 'https://harpyjs.com/docs',
        image: 'https://harpyjs.com/og-image.png',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Documentation - NestJS + React SSR Framework',
        description:
          'Learn to build blazing-fast full-stack apps with NestJS, React SSR, and automatic hydration. Performance-optimized Node.js web framework with enterprise features.',
        image: 'https://harpyjs.com/twitter-card.png',
      },
    },
  })
  async docs(
    @Req() req: FastifyRequest,
    @CurrentLocale() locale: string,
  ): Promise<PageProps> {
    const currentPath = (req.originalUrl || req.url) ?? '/';

    const sections = this.navigationService.getSectionsForRoute(currentPath);
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
