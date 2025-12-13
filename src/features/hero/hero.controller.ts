import { JsxRender, PageProps } from '@harpy-js/core';
import { Controller, Get } from '@nestjs/common';
import { HeroService } from './hero.service';
import HeroPage from './views/hero-page';
import { getDictionary } from '../../i18n/get-dictionary';
import { CurrentLocale } from '@harpy-js/i18n';

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  @JsxRender(HeroPage, {
    meta: {
      title:
        'Harpy.js - Full-Stack NestJS Framework with React SSR | Node.js + Next.js Alternative',
      description:
        'Harpy.js is a modern full-stack framework combining NestJS, React SSR, and Node.js for building high-performance web applications. An alternative to Next.js with automatic client-side hydration, sub-7ms page loads, and enterprise-grade features. Build scalable Node.js applications with React frontend seamlessly.',
      keywords:
        'NestJS, React SSR, Node.js framework, full-stack framework, Next.js alternative, React framework, server-side rendering, TypeScript framework, web development, Node.js web framework',
      canonical: 'https://www.harpyjs.org/',
      openGraph: {
        title:
          'Harpy.js - Full-Stack Node.js Framework with NestJS & React SSR',
        description:
          'Build high-performance full-stack applications with Harpy.js. Combines NestJS backend with React server-side rendering, automatic hydration, and ultra-fast rendering. The Next.js alternative powered by Node.js.',
        type: 'website',
        url: 'https://www.harpyjs.org/',
        image: 'https://harpyjs.com/og-image.png',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Harpy.js - Full-Stack Node.js & React Framework',
        description:
          'Build blazing-fast, SEO-optimized full-stack apps with Harpy.js. NestJS + React SSR + Node.js with automatic hydration and sub-7ms render times. A modern alternative to Next.js.',
        image: 'https://harpyjs.com/twitter-card.png',
      },
    },
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
