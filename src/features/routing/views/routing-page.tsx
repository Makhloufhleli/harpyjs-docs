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
              DocsNavigationService
            </code>{' '}
            in a global{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">CoreModule</code>.
            This service maintains a centralized registry of all documentation
            routes.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// core/docs-navigation.service.ts
import { Injectable } from '@nestjs/common';

interface DocNavItem {
  id: string;
  title: string;
  href: string;  // Can be anchor (#section) or route (/docs/page)
}

interface DocNavSection {
  id: string;
  title: string;
  items: DocNavItem[];
}

@Injectable()
export class DocsNavigationService {
  private sections = new Map<string, DocNavSection>();

  constructor() {
    // Initialize default sections
    this.registerSection({ id: 'getting-started', title: 'Getting Started', items: [] });
    this.registerSection({ id: 'core-concepts', title: 'Core Concepts', items: [] });
    this.registerSection({ id: 'features', title: 'Features', items: [] });
    this.registerSection({ id: 'guides', title: 'Guides', items: [] });
  }

  registerSection(section: DocNavSection) {
    this.sections.set(section.id, section);
  }

  addItemToSection(sectionId: string, item: DocNavItem) {
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
            <code className="bg-slate-100 px-2 py-1 rounded">CoreModule</code>{' '}
            is marked as
            <code className="bg-slate-100 px-2 py-1 rounded">@Global()</code>,
            making the navigation service available throughout the entire
            application without explicit imports.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// core/core.module.ts
import { Global, Module } from '@nestjs/common';
import { DocsNavigationService } from './docs-navigation.service';

@Global()  // 👈 Makes this module available everywhere
@Module({
  providers: [DocsNavigationService],
  exports: [DocsNavigationService],  // 👈 Export for use in other modules
})
export class CoreModule {}`}</code>
          </pre>

          <h3 className="text-2xl font-semibold text-slate-900 mb-4 mt-8">
            Step 3: Module Self-Registration
          </h3>
          <p className="text-slate-600 mb-4">
            Each documentation module implements{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">OnModuleInit</code>{' '}
            to register its routes when the application starts. This happens
            automatically during the NestJS lifecycle.
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// features/routing/routing.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { RoutingDocsController } from './routing.controller';
import { RoutingDocsService } from './routing.service';
import { DocsNavigationService } from '../../core/docs-navigation.service';

@Module({
  controllers: [RoutingDocsController],
  providers: [RoutingDocsService],
})
export class RoutingDocsModule implements OnModuleInit {
  constructor(
    private readonly routingDocsService: RoutingDocsService,
    private readonly docsNavigationService: DocsNavigationService,
  ) {}

  // 👇 Called automatically when module initializes
  onModuleInit() {
    this.routingDocsService.registerNavigation(this.docsNavigationService);
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
import { DocsNavigationService } from '../../core/docs-navigation.service';

@Injectable()
export class RoutingDocsService {
  registerNavigation(docsNavigationService: DocsNavigationService) {
    // Add this module's route to the "core-concepts" section
    docsNavigationService.addItemToSection('core-concepts', {
      id: 'routing',
      title: 'Routing',
      href: '/docs/routing',  // 👈 Points to dedicated route, not anchor
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
import RoutingPage from './views/routing-page';
import DashboardLayout from '../../layouts/dashboard-layout';
import { DocsNavigationService } from '../../core/docs-navigation.service';

@Controller('docs')
export class RoutingDocsController {
  constructor(
    private readonly docsNavigationService: DocsNavigationService,
  ) {}

  @Get('routing')  // 👈 Defines the /docs/routing route
  @JsxRender(RoutingPage, {
    layout: DashboardLayout,  // 👈 Use dashboard layout with sidebar
    meta: async () => ({
      title: 'Routing - Harpy.js Documentation',
      description: 'Learn how routing works in Harpy.js',
    }),
  })
  async routing() {
    // Get all sections (includes all registered routes from all modules)
    const sections = this.docsNavigationService.getAllSections();
    
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
                  <strong>Scalable:</strong> Add new documentation modules
                  without touching existing code
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
              <span>Adding a New Documentation Module</span>
            </h4>
            <p className="text-blue-900 mb-4">
              To add a new documentation section (e.g., "Deployment"), simply:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-blue-900 text-sm">
              <li>
                Create a new module:{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">
                  DeploymentDocsModule
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
                  @Get('deployment')
                </code>
              </li>
              <li>
                Import the module in{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">AppModule</code>
              </li>
            </ol>
            <p className="text-blue-900 mt-4">
              <strong>That's it!</strong> Your route will automatically appear
              in the sidebar navigation on all documentation pages.
            </p>
          </div>
        </section>

        {/* How NestJS Routing Works */}
        <section id="nestjs-routing" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            How NestJS Routing Works
          </h2>
          <p className="text-slate-600 mb-6">
            NestJS uses a decorator-based approach to routing. When your
            application starts, NestJS scans all controllers and automatically
            registers the routes defined by decorators.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Basic Route Example
            </h3>
            <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
              <code>{`import { Controller, Get } from '@nestjs/common';
import { JsxRender } from './decorators/jsx.decorator';
import HomePage from './views/homepage';

@Controller()  // Root controller (/)
export class HomeController {
  @Get()  // GET /
  @JsxRender(HomePage)
  async home() {
    return { message: 'Welcome!' };
  }
}`}</code>
            </pre>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
            <p className="text-green-900">
              <strong>✅ Automatic Route Registration:</strong> This route is
              automatically available at
              <code className="bg-green-100 px-2 py-1 rounded mx-1">
                http://localhost:3000/
              </code>
              No additional configuration required!
            </p>
          </div>
        </section>

        {/* Controller-Based Routes */}
        <section id="controller-routes" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Controller-Based Routes
          </h2>
          <p className="text-slate-600 mb-4">
            Use the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              @Controller()
            </code>{' '}
            decorator to define a base path for all routes in that controller:
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>{`@Controller('docs')  // Base path: /docs
export class DocsController {
  @Get()  // GET /docs
  @JsxRender(DocsPage)
  async docs() {
    return { title: 'Documentation' };
  }

  @Get('getting-started')  // GET /docs/getting-started
  @JsxRender(GettingStartedPage)
  async gettingStarted() {
    return { title: 'Getting Started' };
  }

  @Get('api/:version')  // GET /docs/api/v1, /docs/api/v2, etc.
  @JsxRender(ApiDocsPage)
  async apiDocs(@Param('version') version: string) {
    return { version };
  }
}`}</code>
          </pre>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
              <span className="text-2xl">📍</span>
              <div>
                <strong className="text-slate-900">Route:</strong>
                <code className="bg-white px-2 py-1 rounded ml-2">/docs</code>
                <p className="text-slate-600 mt-1">Main documentation page</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
              <span className="text-2xl">📍</span>
              <div>
                <strong className="text-slate-900">Route:</strong>
                <code className="bg-white px-2 py-1 rounded ml-2">
                  /docs/getting-started
                </code>
                <p className="text-slate-600 mt-1">Getting started guide</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
              <span className="text-2xl">📍</span>
              <div>
                <strong className="text-slate-900">Route:</strong>
                <code className="bg-white px-2 py-1 rounded ml-2">
                  /docs/api/:version
                </code>
                <p className="text-slate-600 mt-1">
                  Dynamic route with parameter
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HTTP Methods */}
        <section id="http-methods" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            HTTP Methods
          </h2>
          <p className="text-slate-600 mb-4">
            NestJS supports all standard HTTP methods through decorators:
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>{`import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common';

@Controller('api/users')
export class UsersController {
  @Get()  // GET /api/users
  findAll() {
    return { users: [] };
  }

  @Get(':id')  // GET /api/users/:id
  findOne(@Param('id') id: string) {
    return { id, user: {} };
  }

  @Post()  // POST /api/users
  create(@Body() createUserDto: any) {
    return { created: true };
  }

  @Put(':id')  // PUT /api/users/:id
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return { updated: true };
  }

  @Delete(':id')  // DELETE /api/users/:id
  remove(@Param('id') id: string) {
    return { deleted: true };
  }
}`}</code>
          </pre>
        </section>

        {/* Route Parameters */}
        <section id="route-params" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Route Parameters & Query Strings
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Path Parameters
          </h3>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>{`import { Controller, Get, Param } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  @Get(':slug')
  async getPost(@Param('slug') slug: string) {
    return { slug, post: {} };
  }

  @Get('category/:category/post/:id')
  async getPostByCategory(
    @Param('category') category: string,
    @Param('id') id: string,
  ) {
    return { category, id };
  }
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Query Parameters
          </h3>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6">
            <code>{`import { Controller, Get, Query } from '@nestjs/common';

@Controller('search')
export class SearchController {
  // GET /search?q=nestjs&page=1&limit=10
  @Get()
  async search(
    @Query('q') query: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return { query, page, limit, results: [] };
  }
}`}</code>
          </pre>
        </section>

        {/* Automatic Route Discovery */}
        <section id="auto-discovery" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Automatic Route Discovery
          </h2>
          <p className="text-slate-600 mb-6">
            When NestJS application starts, it automatically:
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
              <span className="text-2xl">1️⃣</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Scans Modules</h4>
                <p className="text-slate-600">
                  Discovers all modules imported in AppModule
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
              <span className="text-2xl">2️⃣</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Finds Controllers
                </h4>
                <p className="text-slate-600">
                  Identifies all classes decorated with @Controller()
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
              <span className="text-2xl">3️⃣</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">
                  Registers Routes
                </h4>
                <p className="text-slate-600">
                  Maps all @Get(), @Post(), etc. decorated methods to routes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 border border-slate-200 rounded-lg">
              <span className="text-2xl">4️⃣</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Logs Routes</h4>
                <p className="text-slate-600">
                  Displays all registered routes in console during startup
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-900 mb-2">
              <strong>💡 Startup Logs:</strong> Check your console when the app
              starts. You'll see output like:
            </p>
            <pre className="bg-slate-900 text-green-400 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`[Nest] LOG [RoutesResolver] DocsController {/docs}:
[Nest] LOG [RouterExplorer] Mapped {/docs, GET} route
[Nest] LOG [RouterExplorer] Mapped {/docs/throttler, GET} route
[Nest] LOG [RouterExplorer] Mapped {/docs/routing, GET} route`}</code>
            </pre>
          </div>
        </section>

        {/* Modular Documentation Pattern */}
        <section id="modular-docs" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Modular Documentation Pattern
          </h2>
          <p className="text-slate-600 mb-6">
            This documentation site uses a modular architecture where each
            documentation topic is a separate NestJS module with its own route.
            This is a best practice example of how to structure documentation
            using NestJS routing.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">
              🏗️ Architecture Example
            </h3>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-center gap-3">
                <code className="bg-white px-3 py-1 rounded font-mono text-sm">
                  /docs
                </code>
                <span>→</span>
                <span>Main documentation (DocsModule)</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-white px-3 py-1 rounded font-mono text-sm">
                  /docs/throttler
                </code>
                <span>→</span>
                <span>Rate limiting docs (ThrottlerDocsModule)</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-white px-3 py-1 rounded font-mono text-sm">
                  /docs/routing
                </code>
                <span>→</span>
                <span>Routing docs (RoutingDocsModule) ← You are here!</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Creating a New Documentation Module
          </h3>
          <p className="text-slate-600 mb-4">
            Here's how to create a new documentation section with its own route:
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Step 1: Create the Module
              </h4>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>{`// deployment/deployment.module.ts
import { Module, OnModuleInit } from '@nestjs/common';
import { DeploymentDocsController } from './deployment.controller';
import { DeploymentDocsService } from './deployment.service';
import { DocsNavigationService } from '../../core/docs-navigation.service';

@Module({
  controllers: [DeploymentDocsController],
  providers: [DeploymentDocsService],
})
export class DeploymentDocsModule implements OnModuleInit {
  constructor(
    private readonly docsNavigationService: DocsNavigationService,
    private readonly deploymentDocsService: DeploymentDocsService,
  ) {}

  onModuleInit() {
    // Register navigation when module initializes
    this.deploymentDocsService.registerNavigation(
      this.docsNavigationService
    );
  }
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Step 2: Create the Service
              </h4>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>{`// deployment/deployment.service.ts
import { Injectable } from '@nestjs/common';
import { DocsNavigationService } from '../../core/docs-navigation.service';

@Injectable()
export class DeploymentDocsService {
  registerNavigation(docsNavigationService: DocsNavigationService) {
    // Add to the "Guides" section
    docsNavigationService.addItemToSection('guides', {
      id: 'deployment',
      title: 'Deployment',
      href: '/docs/deployment',  // The route
    });
  }
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Step 3: Create the Controller
              </h4>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>{`// deployment/deployment.controller.ts
import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '../../decorators/jsx.decorator';
import DeploymentPage from './views/deployment-page';
import { DocsNavigationService } from '../../core/docs-navigation.service';

@Controller('docs')
export class DeploymentDocsController {
  constructor(
    private readonly docsNavigationService: DocsNavigationService,
  ) {}

  @Get('deployment')  // Creates /docs/deployment route
  @JsxRender(DeploymentPage, {
    meta: async () => ({
      title: 'Deployment - Harpy.js Documentation',
      description: 'Learn how to deploy your Harpy.js application',
    }),
  })
  async deployment() {
    const sections = this.docsNavigationService.getAllSections();
    
    return {
      sections,  // Shared navigation for sidebar
      // ... your page data
    };
  }
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Step 4: Import in AppModule
              </h4>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto">
                <code>{`// app.module.ts
import { DeploymentDocsModule } from './features/deployment/deployment.module';

@Module({
  imports: [
    CoreModule,  // Must be first (provides DocsNavigationService)
    // ... other modules
    DeploymentDocsModule,  // Add your new module
  ],
})
export class AppModule {}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mt-6">
            <p className="text-green-900">
              <strong>✅ That's it!</strong> NestJS will automatically:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-green-800">
              <li>Discover the DeploymentDocsController</li>
              <li>
                Register the{' '}
                <code className="bg-green-100 px-2 py-1 rounded">
                  /docs/deployment
                </code>{' '}
                route
              </li>
              <li>Add "Deployment" link to the shared sidebar navigation</li>
              <li>Log the route during startup</li>
            </ul>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Routing Best Practices
          </h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>✅</span>
                <span>Use Descriptive Route Names</span>
              </h4>
              <p className="text-slate-600 mb-2">
                Choose clear, RESTful route names that describe the resource:
              </p>
              <code className="bg-slate-100 px-2 py-1 rounded text-sm">
                /api/users, /docs/getting-started, /blog/posts/:slug
              </code>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>✅</span>
                <span>Group Related Routes in Modules</span>
              </h4>
              <p className="text-slate-600 mb-2">
                Keep related routes together in feature modules for better
                organization
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>✅</span>
                <span>Use Proper HTTP Methods</span>
              </h4>
              <p className="text-slate-600 mb-2">
                Follow REST conventions: GET for reading, POST for creating,
                PUT/PATCH for updating, DELETE for removing
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>✅</span>
                <span>Version Your APIs</span>
              </h4>
              <p className="text-slate-600 mb-2">
                Include version in API routes:{' '}
                <code className="bg-slate-100 px-2 py-1 rounded">
                  /api/v1/users
                </code>
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-6">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>✅</span>
                <span>Leverage Route Parameters for Dynamic Content</span>
              </h4>
              <p className="text-slate-600 mb-2">
                Use :param syntax for dynamic segments instead of query strings
                when appropriate
              </p>
            </div>
          </div>
        </section>

        {/* Learn More */}
        <section id="learn-more" className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Learn More</h2>
          <div className="space-y-4">
            <a
              href="https://docs.nestjs.com/controllers"
              className="block border border-slate-200 rounded-lg p-6 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">📚</span>
                <span className="font-semibold text-slate-900">
                  Official NestJS Controllers Documentation
                </span>
              </div>
            </a>
            <a
              href="https://docs.nestjs.com/modules"
              className="block border border-slate-200 rounded-lg p-6 hover:border-amber-500 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🧩</span>
                <span className="font-semibold text-slate-900">
                  NestJS Modules Documentation
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between">
          <a
            href="/docs"
            className="text-amber-600 hover:text-amber-700 font-medium"
          >
            ← Back to Documentation
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
