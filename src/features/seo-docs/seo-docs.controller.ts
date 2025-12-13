import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { JsxRender } from '@harpy-js/core';
import SeoDocsPage from './views/seo-docs-page';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class SeoDocsController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('seo')
  @JsxRender(SeoDocsPage, {
    layout: DashboardLayout,
    meta: {
      title:
        'SEO & Discoverability - robots.txt, sitemap.xml | Harpy.js Framework',
      description:
        'Complete SEO guide for Harpy.js. Learn how to generate robots.txt and sitemap.xml files automatically, customize crawling rules, implement dynamic sitemaps from databases, and optimize your Node.js application for search engines with built-in SEO features.',
      keywords:
        'SEO, search engine optimization, robots.txt, sitemap.xml, NestJS SEO, Node.js SEO, web crawlers, search engine indexing, dynamic sitemaps, SEO best practices, discoverability, Google indexing',
      canonical: 'https://www.harpyjs.org/docs/seo',
      openGraph: {
        title: 'SEO & Discoverability - Harpy.js Built-in SEO Features',
        description:
          'Master SEO in Harpy.js with automatic robots.txt and sitemap.xml generation. Built-in controllers, dynamic sitemap support, and extensible service architecture for optimal search engine discoverability.',
        type: 'website',
        url: 'https://www.harpyjs.org/docs/seo',
        image: 'https://harpyjs.org/favicon.png',
      },
      twitter: {
        card: 'summary',
        title: 'SEO & Discoverability - Harpy.js Framework',
        description:
          'Built-in SEO features: automatic robots.txt & sitemap.xml generation, dynamic sitemaps, and extensible service architecture for search engine optimization.',
        image: 'https://harpyjs.org/twitter-card.jpg',
      },
    },
  })
  async seo(@Req() req: FastifyRequest) {
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
