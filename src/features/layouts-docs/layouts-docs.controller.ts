import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { JsxRender } from '@harpy-js/core';
import LayoutsPage from './views/layouts-page';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class LayoutsDocsController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('layouts')
  @JsxRender(LayoutsPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Multiple Layouts - Harpy.js Documentation',
      description:
        'Learn how to use multiple layouts in Harpy.js. Create different layouts for different sections of your application, from landing pages to admin dashboards. Complete guide with examples.',
      keywords:
        'Harpy.js layouts, multiple layouts, React SSR layouts, NestJS layouts, layout system, dashboard layout, default layout, custom layouts',
      canonical: 'https://www.harpyjs.org/docs/layouts',
      openGraph: {
        title: 'Multiple Layouts - Harpy.js Framework',
        description:
          'Build applications with multiple layouts in Harpy.js. Learn how to create and apply different layouts for different routes.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/layouts',
        image: 'https://harpyjs.org/favicon.png',
      },
      twitter: {
        card: 'summary',
        title: 'Multiple Layouts - Harpy.js',
        description:
          'Use multiple layouts in your Harpy.js application for different sections and purposes.',
        image: 'https://harpyjs.org/twitter-card.jpg',
      },
    },
  })
  async layouts(@Req() req: FastifyRequest) {
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
