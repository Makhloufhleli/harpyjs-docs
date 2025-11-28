import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@hepta-solutions/harpy-core';
import RoutingPage from './views/routing-page';
import { NavigationService } from '../../shared/navigation.service';
import { getDictionary } from '../../i18n/get-dictionary';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class RoutingDocsController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('routing')
  @JsxRender(RoutingPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Routing - Harpy.js Documentation',
      description:
        'Learn how to implement routing in Harpy.js using NestJS controllers and decorators. Understand how NestJS routing automatically maps to your application routes.',
    },
  })
  async routing() {
    const sections = this.navigationService.getAllSections();
    const dict = await getDictionary('en');

    return {
      sections,
      dict,
      locale: 'en',
    };
  }
}
