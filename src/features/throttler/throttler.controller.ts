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
      title: 'Rate Limiting - Harpy.js Documentation',
      description:
        'Learn how to implement rate limiting in Harpy.js applications using @nestjs/throttler. Protect your application from abuse with configurable request limits.',
      canonical: 'https://github.com/Makhloufhleli/harpyjs-docs/docs/throttler',
      openGraph: {
        title: 'Rate Limiting - Harpy.js Documentation',
        description:
          'Complete guide to implementing rate limiting in Harpy.js applications.',
        type: 'website',
        url: 'https://github.com/Makhloufhleli/harpyjs-docs/docs/throttler',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Rate Limiting - Harpy.js Documentation',
        description:
          'Complete guide to implementing rate limiting in Harpy.js applications.',
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
