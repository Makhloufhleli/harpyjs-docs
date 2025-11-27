import { JsxRender, CurrentLocale } from '@hepta-solutions/harpy-core';
import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';
import Homepage, { type PageProps } from './views/homepage';
import { getDictionary } from '../../i18n/get-dictionary';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get()
  @JsxRender(Homepage, {
    meta: () => ({
      title: 'Harpy.js - Full-Stack NestJS Framework with React SSR (BETA)',
      description:
        'Build powerful full-stack applications with Harpy.js - a modern framework leveraging NestJS ecosystem with server-side React rendering, automatic client-side hydration, and 1-7ms render times. Currently in beta.',
      canonical: 'https://github.com/Makhloufhleli/harpyjs-docs',
      openGraph: {
        title: 'Harpy.js - Full-Stack NestJS Framework with React SSR',
        description:
          'Build powerful full-stack applications with Harpy.js - NestJS + React SSR with automatic hydration and lightning-fast performance.',
        type: 'website',
        url: 'https://github.com/Makhloufhleli/harpyjs-docs',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js - Full-Stack NestJS Framework with React SSR',
        description:
          'Build powerful full-stack applications with NestJS + React SSR. Automatic hydration, 1-7ms render times, built-in i18n.',
      },
    }),
  })
  async homepage(@CurrentLocale() locale: string): Promise<PageProps> {
    // Get dictionary for type-safe translations
    const dict = await getDictionary(locale);

    return {
      items: this.homeService.getItems(),
      dict,
      locale,
    };
  }
}
