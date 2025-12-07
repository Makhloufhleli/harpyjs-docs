import { Injectable } from '@nestjs/common';
import { NavigationRegistry } from '@hepta-solutions/harpy-core';

@Injectable()
export class GettingStartedService {
  registerNavigation(navigationService: NavigationRegistry) {
    // Ensure the `getting-started` section exists and is prioritized to
    // appear first in navigation (lower `order` values appear earlier).
    if (!navigationService.getSection('getting-started')) {
      navigationService.registerSection({
        id: 'getting-started',
        title: 'Getting Started',
        items: [],
        order: 0,
      });
    }

    // Add introduction to the Getting Started section
    navigationService.addItemToSection('getting-started', {
      id: 'introduction',
      title: 'Introduction',
      href: '/docs',
    });
  }
}
