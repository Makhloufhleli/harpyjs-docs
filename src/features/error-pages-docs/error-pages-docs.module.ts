import { Module } from '@nestjs/common';
import { ErrorPagesDocsController } from './error-pages-docs.controller';
import { ErrorPagesDocsService } from './error-pages-docs.service';
import {
  NavigationService,
  NavigationRegistry,
  AutoRegisterModule,
} from '@harpy-js/core';

@Module({
  controllers: [ErrorPagesDocsController],
  providers: [ErrorPagesDocsService],
})
export class ErrorPagesDocsModule extends AutoRegisterModule {
  constructor(
    navigationService: NavigationService,
    private readonly errorPagesDocsService: ErrorPagesDocsService,
  ) {
    super(navigationService);
  }

  protected registerNavigation(navigation: NavigationRegistry): void {
    this.errorPagesDocsService.registerNavigation(navigation);
  }
}
