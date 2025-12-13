import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { JsxRender } from '@harpy-js/core';
import ExamplesPage from './views/examples-page';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class ExamplesController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('examples')
  @JsxRender(ExamplesPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Live Examples - Real-World Harpy.js Applications',
      description:
        'Explore real-world examples built with Harpy.js framework. This documentation site itself is built with Harpy.js, demonstrating server-side rendering, routing, internationalization, and SEO features in production.',
      keywords:
        'Harpy.js examples, NestJS examples, React SSR examples, full-stack examples, Node.js demo, example applications, production examples',
      canonical: 'https://www.harpyjs.org/examples',
      openGraph: {
        title: 'Live Examples - Harpy.js Framework',
        description:
          'See Harpy.js in action. This documentation site is built with the framework, showcasing all features in a real production application.',
        type: 'website',
        url: 'https://www.harpyjs.org/examples',
        image: 'https://harpyjs.org/favicon.png',
      },
      twitter: {
        card: 'summary',
        title: 'Live Examples - Harpy.js',
        description:
          'Real-world Harpy.js applications. This docs site is built with the framework itself.',
        image: 'https://harpyjs.org/twitter-card.jpg',
      },
    },
  })
  async examples(@Req() req: FastifyRequest) {
    const currentPath = (req.originalUrl || req.url) ?? '/';
    const sections = this.navigationService.getSectionsForRoute(currentPath);
    const dict = await getDictionary('en');
    const activeItemId = this.navigationService.getActiveItemId(currentPath);

    return {
      sections,
      activeItemId,
      dict,
    };
  }
}
