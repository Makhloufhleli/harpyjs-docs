import { Injectable } from '@nestjs/common';
import { NavigationService } from '../../shared/navigation.service';

@Injectable()
export class InstallationService {
  registerNavigation(navigationService: NavigationService) {
    // Add routing to the Getting Started section
    navigationService.addItemToSection('getting-started', {
      id: 'installation',
      title: 'Installation',
      href: '/docs/installation',
    });
  }
}
