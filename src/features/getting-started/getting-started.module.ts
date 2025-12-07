import { Module } from '@nestjs/common';
import { GettingStartedController } from './getting-started.controller';
import { GettingStartedService } from './getting-started.service';
import {
  NavigationService,
  NavigationRegistry,
  AutoRegisterModule,
} from '@hepta-solutions/harpy-core';

@Module({
  controllers: [GettingStartedController],
  providers: [GettingStartedService],
})
export class GettingStartedModule extends AutoRegisterModule {
  constructor(
    navigationService: NavigationService,
    private readonly gettingStartedService: GettingStartedService,
  ) {
    super(navigationService);
  }

  protected registerNavigation(navigation: NavigationRegistry): void {
    this.gettingStartedService.registerNavigation(navigation);
  }
}
