import { JsxRender, CurrentLocale } from '@hepta-solutions/harpy-core';
import { Controller, Get } from '@nestjs/common';
import { ThrottlerService } from './throttler.service';
import ThrottlerDocsPage, { type PageProps } from './views/throttler-page';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '../../shared/navigation.service';

@Controller('docs')
export class ThrottlerController {
  constructor(
    private readonly throttlerService: ThrottlerService,
    private readonly navigationService: NavigationService,
  ) {}

  @Get('throttler')
  @JsxRender(ThrottlerDocsPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Rate Limiting Guide - Harpy.js Framework (BETA)',
      description:
        'Learn how to implement rate limiting (throttling) in Harpy.js. Full-stack guide for NestJS + React SSR covering request limits, protection against abuse, and best practices. Beta version.',
      canonical: 'https://www.harpyjs.org/docs/throttler',
      openGraph: {
        title: 'Harpy.js Rate Limiting Guide - Full-Stack NestJS + React SSR',
        description:
          'Step-by-step guide to set up rate limiting (throttling) in Harpy.js applications. Covers request limits, preventing abuse, SSR integration, and best practices. Beta release.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/throttler',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Rate Limiting Guide',
        description:
          'Complete guide to implementing rate limiting (throttling) in Harpy.js with NestJS + React SSR. Learn request limits, protection against abuse, and best practices. Beta version.',
      },
    },
  })
  async throttlerDocs(@CurrentLocale() locale: string): Promise<PageProps> {
    const dict = await getDictionary(locale);
    const sections = this.navigationService.getAllSections();

    return {
      sections,
      dict,
      locale,
    };
  }
}
