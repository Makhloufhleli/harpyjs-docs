import { Injectable } from '@nestjs/common';
import { NavItem, NavSection } from '../layouts/types/nav.types';

/**
 * Shared service for documentation navigation
 * Allows multiple documentation modules to contribute their routes
 */
@Injectable()
export class NavigationService {
  private sections: Map<string, NavSection> = new Map();

  constructor() {
    // Initialize with default sections
    this.initializeDefaultSections();
  }

  private initializeDefaultSections() {
    this.registerSection({
      id: 'getting-started',
      title: 'Getting Started',
      items: [],
    });

    this.registerSection({
      id: 'core-concepts',
      title: 'Core Concepts',
      items: [],
      // [
      //   {
      //     id: 'architecture',
      //     title: 'Architecture',
      //     href: '/docs#architecture',
      //   },
      //   { id: 'ssr', title: 'Server-Side Rendering', href: '/docs#ssr' },
      // ],
    });

    this.registerSection({
      id: 'features',
      title: 'Features',
      items: [],
      // [
      //   {
      //     id: 'jsx-rendering',
      //     title: 'JSX Rendering',
      //     href: '/docs#jsx-rendering',
      //   },
      //   {
      //     id: 'styling',
      //     title: 'Styling with Tailwind',
      //     href: '/docs#styling',
      //   },
      //   { id: 'metadata', title: 'SEO & Metadata', href: '/docs#metadata' },
      // ],
    });

    // this.registerSection({
    //   id: 'guides',
    //   title: 'Guides',
    //   items: [],
    // [
    //   {
    //     id: 'components',
    //     title: 'Creating Components',
    //     href: '/docs#components',
    //   },
    //   {
    //     id: 'client-components',
    //     title: 'Client Components',
    //     href: '/docs#client-components',
    //   },
    //   { id: 'api-routes', title: 'API Routes', href: '/docs#api-routes' },
    //   { id: 'deployment', title: 'Deployment', href: '/docs#deployment' },
    // ],
    // });
  }

  /**
   * Register a new documentation section
   */
  registerSection(section: NavSection): void {
    this.sections.set(section.id, section);
  }

  /**
   * Add an item to an existing section
   */
  addItemToSection(sectionId: string, item: NavItem): void {
    const section = this.sections.get(sectionId);
    if (section) {
      section.items.push(item);
    }
  }

  /**
   * Get all documentation sections
   */
  getAllSections(): NavSection[] {
    return Array.from(this.sections.values());
  }

  /**
   * Get a specific section by ID
   */
  getSection(sectionId: string): NavSection | undefined {
    return this.sections.get(sectionId);
  }
}
