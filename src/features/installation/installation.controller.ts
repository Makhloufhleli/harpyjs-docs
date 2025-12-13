import { JsxRender } from '@harpy-js/core';
import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import DocsPage, { type PageProps } from './views/installation-page';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '@harpy-js/core';
import { CurrentLocale } from '@harpy-js/i18n';

@Controller('docs')
export class InstallationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('installation')
  @JsxRender(DocsPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Harpy.js Installation Guide - NestJS, React SSR & Node.js Setup',
      description:
        'Quick-start installation guide for Harpy.js full-stack framework. Set up NestJS backend with React server-side rendering, automatic client hydration, and high-performance rendering in minutes. Includes TypeScript, routing, i18n, and production deployment.',
      keywords:
        'Harpy.js installation, NestJS setup, React SSR setup, Node.js framework, full-stack development, TypeScript framework, web development setup, server-side rendering setup, hydration configuration',
      canonical: 'https://www.harpyjs.org/docs/installation',
      openGraph: {
        title:
          'Harpy.js Installation - Full-Stack NestJS & React SSR Framework',
        description:
          'Get started with Harpy.js in minutes. Complete installation and setup guide for building full-stack applications with NestJS, React SSR, automatic hydration, and performance-first development.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/installation',
        image: 'https://harpyjs.com/og-image.png',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Installation - NestJS + React SSR',
        description:
          'Step-by-step guide to install and configure Harpy.js framework. Set up full-stack development with NestJS, React SSR, and automatic hydration. Get started in minutes.',
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
