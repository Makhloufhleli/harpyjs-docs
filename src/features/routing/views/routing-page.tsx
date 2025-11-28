import { ExternalLink } from 'lucide-react';
import { Dictionary } from '../../../i18n/get-dictionary';

export interface PageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
}

export default function RoutingPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-8 lg:p-12">
        {/* Introduction */}
        <section id="routing-intro" className="mb-16">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Routing
            </h1>
            <span className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500 rounded-lg text-blue-600 text-xs md:text-sm font-bold">
              CORE
            </span>
          </div>
          <p className="text-xl text-slate-600 mb-6">
            Harpy.js uses NestJS routing system, which automatically maps
            controller methods to routes. No separate routing configuration
            needed!
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-4">
            <p className="text-blue-900">
              <strong>🎯 Key Concept:</strong> In Harpy.js, routes are defined
              using NestJS decorators on controller methods. The framework
              automatically discovers and registers all routes at startup.
            </p>
          </div>
        </section>

        {/* Dynamic Navigation Architecture */}
        <section id="dynamic-navigation" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Dynamic Navigation Architecture
          </h2>
          <p className="text-xl text-slate-600 mb-6">
            This documentation site uses a powerful pattern for managing routes
            dynamically across multiple modules. Each documentation module
            automatically registers its own routes in a shared navigation
            system.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-lg mb-6">
            <p className="text-purple-900 mb-3">
              <strong>🎨 Architecture Pattern:</strong> Instead of maintaining a
              monolithic routing configuration, we use a{' '}
              <strong>Registry Pattern</strong> where each module registers its
              routes during initialization.
            </p>
            <p className="text-purple-900">
              This approach eliminates code duplication and makes it easy to add
              new documentation sections without modifying existing code.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">
            Step 1: Global Navigation Service
          </h3>
          <p className="text-slate-600 mb-4">
            We created a{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              NavigationService
            </code>{' '}
            in a global{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">SharedModule</code>
            . This service maintains a centralized registry of all routes.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// shared/navigation.service.ts
import { Injectable } from '@nestjs/common';

interface NavItem {
  id: string;
  title: string;
  href: string;  // Can be anchor (#section) or route (/docs/page)
}

interface NavSection {
  id: string;
  title: string;
  items: NavItem[];
}

@Injectable()
export class NavigationService {
  private sections = new Map<string, NavSection>();

  constructor() {
    // Initialize default sections
   this.initializeDefaultSections();
  }

  private initializeDefaultSections() {
    this.registerSection({
      id: 'dashboard',
      title: 'Dashboard',
      items: [], // dynamically registered by features
    });
    // Register other default sections...
  }

  registerSection(section: NavSection) {
    this.sections.set(section.id, section);
  }

  addItemToSection(sectionId: string, item: NavItem) {
    const section = this.sections.get(sectionId);
    if (section) {
      section.items.push(item);
    }
  }

  getAllSections(): DocNavSection[] {
    return Array.from(this.sections.values());
  }
}`}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">
            Step 2: Global Module Export
          </h3>
          <p className="text-slate-600 mb-4">
            The{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">SharedModule</code>{' '}
            is marked as
            <code className="bg-slate-100 px-2 py-1 rounded">@Global()</code>,
            making the navigation service available throughout the entire
            application without explicit imports.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// shared/shared.module.ts
import { Global, Module } from '@nestjs/common';
import { NavigationService } from './docs-navigation.service';

@Global()  // 👈 Makes this module available everywhere
@Module({
  providers: [NavigationService],
  exports: [NavigationService],  // 👈 Export for use in other modules
})
export class SharedModule {}`}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">
            Step 3: Module Self-Registration
          </h3>
          <p className="text-slate-600 mb-4">
            Each module (feature) implements{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">OnModuleInit</code>{' '}
            to register its routes when the application starts. This happens
            automatically during the NestJS lifecycle.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// features/users/users.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { UsersController } from './uesrs.controller';
import { USersService } from './users.service';
import { NavigationService } from '../../shared/navigation.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements OnModuleInit {
  constructor(
    private readonly usersService: UsersService,
    private readonly navigationService: NavigationService,
  ) {}

  // 👇 Called automatically when module initializes
  onModuleInit() {
    this.usersService.registerNavigation(this.navigationService);
  }
}`}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">
            Step 4: Service Registration Logic
          </h3>
          <p className="text-slate-600 mb-4">
            Each module's service contains the logic to register its specific
            route in the appropriate section of the navigation.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// features/routing/routing.service.ts
import { Injectable } from '@nestjs/common';
import { NavigationService } from '../../shared/navigation.service';

@Injectable()
export class UsersService {
  registerNavigation(navigationService: NavigationService) {
    // Add this module's route to the "users" section
    navigationService.addItemToSection('users', {
      id: 'users',
      title: 'Users',
      href: '/users',  // 👈 Points to dedicated route
    });
  }
}`}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">
            Step 5: Controller Implementation
          </h3>
          <p className="text-slate-600 mb-4">
            Each controller defines its route and passes the complete navigation
            structure to the layout for rendering the sidebar.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// features/routing/routing.controller.ts
import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@hepta-solutions/harpy-core';
import UsersPage from './views/users-page';
import DashboardLayout from '../../layouts/dashboard-layout';
import { NavigationService } from '../../shared/navigation.service';

@Controller('users')  // 👈 Base path for this controller
export class UsersController {
  constructor(
    private readonly navigationService: NavigationService,
  ) {}

  @Get()  // 👈 Defines the /users route
  @JsxRender(UsersPage, {
    layout: DashboardLayout,  // 👈 Use dashboard layout with sidebar
    meta: async () => ({
      title: 'Users',
      description: 'Learn how routing works in Harpy.js',
    }),
  })
  async routing() {
    // Get all sections (includes all registered routes from all modules)
    const sections = this.navigationService.getAllSections();
    
    return {
      sections,  // 👈 Pass to layout for sidebar rendering
      dict: await getDictionary('en'),
      locale: 'en',
    };
  }
}`}</code>
          </pre>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6 mt-8">
            <h4 className="font-bold text-green-900 mb-3 text-lg">
              ✅ Benefits of This Architecture
            </h4>
            <ul className="space-y-2 text-green-900">
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>No Code Duplication:</strong> Navigation structure is
                  defined once and shared
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Scalable:</strong> Add new modules without touching
                  existing code
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Automatic Discovery:</strong> Routes are registered
                  during NestJS module initialization
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Type-Safe:</strong> TypeScript interfaces ensure
                  consistency
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">•</span>
                <span>
                  <strong>Modular:</strong> Each feature owns its routing
                  configuration
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <span>💡</span>
              <span>Adding a New Module</span>
            </h4>
            <p className="text-blue-900 mb-4">
              To add a new section (e.g., "Products"), simply:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-blue-900 text-sm">
              <li>
                Create a new module:{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  ProductsModule
                </code>
              </li>
              <li>
                Implement{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  OnModuleInit
                </code>
              </li>
              <li>
                Register your route in{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  registerNavigation()
                </code>
              </li>
              <li>
                Create your controller with{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  @Get('products')
                </code>
              </li>
              <li>
                Import the module in{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">AppModule</code>
              </li>
            </ol>
            <p className="text-blue-900 mt-4">
              <strong>That's it!</strong> Your route will automatically appear
              in the sidebar navigation on all pages.
            </p>
          </div>
        </section>

        {/* How NestJS Routing Works */}
        <section id="nestjs-routing" className="mb-16">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
            <p className="text-green-900">
              <strong>✅ For more details:</strong> Check out the official
              NestJS routing documentation{' '}
              <a
                href="https://docs.nestjs.com/controllers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 underline font-medium"
              >
                here <ExternalLink className="inline-block size-4 ml-1" />
              </a>
              .
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between">
          <a
            href="/docs"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Introduction
          </a>
          <a
            href="/docs/throttler"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            Rate Limiting →
          </a>
        </div>
      </div>
    </div>
  );
}
