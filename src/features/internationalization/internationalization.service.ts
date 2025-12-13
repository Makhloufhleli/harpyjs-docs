import { Injectable } from '@nestjs/common';
import { NavigationService } from '@harpy-js/core';

@Injectable()
export class InternationalizationService {
  registerNavigation(navigationService: NavigationService) {
    if (!navigationService.getSection('features')) {
      navigationService.registerSection({
        id: 'features',
        title: 'Features',
        items: [],
        order: 1000,
      });
    }
    navigationService.addItemToSection('features', {
      id: 'i18n',
      title: 'Internationalization',
      href: '/docs/internationalization',
    });
  }
}
