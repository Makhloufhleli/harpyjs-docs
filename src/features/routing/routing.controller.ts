import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { JsxRender } from '@harpy-js/core';
import RoutingPage from './views/routing-page';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class RoutingDocsController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('routing')
  @JsxRender(RoutingPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Harpy.js Routing Guide - NestJS, React & Server-Side Rendering',
      description:
        'Advanced routing guide for Harpy.js full-stack framework. Master dynamic routes, nested routing, client-side navigation, server-side rendering, automatic hydration, and performance optimization for enterprise Node.js applications with React.',
      keywords:
        'NestJS routing, React routing, server-side rendering routing, dynamic routing, nested routes, client-side navigation, Node.js routing, SSR patterns, performance-optimized routing, full-stack routing',
      canonical: 'https://www.harpyjs.org/docs/routing',
      openGraph: {
        title: 'Harpy.js Routing Guide - NestJS & React SSR Framework',
        description:
          'Master routing in full-stack applications with Harpy.js. Learn advanced routing patterns for NestJS backend and React frontend with SSR, hydration, dynamic parameters, and performance optimization.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/routing',
        image: 'https://harpyjs.com/og-image.png',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Routing - NestJS & React SSR',
        description:
          'Complete routing guide for full-stack applications. Learn dynamic routing, SSR integration, client-side navigation, and performance patterns with NestJS and React.',
        image: 'https://harpyjs.com/twitter-card.png',
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
