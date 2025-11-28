import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@hepta-solutions/harpy-core';
import I18nPage from './views/i18n-page';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '../../shared/navigation.service';
import { getDictionary } from '../../i18n/get-dictionary';

@Controller('docs')
export class InternationalizationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('internationalization')
  @JsxRender(I18nPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Internationalization (i18n) - Harpy.js Documentation',
      description:
        'Learn how to implement internationalization in Harpy.js applications. Built-in i18n support with dictionary-based translations, locale management, and type-safe translation keys.',
    },
  })
  async i18n() {
    const sections = this.navigationService.getAllSections();
    const dict = await getDictionary('en');

    return {
      sections,
      dict,
      locale: 'en',
    };
  }
}
