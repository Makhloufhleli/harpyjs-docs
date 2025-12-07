import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { JsxRender } from '@hepta-solutions/harpy-core';
import RoutingPage from './views/routing-page';
import { NavigationService } from '@hepta-solutions/harpy-core';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class RoutingDocsController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('routing')
  @JsxRender(RoutingPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Routing Guide - Harpy.js Framework (BETA)',
      description:
        'Comprehensive guide to routing in Harpy.js. Learn how to configure client-side and server-side routes, dynamic parameters, nested routes, and React SSR integration. Beta version.',
      canonical: 'https://www.harpyjs.org/docs/routing',
      openGraph: {
        title: 'Harpy.js Routing Guide - Full-Stack NestJS + React SSR',
        description:
          'Step-by-step guide to set up routing in Harpy.js applications. Covers dynamic routes, nested routes, client-side navigation, SSR, and hydration. Beta release.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/routing',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Routing Guide',
        description:
          'Complete guide to routing in Harpy.js with NestJS + React SSR. Learn dynamic routing, nested routes, client-side navigation, and SSR integration. Beta version.',
      },
    },
  })
  async routing(@Req() req: FastifyRequest) {
    const currentPath = (req.originalUrl || req.url) ?? '/';

    // Let the NavigationService compute the active item and decorate
    // returned sections (fast server-side helper). This avoids duplicating
    // the path-normalization/indexing logic here and keeps SSR consistent.
    const sections = this.navigationService.getSectionsForRoute(currentPath);
    const dict = await getDictionary('en');

    const activeItemId = this.navigationService.getActiveItemId(currentPath);

    return {
      sections,
      dict,
      locale: 'en',
      activeItemId,
    };
  }
}
