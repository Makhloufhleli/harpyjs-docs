// Centralized code snippets used by the routing docs view.
// Keeping these as string constants avoids inlining large template
// literals inside JSX and prevents accidental template termination.

export const EAGLES_MODULE = `// features/eagles/eagles.module.ts
import { Module } from '@nestjs/common';
import { EaglesController } from './eagles.controller';
import { EaglesService } from './eagles.service';
import {
  NavigationService,
  NavigationRegistry,
  AutoRegisterModule,
} from '@harpy-js/core';

@Module({
  controllers: [EaglesController],
  providers: [EaglesService],
})
export class EaglesModule extends AutoRegisterModule {
  constructor(
    navigationService: NavigationService,
    private readonly eaglesService: EaglesService,
  ) {
    super(navigationService);
  }

  protected registerNavigation(navigation: NavigationRegistry): void {
    // Delegate to the feature service; AutoRegisterModule will call this
    this.eaglesService.registerNavigation(navigation);
  }
}`;

export const EAGLES_SERVICE = `// features/eagles/eagles.service.ts
import { Injectable } from '@nestjs/common';
import { NavigationRegistry } from '@harpy-js/core';

@Injectable()
export class EaglesService {
  /**
   * Register feature documentation in the shared navigation
   * This is called during module initialization (OnModuleInit)
   */
  registerNavigation(navigationService: NavigationRegistry) {
    // Add this feature to the Core Concepts section
    navigationService.addItemToSection('core-concepts', {
      id: 'eagles',
      title: 'Eagles (Feature Example)',
      href: '/docs/eagles',
    });
  }
}`;

export const EAGLES_CONTROLLER = `// features/eagles/eagles.controller.ts
import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@harpy-js/core';
import EaglesPage from './views/eagles-page';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';

@Controller('docs')
export class EaglesController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('eagles')
  @JsxRender(EaglesPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Eagles Guide - Harpy.js Framework (EXAMPLE)',
      description:
        'Example documentation controller for the Eagles feature. Demonstrates how to render a JSX page and provide navigation sections.',
    },
  })
  async eagles() {
    const sections = this.navigationService.getAllSections();
    const dict = await getDictionary('en');

    return {
      sections,
      dict,
      locale: 'en',
    };
  }
}`;

export const EAGLES_VIEW = `// features/eagles/views/eagles-page.tsx
import { Link } from '@harpy-js/core';

export default function EaglesPage({ sections }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      <aside className="col-span-1">
        {sections.map(s => (
          <div key={s.id} className="mb-4">
            <h4 className="font-semibold">{s.title}</h4>
            <ul className="mt-2 space-y-1">
              {s.items.map(i => (
                <li key={i.id}>
                  <Link href={i.href} className="text-amber-600">{i.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      <main className="col-span-3">{/* Feature content */}</main>
    </div>
  );
}`;

export const ROUTING_CONTROLLER = `// features/routing/routing.controller.ts
import { Controller, Get, Req } from '@nestjs/common';
import { JsxRender } from '@harpy-js/core';
import RoutingPage from './views/routing-page';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '@harpy-js/core';
import { getDictionary } from '../../i18n/get-dictionary';

@Controller('docs')
export class RoutingController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get('routing')
  @JsxRender(RoutingPage, { layout: DashboardLayout })
  async routing(@Req() req: any) {
    const currentPath = req.url || '/docs/routing';

    // Returns sections where items have '.active === true' for the
    // item that matches 'currentPath'.
    const sections = this.navigationService.getSectionsForRoute(currentPath);
    const activeItemId = this.navigationService.getActiveItemId(currentPath);

    const dict = await getDictionary('en');
    return { sections, dict, locale: 'en', activeItemId };
  }
}`;

export const DASHBOARD_LAYOUT = `// layouts/dashboard-layout.tsx (excerpt)
import { Link } from '@harpy-js/core';

export default function DashboardLayout({ sections }) {
  return (
    <aside>
      {sections.map(section => (
        <div key={section.id}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map(item => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={item.active ? 'text-amber-600 font-semibold' : 'text-slate-600'}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}`;

export const MOBILE_MENU = `// layouts/components/MobileMenu.tsx (excerpt)
'use client';
import { useEffect, useState } from 'react';
import { Link } from '@harpy-js/core';

export default function MobileMenu({ sections }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onLocationChange() {
      setOpen(false);
    }
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  return (
    <nav>
      {sections.map(section => (
        <div key={section.id}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map(item => (
              <li key={item.id}>
                <Link href={item.href} onClick={() => setOpen(false)} className={item.active ? 'text-amber-600' : 'text-slate-600'}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}`;

export const CORE_NAV_MODULE = `// apps/.../features/core-navigation/core-navigation.module.ts
import { Module, Injectable, OnModuleInit } from '@nestjs/common';
import { NavigationService } from '@harpy-js/core';

@Injectable()
class CoreNavigationRegistrar implements OnModuleInit {
  constructor(private readonly navigationService: NavigationService) {}

  onModuleInit() {
    this.navigationService.registerSection({
      id: 'core-concepts',
      title: 'Core Concepts',
      items: [],
    });
  }
}

@Module({ providers: [CoreNavigationRegistrar] })
export class CoreNavigationModule {}`;

export const NAV_TYPES = `// packages/harpy-core/src/core/types/nav.types.ts
export interface NavSection {
  id: string;
  title: string;
  items: NavItem[];
  order?: number; // lower numbers appear earlier
}`;

export const REGISTER_WITH_ORDER = `// registering with an explicit order
navigationService.registerSection({
  id: 'core-concepts',
  title: 'Core Concepts',
  items: [],
  order: 0, // appears before sections with higher order or no order
});`;

export const REGISTER_ITEMS_PRIORITY = `// Registering items with explicit priority within a section
navigationService.addItemToSection('core-concepts', {
  id: 'routing',
  title: 'Routing',
  href: '/docs/routing',
  order: 10, // lower values appear earlier in the section
});

// Another item without order will appear after ordered items when
// those ordered items have lower numeric priorities.
navigationService.addItemToSection('core-concepts', {
  id: 'i18n',
  title: 'Internationalization',
  href: '/docs/internationalization',
});`;

export const NAV_SERVICE_MOVE = `// packages/harpy-core/src/core/navigation.service.ts
// move an existing section to the front
navigationService.moveSectionToFront('core-concepts');`;
