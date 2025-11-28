import { Module, OnModuleInit } from '@nestjs/common';
import { GettingStartedController } from './getting-started.controller';
import { GettingStartedService } from './getting-started.service';
import { NavigationService } from 'src/shared/navigation.service';

@Module({
  controllers: [GettingStartedController],
  providers: [GettingStartedService],
})
export class GettingStartedModule implements OnModuleInit {
  constructor(
    private readonly navigationService: NavigationService,
    private readonly gettingStartedService: GettingStartedService,
  ) {}

  onModuleInit() {
    this.gettingStartedService.registerNavigation(this.navigationService);
  }
}
