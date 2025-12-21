export const IMPORT_SEO_MODULE = `import { Module } from '@nestjs/common';
import { SeoModule } from '@harpy-js/core';

@Module({
  imports: [
    SeoModule.forRoot({
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    }),
  ],
})
export class AppModule {}`;

export const CUSTOM_SEO_SERVICE = `import { Injectable } from '@nestjs/common';
import { BaseSeoService, SitemapUrl, RobotsConfig } from '@harpy-js/core';

@Injectable()
export class SeoService extends BaseSeoService {
  getSitemapUrls(): Promise<SitemapUrl[]> {
    const now = new Date();

    return Promise.resolve([
      {
        url: this.baseUrl,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: \`\${this.baseUrl}/about\`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]);
  }

  getRobotsConfig(): RobotsConfig {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      sitemap: \`\${this.baseUrl}/sitemap.xml\`,
      host: this.baseUrl,
    };
  }
}`;

export const CUSTOM_SERVICE_MODULE = `import { Module } from '@nestjs/common';
import { SeoModule } from '@harpy-js/core';
import { SeoService } from './seo.service';

@Module({
  imports: [
    SeoModule.forRootWithService(SeoService, {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    }),
  ],
})
export class AppModule {}`;

export const DYNAMIC_SITEMAP_DATABASE = `import { Injectable } from '@nestjs/common';
import { BaseSeoService, SitemapUrl } from '@harpy-js/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class SeoService extends BaseSeoService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {
    super();
  }

  async getSitemapUrls(): Promise<SitemapUrl[]> {
    const staticPages: SitemapUrl[] = [
      {
        url: this.baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
      },
    ];

    // Fetch blog posts from database
    const posts = await this.postsRepository.find({
      select: ['slug', 'updatedAt'],
      where: { published: true },
    });

    const dynamicPages = posts.map((post) => ({
      url: \`\${this.baseUrl}/blog/\${post.slug}\`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

    return [...staticPages, ...dynamicPages];
  }

  getRobotsConfig() {
    return {
      rules: { userAgent: '*', allow: '/' },
      sitemap: \`\${this.baseUrl}/sitemap.xml\`,
    };
  }
}`;

export const MULTI_LANGUAGE_SITEMAP = `getSitemapUrls(): Promise<SitemapUrl[]> {
  const locales = ['en', 'fr', 'es'];
  const pages = ['/', '/about', '/contact'];
  
  const urls: SitemapUrl[] = [];
  
  for (const locale of locales) {
    for (const page of pages) {
      urls.push({
        url: \`\${this.baseUrl}/\${locale}\${page}\`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: page === '/' ? 1.0 : 0.8,
        alternates: {
          languages: locales.reduce((acc, lang) => {
            acc[lang] = \`\${this.baseUrl}/\${lang}\${page}\`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    }
  }
  
  return Promise.resolve(urls);
}`;

export const MULTIPLE_ROBOTS_RULES = `getRobotsConfig(): RobotsConfig {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/', '/private/'],
      },
    ],
    sitemap: [
      \`\${this.baseUrl}/sitemap.xml\`,
      \`\${this.baseUrl}/sitemap-images.xml\`,
    ],
    host: this.baseUrl,
  };
}`;

export const ROBOTS_TXT_OUTPUT = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/

Sitemap: https://example.com/sitemap.xml

Host: https://example.com`;

export const SITEMAP_XML_OUTPUT = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com</loc>
    <lastmod>2025-12-13T12:00:00.000Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://example.com/about</loc>
    <lastmod>2025-12-13T12:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;

export const TEST_ENDPOINTS = `# Test robots.txt
curl http://localhost:3000/robots.txt

# Test sitemap.xml
curl http://localhost:3000/sitemap.xml`;

export const CANONICAL_REDIRECTS = `import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { setupHarpyApp } from '@harpy-js/core';

async function bootstrap() {
  const adapter = new FastifyAdapter();
  const app = await NestFactory.create(AppModule, adapter);

  await setupHarpyApp(app, {
    enforceRedirects: true,           // Enable canonical redirects
    mainDomain: 'example.com',        // Your canonical domain
    enforceHttps: true,               // Redirect HTTP → HTTPS
    redirectWww: true,                // Redirect www → non-www
  });

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();`;

export const CANONICAL_REDIRECT_OPTIONS = `interface HarpyAppOptions {
  enforceRedirects?: boolean;  // Enable/disable all redirects
  mainDomain?: string;         // Your canonical domain (e.g., 'example.com')
  enforceHttps?: boolean;      // Force HTTPS protocol
  redirectWww?: boolean;       // Redirect www to non-www (or vice versa)
  // ... other options
}`;

export const SITEMAP_TYPES = `interface SitemapUrl {
  url: string;
  lastModified?: Date | string;
  changeFrequency?: 
    | 'always' 
    | 'hourly' 
    | 'daily' 
    | 'weekly' 
    | 'monthly' 
    | 'yearly' 
    | 'never';
  priority?: number; // 0.0 to 1.0
  alternates?: {
    languages?: Record<string, string>;
  };
}

interface RobotsConfig {
  rules: {
    userAgent: string | string[];
    allow?: string | string[];
    disallow?: string | string[];
    crawlDelay?: number;
  } | Array<{...}>;
  sitemap?: string | string[];
  host?: string;
}`;
