import { JsxRender, CurrentLocale } from '@hepta-solutions/harpy-core';
import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';
import HeroPage, { type PageProps } from './views/hero-page';
import { getDictionary } from '../../i18n/get-dictionary';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  @JsxRender(HeroPage, {
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
      dict,
      locale,
    };
  }
}
