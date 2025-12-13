import { Injectable } from '@nestjs/common';
import { BaseSeoService, SitemapUrl, RobotsConfig } from '@harpy-js/core';

@Injectable()
export class SeoService extends BaseSeoService {
  getSitemapUrls(): Promise<SitemapUrl[]> {
    const now = new Date();

    return Promise.resolve([
      {
        url: `${this.baseUrl}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${this.baseUrl}/docs`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/docs/installation`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${this.baseUrl}/docs/routing`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${this.baseUrl}/docs/seo`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${this.baseUrl}/docs/internationalization`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${this.baseUrl}/docs/examples`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]);
  }

  getRobotsConfig(): RobotsConfig {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      sitemap: `${this.baseUrl}/sitemap.xml`,
      host: `${this.baseUrl}`,
    };
  }
}
