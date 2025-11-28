import { Dictionary } from '../../../i18n/get-dictionary';

export interface PageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
}

export default function I18nPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-8 lg:p-12">
        {/* Introduction */}
        <section id="i18n-intro" className="mb-16">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Internationalization (i18n)
            </h1>
            <span className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500 rounded-lg text-purple-600 text-xs md:text-sm font-bold">
              BUILT-IN
            </span>
          </div>
          <p className="text-lg md:text-xl text-slate-600 mb-6">
            Harpy.js comes with built-in internationalization support, unlike
            many frameworks that require third-party libraries. Build
            multilingual applications with ease using our dictionary-based
            translation system.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-4">
            <p className="text-purple-900">
              <strong>🌍 Why Built-in i18n Matters:</strong> Many modern
              frameworks overlook internationalization, forcing developers to
              integrate complex third-party solutions. Harpy.js includes i18n as
              a core feature, providing seamless multilingual support out of the
              box.
            </p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-900">
              <strong>✨ Key Features:</strong> Type-safe translations,
              automatic locale detection, dictionary caching, server and client
              support, and zero configuration required.
            </p>
          </div>
        </section>

        {/* Why Harpy.js i18n? */}
        <section id="why-built-in" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Why Harpy.js Has Built-in i18n
          </h2>
          <p className="text-slate-600 mb-6">
            Unlike popular frameworks such as Next.js (which only added i18n
            routing in v10+) or Create React App (which requires react-i18next
            or similar), Harpy.js includes internationalization as a fundamental
            feature from day one.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">❌</span>
                <span>Other Frameworks</span>
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Require external libraries (react-intl, i18next)</li>
                <li>• Complex setup and configuration</li>
                <li>• Multiple competing solutions</li>
                <li>• Additional bundle size</li>
                <li>• Inconsistent patterns across projects</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-500 rounded-lg p-6">
              <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span>Harpy.js</span>
              </h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li>• Built into the core framework</li>
                <li>• Zero configuration needed</li>
                <li>• Consistent approach across all projects</li>
                <li>• Optimized and lightweight</li>
                <li>• Type-safe by design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Setup */}
        <section id="i18n-setup" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Setting Up i18n
          </h2>
          <p className="text-slate-600 mb-4">
            i18n is already configured in your Harpy.js project! Just add your
            translation dictionaries and start using them.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            1. Create Dictionary Files
          </h3>
          <p className="text-slate-600 mb-4">
            Create JSON files for each language in the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              src/dictionaries/
            </code>{' '}
            directory:
          </p>

          <div className="mb-6">
            <p className="text-sm text-slate-500 mb-2">
              src/dictionaries/en.json
            </p>
            <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`{
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
}`}</code>
            </pre>
          </div>

          <div className="mb-6">
            <p className="text-sm text-slate-500 mb-2">
              src/dictionaries/fr.json
            </p>
            <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto text-sm">
              <code>{`{
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
}`}</code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            2. Configure Dictionary Loader
          </h3>
          <p className="text-slate-600 mb-4">
            Update{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              src/i18n/get-dictionary.ts
            </code>{' '}
            to include your languages:
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`const dictionaries = {
  en: () =>
    import('../dictionaries/en.json', { with: { type: 'json' } }).then(
      (module) => module.default,
    ),
  fr: () =>
    import('../dictionaries/fr.json', { with: { type: 'json' } }).then(
      (module) => module.default,
    ),
  es: () =>
    import('../dictionaries/es.json', { with: { type: 'json' } }).then(
      (module) => module.default,
    ),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.en>>;

const dictionaryCache = new Map<string, Dictionary>();

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (dictionaryCache.has(locale)) {
    return dictionaryCache.get(locale)!;
  }

  const dict = await (dictionaries[locale as keyof typeof dictionaries]?.() ?? 
                      dictionaries.en());
  
  dictionaryCache.set(locale, dict);
  return dict;
};`}</code>
          </pre>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-blue-900">
              <strong>💡 Performance Tip:</strong> Dictionaries are
              automatically cached in memory after first load, ensuring fast
              translation lookups on subsequent requests.
            </p>
          </div>
        </section>

        {/* Server-Side Usage */}
        <section id="server-side" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Server-Side Translations
          </h2>
          <p className="text-slate-600 mb-6">
            Load translations in your controllers and pass them to your views.
            Harpy.js handles the rest automatically.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            In Your Controller
          </h3>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`import { Controller, Get } from '@nestjs/common';
import { JsxRender } from '@hepta-solutions/harpy-core';
import HomePage from './views/homepage';
import { getDictionary } from '../i18n/get-dictionary';

@Controller()
export class HomeController {
  @Get()
  @JsxRender(HomePage)
  async home() {
    // Load dictionary for current locale
    const dict = await getDictionary('en');
    
    return {
      dict,
      locale: 'en',
    };
  }

  @Get(':locale')
  @JsxRender(HomePage)
  async homeWithLocale(@Param('locale') locale: string) {
    // Dynamic locale from URL
    const dict = await getDictionary(locale);
    
    return {
      dict,
      locale,
    };
  }
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            In Your View Component
          </h3>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`import { Dictionary } from '../i18n/get-dictionary';

export interface PageProps {
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
}`}</code>
          </pre>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-900">
              <strong>✅ Type Safety:</strong> The{' '}
              <code className="bg-green-100 px-2 py-1 rounded">Dictionary</code>{' '}
              type is automatically inferred from your English dictionary,
              providing autocomplete and type checking for all translation keys!
            </p>
          </div>
        </section>

        {/* Client-Side Usage */}
        <section id="client-side" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Client-Side Translations
          </h2>
          <p className="text-slate-600 mb-6">
            For interactive components marked with{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">'use client'</code>
            , use the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">useI18n</code> hook
            to access translations and switch locales.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Creating a Language Switcher
          </h3>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`'use client';

import { useI18n } from '@hepta-solutions/harpy-core/client';

export function LanguageSwitcher() {
  const { locale, switchLocale, t } = useI18n();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => switchLocale('en')}
        className={\`px-3 py-1 rounded \${
          locale === 'en' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700'
        }\`}
      >
        English
      </button>
      <button
        onClick={() => switchLocale('fr')}
        className={\`px-3 py-1 rounded \${
          locale === 'fr' 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-700'
        }\`}
      >
        Français
      </button>
    </div>
  );
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            Using Translations in Client Components
          </h3>
          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`'use client';

import { useI18n } from '@hepta-solutions/harpy-core/client';
import { useState } from 'react';

export function Counter() {
  const { t } = useI18n();
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{t('demo.counter')}</h3>
      <p>{count} {t('demo.clicks')}</p>
      <button onClick={() => setCount(count + 1)}>
        {t('demo.increment')}
      </button>
    </div>
  );
}`}</code>
          </pre>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
            <p className="text-amber-900">
              <strong>⚠️ Important:</strong> When switching locales on the
              client, the page will reload to fetch the new dictionary from the
              server. This ensures SSR consistency and optimal performance.
            </p>
          </div>
        </section>

        {/* Advanced Features */}
        <section id="advanced" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Advanced Features
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Locale Detection
          </h3>
          <p className="text-slate-600 mb-4">
            You can detect the user's preferred locale from various sources:
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class HomeController {
  @Get()
  @JsxRender(HomePage)
  async home(@Req() req: Request) {
    // 1. From URL parameter
    const localeFromUrl = req.params.locale;
    
    // 2. From cookie
    const localeFromCookie = req.cookies?.locale;
    
    // 3. From Accept-Language header
    const localeFromHeader = req.headers['accept-language']?.split(',')[0]?.split('-')[0];
    
    // 4. Fallback to default
    const locale = localeFromUrl || 
                   localeFromCookie || 
                   localeFromHeader || 
                   'en';
    
    const dict = await getDictionary(locale);
    
    return { dict, locale };
  }
}`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            Nested Translations
          </h3>
          <p className="text-slate-600 mb-4">
            Organize your translations in a nested structure for better
            maintainability:
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`{
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
}`}</code>
          </pre>

          <p className="text-slate-600 mb-4">
            Access nested values with dot notation:
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`<h1>{dict.pages.about.team.title}</h1>
<button>{dict.common.buttons.submit}</button>
<span>{dict.common.errors.required}</span>`}</code>
          </pre>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            Dynamic Values in Translations
          </h3>
          <p className="text-slate-600 mb-4">
            Use template strings for dynamic content:
          </p>

          <pre className="bg-slate-900 text-amber-400 rounded-lg p-4 overflow-x-auto mb-6 text-sm">
            <code>{`// Dictionary
{
  "greeting": "Hello, {{name}}!",
  "itemsCount": "You have {{count}} items in your cart"
}

// Usage in component
export function Greeting({ dict, userName }: Props) {
  const greeting = dict.greeting.replace('{{name}}', userName);
  
  return <h1>{greeting}</h1>;
}

// Or create a helper function
function t(key: string, values: Record<string, string>) {
  return key.replace(/{{(\\w+)}}/g, (_, k) => values[k] || '');
}

<p>{t(dict.itemsCount, { count: '5' })}</p>`}</code>
          </pre>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Best Practices
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">📁</span>
                <span>Organize by Feature</span>
              </h3>
              <p className="text-slate-600 mb-3">
                Structure your dictionaries by feature or page for better
                maintainability:
              </p>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-3 overflow-x-auto text-xs">
                <code>{`{
  "home": { ... },
  "about": { ... },
  "products": { ... },
  "common": { ... }
}`}</code>
              </pre>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🔑</span>
                <span>Use Descriptive Keys</span>
              </h3>
              <p className="text-slate-600 mb-3">
                Choose clear, descriptive keys that indicate context:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-red-600 font-semibold mb-2">
                    ❌ Bad
                  </p>
                  <pre className="bg-slate-900 text-amber-400 rounded-lg p-3 text-xs">
                    <code>{`{
  "btn1": "Submit",
  "txt1": "Hello"
}`}</code>
                  </pre>
                </div>
                <div>
                  <p className="text-sm text-green-600 font-semibold mb-2">
                    ✅ Good
                  </p>
                  <pre className="bg-slate-900 text-amber-400 rounded-lg p-3 text-xs">
                    <code>{`{
  "submitButton": "Submit",
  "welcomeMessage": "Hello"
}`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🌍</span>
                <span>Keep English as Source of Truth</span>
              </h3>
              <p className="text-slate-600">
                Always use English (en.json) as your base dictionary. The
                TypeScript types are derived from it, ensuring all other
                languages have the same structure.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">🚀</span>
                <span>Leverage Caching</span>
              </h3>
              <p className="text-slate-600">
                Dictionaries are cached in memory after first load. Don't worry
                about calling{' '}
                <code className="bg-slate-200 px-2 py-1 rounded text-sm">
                  getDictionary
                </code>{' '}
                multiple times - it's optimized!
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-xl">✏️</span>
                <span>Validate Translations</span>
              </h3>
              <p className="text-slate-600 mb-3">
                Create a script to ensure all languages have the same keys:
              </p>
              <pre className="bg-slate-900 text-amber-400 rounded-lg p-3 overflow-x-auto text-xs">
                <code>{`// scripts/validate-translations.ts
const en = require('../src/dictionaries/en.json');
const fr = require('../src/dictionaries/fr.json');

function getKeys(obj: any, prefix = ''): string[] {
  return Object.keys(obj).flatMap(key => {
    const path = prefix ? \`\${prefix}.\${key}\` : key;
    return typeof obj[key] === 'object' 
      ? getKeys(obj[key], path) 
      : [path];
  });
}

const enKeys = getKeys(en).sort();
const frKeys = getKeys(fr).sort();

const missing = enKeys.filter(k => !frKeys.includes(k));
if (missing.length) {
  console.error('Missing FR translations:', missing);
  process.exit(1);
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Migration Guide */}
        <section id="migration" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Migration from Other i18n Libraries
          </h2>
          <p className="text-slate-600 mb-6">
            Coming from react-i18next, react-intl, or next-i18next? Here's how
            Harpy.js i18n compares:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-slate-300 text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="border border-slate-300 px-4 py-2 text-left">
                    Feature
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left">
                    Other Libraries
                  </th>
                  <th className="border border-slate-300 px-4 py-2 text-left">
                    Harpy.js
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 px-4 py-2 font-semibold">
                    Setup
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    Requires provider, config files
                  </td>
                  <td className="border border-slate-300 px-4 py-2 text-green-700">
                    Zero config, built-in
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold">
                    Bundle Size
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    10-50KB extra
                  </td>
                  <td className="border border-slate-300 px-4 py-2 text-green-700">
                    0KB (built-in)
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2 font-semibold">
                    Type Safety
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    Manual types or none
                  </td>
                  <td className="border border-slate-300 px-4 py-2 text-green-700">
                    Automatic from dictionaries
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-300 px-4 py-2 font-semibold">
                    SSR Support
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    Complex setup required
                  </td>
                  <td className="border border-slate-300 px-4 py-2 text-green-700">
                    Native SSR support
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 px-4 py-2 font-semibold">
                    Performance
                  </td>
                  <td className="border border-slate-300 px-4 py-2">
                    Runtime overhead
                  </td>
                  <td className="border border-slate-300 px-4 py-2 text-green-700">
                    Cached & optimized
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Summary */}
        <section id="summary" className="mb-8">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              🎉 That's It!
            </h2>
            <p className="text-purple-900 mb-4">
              Internationalization in Harpy.js is simple, powerful, and built
              right into the framework. No external dependencies, no complex
              setup, just straightforward multilingual support.
            </p>
            <ul className="space-y-2 text-purple-900">
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Built-in feature, not an afterthought</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Type-safe translations with autocompletion</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Server and client support</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Automatic caching for performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span>✅</span>
                <span>Zero configuration required</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
