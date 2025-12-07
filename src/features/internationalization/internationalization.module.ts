import { Module, OnModuleInit } from '@nestjs/common';
import { InternationalizationController } from './internationalization.controller';
import { InternationalizationService } from './internationalization.service';
import { NavigationService } from '@hepta-solutions/harpy-core';

@Module({
  controllers: [InternationalizationController],
  providers: [InternationalizationService],
})
export class InternationalizationModule implements OnModuleInit {
  constructor(
    private readonly internationalizationService: InternationalizationService,
    private readonly navigationService: NavigationService,
  ) {}

  onModuleInit() {
    this.internationalizationService.registerNavigation(this.navigationService);
  }
}
