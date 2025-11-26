import { Injectable } from '@nestjs/common';

@Injectable()
export class DocsService {
  getDocsSections() {
    return [
      {
        id: 'getting-started',
        title: 'Getting Started',
        items: [
          { id: 'introduction', title: 'Introduction', href: '#introduction' },
          { id: 'installation', title: 'Installation', href: '#installation' },
          { id: 'quick-start', title: 'Quick Start', href: '#quick-start' },
        ],
      },
      {
        id: 'core-concepts',
        title: 'Core Concepts',
        items: [
          { id: 'architecture', title: 'Architecture', href: '#architecture' },
          { id: 'ssr', title: 'Server-Side Rendering', href: '#ssr' },
          { id: 'hydration', title: 'Client Hydration', href: '#hydration' },
          { id: 'routing', title: 'Routing', href: '#routing' },
        ],
      },
      {
        id: 'features',
        title: 'Features',
        items: [
          {
            id: 'jsx-rendering',
            title: 'JSX Rendering',
            href: '#jsx-rendering',
          },
          { id: 'i18n', title: 'Internationalization', href: '#i18n' },
          { id: 'styling', title: 'Styling with Tailwind', href: '#styling' },
          { id: 'metadata', title: 'SEO & Metadata', href: '#metadata' },
        ],
      },
      {
        id: 'guides',
        title: 'Guides',
        items: [
          {
            id: 'components',
            title: 'Creating Components',
            href: '#components',
          },
          {
            id: 'client-components',
            title: 'Client Components',
            href: '#client-components',
          },
          { id: 'api-routes', title: 'API Routes', href: '#api-routes' },
          { id: 'deployment', title: 'Deployment', href: '#deployment' },
        ],
      },
    ];
  }
}
