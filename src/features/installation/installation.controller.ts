import { JsxRender } from '@hepta-solutions/harpy-core';
import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import DocsPage, { type PageProps } from './views/installation-page';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '@hepta-solutions/harpy-core';
import { CurrentLocale } from '@hepta-solutions/harpy-i18n';

@Controller('docs')
export class InstallationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('installation')
  @JsxRender(DocsPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Installation Guide - Harpy.js Framework (BETA)',
      description:
        'Step-by-step installation guide for Harpy.js. Learn how to set up full-stack applications with NestJS and React SSR, including hydration, routing, i18n, and deployment. Beta version.',
      canonical: 'https://www.harpyjs.org/docs/installation',
      openGraph: {
        title: 'Harpy.js Installation Guide - Full-Stack NestJS + React SSR',
        description:
          'Follow our comprehensive guide to install Harpy.js and start building high-performance full-stack apps with NestJS and React SSR. Beta release.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/installation',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Installation Guide',
        description:
          'Complete step-by-step guide to install Harpy.js and build full-stack apps with NestJS + React SSR. Beta version available.',
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
