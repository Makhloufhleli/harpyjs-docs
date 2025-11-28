import { Injectable } from '@nestjs/common';
import { NavigationService } from '../../shared/navigation.service';

@Injectable()
export class ThrottlerService {
  /**
   * Register throttler documentation in the shared navigation
   */
  registerNavigation(navigationService: NavigationService): void {
    // Add Rate Limiting to the Features section
    navigationService.addItemToSection('features', {
      id: 'rate-limiting',
      title: 'Rate Limiting',
      href: '/docs/throttler',
    });
  }
}
