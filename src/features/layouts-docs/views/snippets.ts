export const snippets = {
  DEFAULT_LAYOUT: `// src/layouts/layout.tsx
import { Link, type JsxLayoutProps } from '@harpy-js/core';

export default function DefaultLayout({
  children,
  meta,
  lang,
}: JsxLayoutProps & { lang: string }) {
  return (
    <html lang={lang || 'en'}>
      <head>
        <title>{meta?.title ?? 'My App'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 My App</p>
        </footer>
      </body>
    </html>
  );
}`,

  DASHBOARD_LAYOUT: `// src/layouts/dashboard-layout.tsx
import { JsxLayoutProps } from '@harpy-js/core';
import Sidebar from './components/Sidebar';

export default function DashboardLayout({
  children,
  meta,
  hydrationScripts,
  sections = [],
}: JsxLayoutProps & {
  hydrationScripts?: Array<{ componentName: string; path: string }>;
  sections?: NavSection[];
}) {
  return (
    <html lang="en">
      <head>
        <title>{meta?.title ?? 'Dashboard'}</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body>
        <div className="flex h-screen">
          {/* Sidebar navigation */}
          <Sidebar sections={sections} />
          
          {/* Main content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
        
        {/* Hydration scripts */}
        {hydrationScripts?.map((script) => (
          <script
            key={script.componentName}
            type="module"
            src={script.path}
            defer
          />
        ))}
      </body>
    </html>
  );
}`,

  MAIN_TS: `// src/main.ts
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { setupHarpyApp } from '@harpy-js/core';
import DefaultLayout from './layouts/layout';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(),
  );

  // Set the default layout for the entire application
  await setupHarpyApp(app, {
    layout: DefaultLayout,  // This is the default layout
    distDir: 'dist',
    publicDir: 'public',
  });

  await app.listen({
    port: 3000,
    host: '0.0.0.0',
  });
}

bootstrap();`,

  CONTROLLER_DEFAULT: `// src/features/home/home.controller.ts
import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@harpy-js/core';
import HomePage from './views/home-page';

@Controller()
export class HomeController {
  @Get()
  @JsxRender(HomePage, {
    // No layout specified - uses DefaultLayout from main.ts
    meta: {
      title: 'Welcome to My App',
      description: 'Home page description',
    },
  })
  async index() {
    return {
      message: 'Welcome to the home page!',
    };
  }
}`,

  CONTROLLER_DASHBOARD: `// src/features/dashboard/dashboard.controller.ts
import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@harpy-js/core';
import DashboardPage from './views/dashboard-page';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('dashboard')
export class DashboardController {
  @Get()
  @JsxRender(DashboardPage, {
    layout: DashboardLayout,  // Override with DashboardLayout
    meta: {
      title: 'Dashboard',
      description: 'Application dashboard',
    },
  })
  async index() {
    return {
      stats: { users: 1250, revenue: 45600 },
    };
  }
}`,

  CONTROLLER_DOCS: `// src/features/docs/docs.controller.ts
import { Controller, Get, Req } from '@nestjs/common';
import type { FastifyRequest } from 'fastify';
import { JsxRender, NavigationService } from '@harpy-js/core';
import DocsPage from './views/docs-page';
import DashboardLayout from '../../layouts/dashboard-layout';

@Controller('docs')
export class DocsController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get()
  @JsxRender(DocsPage, {
    layout: DashboardLayout,
    meta: {
      title: 'Documentation',
    },
  })
  async docs(@Req() req: FastifyRequest) {
    const currentPath = req.url ?? '/';
    const sections = this.navigationService.getSectionsForRoute(currentPath);

    return {
      sections,  // Pass navigation sections to the layout
    };
  }
}`,

  AUTH_LAYOUT: `// src/layouts/auth-layout.tsx
import { JsxLayoutProps } from '@harpy-js/core';

export default function AuthLayout({
  children,
  meta,
}: JsxLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{meta?.title ?? 'Sign In'}</title>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="/styles/styles.css" />
      </head>
      <body className="bg-gray-100">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}`,

  PROJECT_STRUCTURE: `src/
├── layouts/
│   ├── layout.tsx              # Default layout (landing pages)
│   ├── dashboard-layout.tsx    # Dashboard layout (docs, admin)
│   ├── auth-layout.tsx         # Authentication layout (login, register)
│   └── components/
│       ├── Sidebar.tsx
│       └── MobileMenu.tsx
├── features/
│   ├── home/
│   │   └── home.controller.ts  # Uses DefaultLayout
│   ├── docs/
│   │   └── docs.controller.ts  # Uses DashboardLayout
│   └── auth/
│       └── auth.controller.ts  # Uses AuthLayout
└── main.ts                     # Configures default layout`,
};
