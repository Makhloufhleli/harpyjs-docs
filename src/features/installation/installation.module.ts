import { Module, OnModuleInit } from '@nestjs/common';
import { InstallationController } from './installation.controller';
import { InstallationService } from './installation.service';
import { NavigationService } from '@hepta-solutions/harpy-core';

@Module({
  controllers: [InstallationController],
  providers: [InstallationService],
})
export class InstallationModule implements OnModuleInit {
  constructor(
    private readonly navigationService: NavigationService,
    private readonly installationService: InstallationService,
  ) {}

  onModuleInit() {
    this.installationService.registerNavigation(this.navigationService);
  }
}
