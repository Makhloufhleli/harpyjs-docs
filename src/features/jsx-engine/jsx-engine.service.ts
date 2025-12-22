import { Injectable } from '@nestjs/common';
import { NavigationRegistry } from '@harpy-js/core';

@Injectable()
export class JsxEngineService {
  registerNavigation(navigationService: NavigationRegistry) {
    // Add JSX Engine & Hydration documentation to Core Concepts section
    navigationService.addItemToSection('core-concepts', {
      id: 'jsx-engine',
      title: 'JsxEngine & Hydration',
      href: '/docs/jsx-engine',
      order: 20, // Position it as second item in core-concepts (routing is 10)
      badge: 'NEW', // Highlight as newly added
    });
  }
}
