import { Module } from '@nestjs/common';
import { JsxEngineController } from './jsx-engine.controller';
import { JsxEngineService } from './jsx-engine.service';
import {
  AutoRegisterModule,
  NavigationRegistry,
  NavigationService,
} from '@harpy-js/core';

@Module({
  controllers: [JsxEngineController],
  providers: [JsxEngineService],
})
export class JsxEngineModule extends AutoRegisterModule {
  constructor(
    navigationService: NavigationService,
    private readonly jsxEngineService: JsxEngineService,
  ) {
    super(navigationService);
  }

  protected registerNavigation(navigation: NavigationRegistry): void {
    this.jsxEngineService.registerNavigation(navigation);
  }
}
