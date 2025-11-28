import { Injectable } from '@nestjs/common';
import { NavigationService } from '../../shared/navigation.service';

@Injectable()
export class RoutingService {
  /**
   * Register routing documentation in the shared navigation
   * This is called during module initialization (OnModuleInit)
   */
  registerNavigation(navigationService: NavigationService) {
    // Add routing to the Core Concepts section
    navigationService.addItemToSection('core-concepts', {
      id: 'routing',
      title: 'Routing',
      href: '/docs/routing',
    });
  }
}
