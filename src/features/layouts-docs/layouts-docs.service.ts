import { Injectable } from '@nestjs/common';
import { NavigationRegistry } from '@harpy-js/core';

@Injectable()
export class LayoutsDocsService {
  /**
   * Register Layouts documentation in navigation
   */
  registerNavigation(navigationService: NavigationRegistry) {
    navigationService.addItemToSection('core-concepts', {
      id: 'layouts',
      title: 'Layouts and Pages',
      href: '/docs/layouts',
    });
  }
}
