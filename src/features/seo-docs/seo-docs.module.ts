import { Module } from '@nestjs/common';
import { SeoDocsController } from './seo-docs.controller';
import { SeoDocsService } from './seo-docs.service';
import {
  NavigationService,
  NavigationRegistry,
  AutoRegisterModule,
} from '@harpy-js/core';

@Module({
  controllers: [SeoDocsController],
  providers: [SeoDocsService],
})
export class SeoDocsModule extends AutoRegisterModule {
  constructor(
    navigationService: NavigationService,
    private readonly seoDocsService: SeoDocsService,
  ) {
    super(navigationService);
  }

  protected registerNavigation(navigation: NavigationRegistry): void {
    this.seoDocsService.registerNavigation(navigation);
  }
}
