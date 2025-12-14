import { Module } from '@nestjs/common';
import { LayoutsDocsController } from './layouts-docs.controller';
import { LayoutsDocsService } from './layouts-docs.service';
import {
  NavigationService,
  NavigationRegistry,
  AutoRegisterModule,
} from '@harpy-js/core';

@Module({
  controllers: [LayoutsDocsController],
  providers: [LayoutsDocsService],
})
export class LayoutsDocsModule extends AutoRegisterModule {
  constructor(
    navigationService: NavigationService,
    private readonly layoutsDocsService: LayoutsDocsService,
  ) {
    super(navigationService);
  }

  protected registerNavigation(navigation: NavigationRegistry): void {
    this.layoutsDocsService.registerNavigation(navigation);
  }
}
