import { JsxRender, CurrentLocale } from '@hepta-solutions/harpy-core';
import { Controller, Get } from '@nestjs/common';
import DocsPage, { type PageProps } from './views/installation-page';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '../../shared/navigation.service';

@Controller('docs')
export class InstallationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('installation')
  @JsxRender(DocsPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Documentation - Harpy.js Framework (BETA)',
      description:
        'Complete documentation for Harpy.js - Learn how to build full-stack applications with NestJS + React SSR. Includes installation guide, architecture overview, JSX rendering, client hydration, i18n support, and deployment instructions. Beta version.',
      canonical: 'https://github.com/Makhloufhleli/harpyjs-docs',
      openGraph: {
        title: 'Harpy.js Documentation - Full-Stack NestJS + React SSR',
        description:
          'Learn how to build powerful full-stack applications with Harpy.js. Complete guides on SSR, hydration, routing, and more.',
        type: 'website',
        url: 'https://github.com/Makhloufhleli/harpyjs-docs',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Documentation',
        description:
          'Complete documentation for building full-stack apps with NestJS + React SSR',
      },
    },
  })
  async docs(@CurrentLocale() locale: string): Promise<PageProps> {
    const dict = await getDictionary(locale);
    const sections = this.navigationService.getAllSections();

    return {
      sections,
      dict,
      locale,
    };
  }
}
