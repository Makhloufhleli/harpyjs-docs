import { Injectable } from '@nestjs/common';
import { NavigationRegistry } from '@harpy-js/core';

@Injectable()
export class RoutingService {
  /**
   * Register routing documentation in the shared navigation
   * This is called during module initialization (OnModuleInit)
   */
  registerNavigation(navigationService: NavigationRegistry) {
    // Ensure the `core-concepts` section exists. We'll give it an explicit
    // order of `1` so it appears after the Getting Started section (which
    // we register with `order: 0` below).
    if (!navigationService.getSection('core-concepts')) {
      navigationService.registerSection({
        id: 'core-concepts',
        title: 'Core Concepts',
        items: [],
        order: 1,
      });
    }

    // Add routing to the Core Concepts section
    navigationService.addItemToSection('core-concepts', {
      id: 'routing',
      title: 'Routing',
      href: '/docs/routing',
    });
  }
}
