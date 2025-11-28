import { JsxRender, CurrentLocale } from '@hepta-solutions/harpy-core';
import { Controller, Get } from '@nestjs/common';
import DocsPage, { type PageProps } from './views/getting-started-page';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '../../shared/navigation.service';

@Controller('docs')
export class GettingStartedController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get()
  @JsxRender(DocsPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Harpy.js Documentation - Full-Stack NestJS + React SSR (BETA)',
      description:
        'Explore the complete Harpy.js documentation to build full-stack applications with NestJS and React SSR. Includes installation, architecture, JSX rendering, client-side hydration, i18n, routing, and deployment guides. Beta version.',
      canonical: 'https://harpyjs.com/docs',
      openGraph: {
        title:
          'Harpy.js Documentation - Build Full-Stack Apps with NestJS + React SSR',
        description:
          'Master Harpy.js with comprehensive guides on SSR, client hydration, routing, i18n, and deployment. Build scalable, high-performance full-stack applications. Beta release.',
        type: 'website',
        url: 'https://harpyjs.com/docs',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js Documentation - Full-Stack NestJS + React SSR',
        description:
          'Complete guides to building full-stack apps with Harpy.js. Learn SSR, client-side hydration, routing, i18n, and deployment. Beta available.',
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
