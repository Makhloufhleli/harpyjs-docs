import { Injectable } from '@nestjs/common';
import { NavigationRegistry } from '@harpy-js/core';

@Injectable()
export class SeoDocsService {
  /**
   * Register SEO documentation in the shared navigation
   */
  registerNavigation(navigationService: NavigationRegistry) {
    // Ensure the `core-concepts` section exists
    if (!navigationService.getSection('core-concepts')) {
      navigationService.registerSection({
        id: 'core-concepts',
        title: 'Core Concepts',
        items: [],
        order: 1,
      });
    }

    // Add SEO & Discoverability to the Core Concepts section
    navigationService.addItemToSection('core-concepts', {
      id: 'seo',
      title: 'SEO & Discoverability',
      href: '/docs/seo',
    });
  }
}
