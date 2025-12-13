import { Module } from '@nestjs/common';
import { ExamplesController } from './examples.controller';
import { ExamplesService } from './examples.service';
import {
  NavigationService,
  NavigationRegistry,
  AutoRegisterModule,
} from '@harpy-js/core';

@Module({
  controllers: [ExamplesController],
  providers: [ExamplesService],
})
export class ExamplesModule extends AutoRegisterModule {
  constructor(
    navigationService: NavigationService,
    private readonly examplesService: ExamplesService,
  ) {
    super(navigationService);
  }

  protected registerNavigation(navigation: NavigationRegistry): void {
    this.examplesService.registerNavigation(navigation);
  }
}
