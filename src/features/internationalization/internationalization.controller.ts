import { Controller, Get, Req } from '@nestjs/common';
import { JsxRender } from '@harpy-js/core';
import I18nPage from './views/i18n-page';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';

@Controller('docs')
export class InternationalizationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('internationalization')
  @JsxRender(I18nPage, {
    layout: DashboardLayout,
    meta: {
      title:
        'Harpy.js i18n Guide - Internationalization for NestJS & React SSR',
      description:
        'Complete internationalization (i18n) guide for Harpy.js full-stack framework. Learn multi-language support with NestJS backend, React SSR frontend, dynamic routing, locale detection, hydration, and scalable localization strategies for global applications.',
      keywords:
        'internationalization i18n, multi-language support, localization, NestJS i18n, React i18n, server-side rendering internationalization, Node.js framework, global applications, locale routing, language switching',
      canonical: 'https://www.harpyjs.org/docs/internationalization',
      openGraph: {
        title:
          'Harpy.js Internationalization Guide - NestJS & React SSR Framework',
        description:
          'Build truly global applications with Harpy.js i18n support. Learn multi-language implementation with NestJS backend, React frontend, SSR, automatic hydration, and best practices for scalable localization.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/internationalization',
        image: 'https://harpyjs.com/og-image.png',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Internationalization - NestJS & React SSR',
        description:
          'Master multi-language support in full-stack applications. Complete i18n guide for NestJS + React SSR with dynamic routing, locale detection, and hydration.',
        image: 'https://harpyjs.com/twitter-card.png',
      },
    },
  })
  async i18n(@Req() req: any) {
    const currentPath = (req && (req.originalUrl || req.url)) || '/';

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
