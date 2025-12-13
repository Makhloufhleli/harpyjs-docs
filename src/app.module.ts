import { Module } from '@nestjs/common';
import { I18nModule } from '@harpy-js/i18n';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { HeroModule } from './features/hero/hero.module';
import { GettingStartedModule } from './features/getting-started/getting-started.module';
import { RoutingDocsModule } from './features/routing/routing.module';
import { InternationalizationModule } from './features/internationalization/internationalization.module';
import { SeoDocsModule } from './features/seo-docs/seo-docs.module';
import { i18nConfig } from './i18n/i18n.config';
import { InstallationModule } from './features/installation/installation.module';
import { RouterModule, SeoModule } from '@harpy-js/core';
import { SeoService } from './seo.service';

@Module({
  imports: [
    RouterModule,
    // Note: core-concepts will be registered by the routing module itself.
    // Configure I18n module
    I18nModule.forRoot(i18nConfig),
    // Rate limiting: 10 requests per 10 seconds
    ThrottlerModule.forRoot([
      {
        ttl: 10000, // Time to live: 10 seconds
        limit: 5, // Maximum 10 requests per TTL
      },
    ]),
    HeroModule,
    GettingStartedModule,
    InstallationModule,
    RoutingDocsModule,
    SeoDocsModule,
    InternationalizationModule,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    SeoModule.forRootWithService(SeoService, {
      baseUrl: 'https://harpyjs.org',
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
