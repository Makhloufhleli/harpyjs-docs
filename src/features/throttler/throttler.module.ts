import { Module, OnModuleInit } from '@nestjs/common';
import { ThrottlerController } from './throttler.controller';
import { ThrottlerService } from './throttler.service';
import { NavigationService } from '../../shared/navigation.service';

@Module({
  controllers: [ThrottlerController],
  providers: [ThrottlerService],
})
export class ThrottlerModule implements OnModuleInit {
  constructor(
    private readonly navigationService: NavigationService,
    private readonly throttlerDocsService: ThrottlerService,
  ) {}

  onModuleInit() {
    // Register throttler documentation in the navigation
    this.throttlerDocsService.registerNavigation(this.navigationService);
  }
}
