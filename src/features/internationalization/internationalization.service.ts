import { Injectable } from '@nestjs/common';
import { NavigationService } from '@hepta-solutions/harpy-core';

@Injectable()
export class InternationalizationService {
  registerNavigation(navigationService: NavigationService) {
    navigationService.addItemToSection('features', {
      id: 'i18n',
      title: 'Internationalization',
      href: '/docs/internationalization',
    });
  }
}
