import { Module, OnModuleInit } from '@nestjs/common';
import { RoutingDocsController } from './routing.controller';
import { RoutingService } from './routing.service';
import { NavigationService } from '../../shared/navigation.service';

@Module({
  controllers: [RoutingDocsController],
  providers: [RoutingService],
})
export class RoutingDocsModule implements OnModuleInit {
  constructor(
    private readonly navigationService: NavigationService,
    private readonly routingService: RoutingService,
  ) {}

  onModuleInit() {
    // Register this module's navigation items
    this.routingService.registerNavigation(this.navigationService);
  }
}
