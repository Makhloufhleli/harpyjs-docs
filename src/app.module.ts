import { Module } from '@nestjs/common';
import { I18nModule } from '@hepta-solutions/harpy-core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { SharedModule } from './shared/shared.module';
import { HeroModule } from './features/hero/hero.module';
import { GettingStartedModule } from './features/getting-started/getting-started.module';
import { ThrottlerModule as AppThrottler } from './features/throttler/throttler.module';
import { RoutingDocsModule } from './features/routing/routing.module';
import { InternationalizationModule } from './features/internationalization/internationalization.module';
import { i18nConfig } from './i18n/i18n.config';
import { InstallationModule } from './features/installation/installation.module';

@Module({
  imports: [
    // Global core module with shared services
    SharedModule,
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
    AppThrottler,
    RoutingDocsModule,
    InternationalizationModule,
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
