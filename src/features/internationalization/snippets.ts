// Centralized code snippets used by the i18n docs view.
// Keeping these as string constants avoids inlining large template
// literals inside JSX and prevents accidental template termination.

export const INSTALL_NPM = `npm install @harpy-js/i18n`;

export const INSTALL_YARN = `yarn add @harpy-js/i18n`;
export const INSTALL_PNPM = `pnpm add @harpy-js/i18n`;

export const I18N_CONFIG = `// src/i18n/i18n.config.ts
import { I18nModuleOptions } from '@harpy-js/i18n';

export const i18nConfig: I18nModuleOptions = {
  defaultLocale: 'en',           // Default language
  locales: ['en', 'fr'],          // Supported locales
  urlPattern: 'header',           // 'query' or 'header' (header for cleaner URLs)
  translationsPath: '../dictionaries',
  cookieName: 'locale',           // Cookie to persist user language choice
  queryParam: 'lang',             // Query parameter (if using 'query' pattern)
};`;

export const GET_DICTIONARY = `// src/i18n/get-dictionary.ts
// Enumerate all dictionaries for type support
const dictionaries = {
  en: () =>
    import('../dictionaries/en.json', { with: { type: 'json' } }).then(
      (module) => module.default,
    ),
  fr: () =>
    import('../dictionaries/fr.json', { with: { type: 'json' } }).then(
      (module) => module.default,
    ),
};

// Automatically infer Dictionary type from English
export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;

// In-memory cache for performance
const dictionaryCache = new Map<string, Dictionary>();

// Load with caching (dictionary loaded once, reused)
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (dictionaryCache.has(locale)) {
    return dictionaryCache.get(locale)!;
  }

  const dict = await (dictionaries[locale as keyof typeof dictionaries]?.() ?? 
                      dictionaries.en());
  
  dictionaryCache.set(locale, dict);
  return dict;
};`;

export const APP_MODULE_I18N = `// src/app.module.ts
import { Module } from '@nestjs/common';
import { I18nModule } from '@harpy-js/i18n';
import { i18nConfig } from './i18n/i18n.config';
import { HomeModule } from './features/home/home.module';

@Module({
  imports: [
    I18nModule.forRoot(i18nConfig),
    HomeModule,
  ],
})
export class AppModule {}`;

export const I18N_CONTROLLER = `// src/features/home/home.controller.ts
import { Controller, Get } from '@nestjs/common';
import { JsxRender, type PageProps } from '@harpy-js/core';
import { CurrentLocale } from '@harpy-js/i18n';
import HomePage from './views/homepage';
import { getDictionary } from '../../i18n/get-dictionary';

@Controller()
export class HomeController {
  @Get()
  @JsxRender(HomePage, {
    meta: {
      title: 'Home Page',
      description: 'Welcome to our multilingual app',
      keywords: 'home, welcome, i18n, multilingual',
    },
  })
  async home(@CurrentLocale() locale: string): Promise<PageProps> {
    // Locale is automatically injected from request
    const dict = await getDictionary(locale);
    
    return {
      dict,
      locale,
    };
  }
}`;

export const I18N_VIEW = `// src/features/home/views/homepage.tsx
import { type PageProps as CorePageProps } from '@harpy-js/core';
import { Dictionary } from '../../i18n/get-dictionary';

export interface PageProps extends CorePageProps {
  dict: Dictionary;
  locale: string;
}

export default function HomePage({ dict, locale }: PageProps) {
  return (
    <div>
      <h1>{dict.hero.title}</h1>
      <p>{dict.hero.subtitle}</p>
      <p>{dict.hero.description}</p>
      
      <section>
        <h2>{dict.features.title}</h2>
        <div>
          <h3>{dict.features.lightning.title}</h3>
          <p>{dict.features.lightning.description}</p>
        </div>
      </section>
    </div>
  );
}`;

export const CLIENT_COMPONENT = `// src/components/Counter.tsx
'use client';

import { useState } from 'react';
import { Dictionary } from '../i18n/get-dictionary';

interface CounterProps {
  dict: Dictionary;
  locale: string;
}

export function Counter({ dict, locale }: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded">
      <h3>{dict.demo.counter}</h3>
      <p className="text-lg font-bold">{count} {dict.demo.clicks}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}`;

export const LANGUAGE_SWITCHER = `'use client';

import { useI18n } from '@harpy-js/core/client';
import { useState } from 'react';

/**
 * Language Switcher Component
 *
 * Uses the useI18n hook to switch locales.
 * The hook automatically detects whether to use query params or header mode.
 */
export function LanguageSwitcher() {
  const { switchLocale } = useI18n();
  const [isLoading, setIsLoading] = useState(false);

  const handleSwitchLocale = (locale: string) => {
    setIsLoading(true);
    (switchLocale(locale) as Promise<void>)
      .then(() => {
        // Page will reload, so this won't execute
      })
      .catch((error: unknown) => {
        console.error('Failed to switch locale:', error);
        setIsLoading(false);
      });
  };

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => {
          handleSwitchLocale('en');
        }}
        disabled={isLoading}
        className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-700 disabled:bg-amber-800 text-white font-medium transition-colors"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => {
          handleSwitchLocale('fr');
        }}
        disabled={isLoading}
        className="px-3 py-1 rounded bg-amber-600 hover:bg-amber-700 disabled:bg-amber-800 text-white font-medium transition-colors"
      >
        FR
      </button>
    </div>
  );
}`;

export const LOCALE_DETECTION = `// Locale detection priority (automatic):
// 1. User cookie (if previously selected)
// 2. URL source:
//    - Accept-Language header (if urlPattern: 'header')
//    - Query parameter (if urlPattern: 'query')
// 3. Default locale (configured in i18nConfig)

// Example with i18nConfig:
export const i18nConfig: I18nModuleOptions = {
  urlPattern: 'header',  // Reads Accept-Language header
  defaultLocale: 'en',   // Fallback if no detection
  cookieName: 'locale',  // Cookie persists selection
};`;

export const NESTED_TRANSLATIONS = `// src/dictionaries/en.json
{
  "pages": {
    "home": {
      "title": "Home Page",
      "meta": {
        "description": "Welcome to our homepage"
      }
    },
    "about": {
      "title": "About Us",
      "team": {
        "title": "Our Team",
        "members": {
          "ceo": "Chief Executive Officer",
          "cto": "Chief Technology Officer"
        }
      }
    }
  },
  "common": {
    "buttons": {
      "submit": "Submit",
      "cancel": "Cancel",
      "save": "Save"
    },
    "errors": {
      "required": "This field is required",
      "invalid": "Invalid input"
    }
  }
}

// Access nested values with dot notation:
<h1>{dict.pages.about.team.title}</h1>
<button>{dict.common.buttons.submit}</button>
<span>{dict.common.errors.required}</span>`;

export const SETUP_MAIN_TS = `// src/main.ts
import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { setupHarpyApp } from '@harpy-js/core';
import DefaultLayout from "./layouts/layout";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Centralized Harpy setup: JSX engine, cookies, and static handlers
  await setupHarpyApp(app, { layout: DefaultLayout, distDir: "dist" });

  await app.listen({
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    host: "0.0.0.0",
  });

  console.log(\`Application is running on: \${await app.getUrl()}\`);
}

bootstrap();`;

export const SETUP_DICTIONARY_EN = `{
  "welcome": "Welcome",
  "home": "Home",
  "about": "About",
  "hero": {
    "title": "Welcome to Harpy",
    "subtitle": "A powerful NestJS + React framework",
    "description": "Built for speed, precision, and adaptability"
  },
  "features": {
    "title": "Why Choose Harpy?",
    "lightning": {
      "title": "Lightning Fast",
      "description": "Optimized SSR with automatic hydration"
    }
  },
  "demo": {
    "title": "Try It Out",
    "counter": "Counter",
    "clicks": "clicks"
  }
}`;

export const SETUP_DICTIONARY_FR = `{
  "welcome": "Bienvenue",
  "home": "Accueil",
  "about": "À propos",
  "hero": {
    "title": "Bienvenue sur Harpy",
    "subtitle": "Un puissant framework NestJS + React",
    "description": "Conçu pour la vitesse, la précision et l'adaptabilité"
  },
  "features": {
    "title": "Pourquoi choisir Harpy?",
    "lightning": {
      "title": "Ultra Rapide",
      "description": "SSR optimisé avec hydratation automatique"
    }
  },
  "demo": {
    "title": "Essayez-le",
    "counter": "Compteur",
    "clicks": "clics"
  }
}`;

export const ORGANIZE_BY_FEATURE = `{
  "home": { ... },
  "about": { ... },
  "products": { ... },
  "common": { ... }
}`;

export const DESCRIPTIVE_BAD_KEYS = `{
  "btn1": "Submit",
  "txt1": "Hello"
}`;

export const DESCRIPTIVE_GOOD_KEYS = `{
  "submitButton": "Submit",
  "welcomeMessage": "Hello"
}`;
