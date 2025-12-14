import { Injectable } from '@nestjs/common';
import { NavigationRegistry } from '@harpy-js/core';

@Injectable()
export class ErrorPagesDocsService {
  registerNavigation(navigationService: NavigationRegistry) {
    // Add error pages documentation to the docs section
    navigationService.addItemToSection('features', {
      id: 'error-pages',
      title: 'Error Pages',
      href: '/docs/error-pages',
    });
  }

  // This method can be async if you need to fetch from database
  // Example: async getErrorPageMetaData(pageId?: string) {
  //   const pageData = await this.database.findPage(pageId);
  //   return { title: pageData.title, ... };
  // }
  getErrorPageMetaData() {
    return {
      title: 'Error Pages Customization - Harpy.js Documentation',
      description:
        'Learn how to create and customize error pages in Harpy.js with full support for JSX components, Tailwind CSS styling, and proper error handling for 404, 500, 401, and 403 status codes.',
      keywords:
        'Harpy.js error pages, custom 404 page, custom 500 page, error handling, NestJS error pages, React error pages, Tailwind CSS error pages, JSX error handling',
      canonical: 'https://harpyjs.com/docs/error-pages',
      openGraph: {
        title: 'Error Pages Customization - Harpy.js Documentation',
        description:
          'Complete guide to creating custom error pages in Harpy.js with JSX components, Tailwind CSS, and proper error layouts for 404, 500, 401, and 403 errors.',
        type: 'website',
        url: 'https://harpyjs.com/docs/error-pages',
        image: 'https://harpyjs.com/og-image.png',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Error Pages Customization - Harpy.js',
        description:
          'Learn to build beautiful custom error pages with Harpy.js using JSX and Tailwind CSS for better user experience.',
        image: 'https://harpyjs.com/twitter-card.png',
      },
    };
  }
}
