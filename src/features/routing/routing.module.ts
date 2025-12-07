import { Module } from '@nestjs/common';
import { RoutingDocsController } from './routing.controller';
import { RoutingService } from './routing.service';
import {
  NavigationService,
  NavigationRegistry,
  AutoRegisterModule,
} from '@hepta-solutions/harpy-core';

@Module({
  controllers: [RoutingDocsController],
  providers: [RoutingService],
})
export class RoutingDocsModule extends AutoRegisterModule {
  constructor(
    navigationService: NavigationService,
    private readonly routingService: RoutingService,
  ) {
    super(navigationService);
  }

  protected registerNavigation(navigation: NavigationRegistry): void {
    // Delegate to the routing service; AutoRegisterModule will call this
    this.routingService.registerNavigation(navigation);
  }
}
