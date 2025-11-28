import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@hepta-solutions/harpy-core';
import I18nPage from './views/i18n-page';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '../../shared/navigation.service';
import { getDictionary } from '../../i18n/get-dictionary';

@Controller('docs')
export class InternationalizationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('internationalization')
  @JsxRender(I18nPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Internationalization Guide - Harpy.js Framework (BETA)',
      description:
        'Learn how to implement internationalization (i18n) in Harpy.js. Full-stack guide for NestJS + React SSR including localization setup, dynamic routing, hydration, and best practices. Beta version.',
      canonical: 'https://www.harpyjs.org/docs/internationalization',
      openGraph: {
        title:
          'Harpy.js Internationalization Guide - Full-Stack NestJS + React SSR',
        description:
          'Step-by-step guide to add internationalization (i18n) in Harpy.js applications. Covers localization, SSR, dynamic routing, hydration, and best practices. Beta release.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/internationalization',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Internationalization Guide',
        description:
          'Complete guide to implementing internationalization (i18n) in Harpy.js with NestJS + React SSR. Learn localization, routing, and hydration. Beta version.',
      },
    },
  })
  async i18n() {
    const sections = this.navigationService.getAllSections();
    const dict = await getDictionary('en');

    return {
      sections,
      dict,
      locale: 'en',
    };
  }
}
