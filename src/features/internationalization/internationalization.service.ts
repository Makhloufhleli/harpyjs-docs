import { Injectable } from '@nestjs/common';
import { NavigationService } from '../../shared/navigation.service';

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
