import { Injectable } from '@nestjs/common';
import { NavigationService } from '../../shared/navigation.service';

@Injectable()
export class GettingStartedService {
  registerNavigation(navigationService: NavigationService) {
    // Add routing to the Getting Started section
    navigationService.addItemToSection('getting-started', {
      id: 'introduction',
      title: 'Introduction',
      href: '/docs',
    });
  }
}
