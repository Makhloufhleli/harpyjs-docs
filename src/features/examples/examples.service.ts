import { Injectable } from '@nestjs/common';
import { NavigationRegistry } from '@harpy-js/core';

@Injectable()
export class ExamplesService {
  /**
   * Register Examples section in the shared navigation
   */
  registerNavigation(navigationService: NavigationRegistry) {
    // Create Examples section at the bottom (high order number)
    navigationService.registerSection({
      id: 'examples',
      title: 'Examples',
      items: [],
      order: 1000, // Very high number to appear at bottom
    });

    // Add Examples item
    navigationService.addItemToSection('examples', {
      id: 'examples',
      title: 'Live Examples',
      href: '/docs/examples',
    });
  }
}
