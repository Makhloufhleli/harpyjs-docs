// Server-side JSX Rendering Example
export const JSX_RENDER_EXAMPLE = `import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@harpy-js/core';
import HomePage from './views/home-page';

@Controller()
export class HomeController {
  @Get()
  @JsxRender(HomePage)
  async home() {
    return {
      title: 'Welcome to Harpy.js',
      items: ['Fast', 'Flexible', 'Modern']
    };
  }
}`;

// Client Component Example
export const CLIENT_COMPONENT_EXAMPLE = `'use client';

import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`;

// Server Component Example
export const SERVER_COMPONENT_EXAMPLE = `import React from 'react';
import type { PageProps } from '@harpy-js/core';

interface HomePageProps extends PageProps {
  title: string;
  items: string[];
}

export default function HomePage({ title, items }: HomePageProps) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}`;

// JSX Engine Architecture
export const JSX_ENGINE_ARCHITECTURE = `// Core JSX Engine Flow
Request → Fastify → NestJS Controller → @JsxRender Decorator
  ↓
JSX Engine receives:
  - Component to render
  - Props from controller
  - Layout (optional)
  ↓
Server-side rendering with React:
  - renderToString() for HTML
  - Detects client components ('use client')
  - Generates hydration metadata
  ↓
HTML Response includes:
  - Rendered HTML
  - Hydration scripts
  - Component chunks
  - Props for hydration`;

// Hydration Mechanism
export const HYDRATION_MECHANISM = `// Automatic Hydration Process

1. Build Time:
   - Scan all components for 'use client' directive
   - Create separate bundles for each client component
   - Generate hydration entry points
   - Build vendor chunk (shared dependencies)

2. Server Render:
   - Render component tree to HTML string
   - Track which client components were used
   - Inject hydration metadata into HTML
   - Add <script> tags for required chunks

3. Client Hydration:
   - Browser loads HTML (instant First Contentful Paint)
   - Hydration scripts execute
   - React.hydrateRoot() attaches event listeners
   - Client components become interactive`;

// Optimistic Chunking Strategy
export const CHUNKING_STRATEGY = `// Optimistic Chunking Strategy

dist/
  chunks/
    vendor.js          # Shared: React, ReactDOM, utilities
    Counter.js         # Individual client component
    Modal.js           # Individual client component  
    Form.js            # Individual client component

Benefits:
✓ Parallel loading of component chunks
✓ Aggressive browser caching per component
✓ Only load what's actually rendered on page
✓ Automatic code splitting without manual configuration
✓ Minimal bundle size per page

Example Page Load:
  vendor.js (188kb) - cached across all pages
  Counter.js (2.3kb) - only if Counter is on page
  Modal.js (4.1kb) - only if Modal is on page
  
Total: ~194kb for a page with Counter + Modal
Compare: Traditional SPA might load 500kb+ upfront`;

// Fastify Integration
export const FASTIFY_INTEGRATION = `import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { setupHarpyApp } from '@harpy-js/core';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import DefaultLayout from './layouts/layout';
import Custom404Page from './error-pages/404';
import Custom500Page from './error-pages/500';

async function bootstrap() {
  // Create NestJS app with Fastify adapter
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // setupHarpyApp configures everything:
  // - JSX rendering engine integration
  // - Static file serving for chunks
  // - Cookie handling
  // - Error page rendering
  // - Content-Type headers
  await setupHarpyApp(app, {
    layout: DefaultLayout,        // Default layout wrapper
    distDir: 'dist',              // Build output directory
    publicDir: 'public',          // Static assets directory
    errorPages: {
      404: Custom404Page,         // Custom 404 page component
      '500': Custom500Page,       // Custom 500 error page component
    },
  });

  await app.listen({
    port: 3000,
    host: '0.0.0.0',
  });

  console.log(\`Application is running on: \${await app.getUrl()}\`);
}

bootstrap();`;

// Build Process
export const BUILD_PROCESS = `# Harpy Build Process

\`\`\`bash
harpy build
\`\`\`

Steps:
1. TypeScript Compilation
   - Compile server-side code
   - Preserve JSX for components
   
2. Client Component Detection
   - Scan for 'use client' directives
   - Build dependency graph
   - Extract component boundaries

3. Hydration Build
   - Create hydration entry for each component
   - Bundle with esbuild (fast!)
   - Generate shared vendor chunk
   - Output to dist/chunks/

4. Style Compilation
   - Process Tailwind CSS
   - Minify with cssnano
   - Output to dist/assets/

5. Asset Copying
   - Copy public files
   - Generate manifest.json

Result: Production-ready optimized build`;

// Hybrid Component Example
export const HYBRID_COMPONENT = `// Page.tsx - Server Component
import React from 'react';
import Counter from '../components/Counter'; // Client Component
import type { PageProps } from '@harpy-js/core';

interface HomeProps extends PageProps {
  initialCount: number;
  serverData: string;
}

// This renders on the server
export default function HomePage({ initialCount, serverData }: HomeProps) {
  return (
    <div>
      {/* Static content - rendered once on server */}
      <h1>Welcome</h1>
      <p>Server data: {serverData}</p>
      
      {/* Client component - hydrates on client */}
      <Counter initialCount={initialCount} />
      
      {/* More static content */}
      <footer>© 2025</footer>
    </div>
  );
}`;

// Performance Metrics
export const PERFORMANCE_METRICS = `// Typical Harpy.js Performance Metrics

Server-Side Render Time:
  Simple page: 1-3ms
  Complex page: 5-10ms
  With database query: 10-50ms (query dependent)

Time to First Byte (TTFB):
  < 50ms (including SSR)

First Contentful Paint (FCP):
  < 200ms (HTML arrives fast)

Time to Interactive (TTI):
  < 500ms (after hydration)

Bundle Sizes:
  vendor.js: ~188kb (shared, cached)
  Average component: 2-6kb
  Page-specific JS: 10-30kb total

Why so fast?
✓ Optimized React SSR
✓ Minimal JavaScript sent to client
✓ Parallel chunk loading
✓ Aggressive caching strategy
✓ Fastify's low overhead`;
