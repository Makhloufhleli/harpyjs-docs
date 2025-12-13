import { type PageProps as CorePageProps } from '@harpy-js/core';
import { Dictionary } from '../../../i18n/get-dictionary';
import CodeSnippet from '../../../components/code-snippet';
import * as snippets from '../snippets';
import CommandTabs from 'src/components/command-tabs';

export interface PageProps extends CorePageProps {
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
            Harpy.js comes with built-in internationalization support, enables
            you to configure the routing and rendering of content to support
            multiple languages. Making your site adaptive to different locales
            includes translated content (localization).
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-900">
              <strong>✨ Key Features:</strong> Type-safe translations,
              automatic locale detection, dictionary caching, server and client
              support, and zero configuration required.
            </p>
          </div>
        </section>
        {/* Setup */}
        <section id="i18n-setup" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Setting Up i18n
          </h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
            <p className="text-blue-900">
              <strong>ℹ️ Initialization Check:</strong> If you initialized your
              Harpy.js project with the CLI and selected <strong>yes</strong>{' '}
              for i18n integration, i18n is already configured! You can skip to{' '}
              <a
                href="#create-dictionaries"
                className="underline font-semibold"
              >
                Create Dictionary Files
              </a>
              . If not, follow the installation steps below.
            </p>
            <p className="text-blue-900 mb-3 mt-3">
              <strong>🍪 Cookies in Harpy.js:</strong> The Harpy.js framework
              engine automatically enables cookies through setupHarpyApp to
              persist the user's language preference across sessions. Here's how
              it works:
            </p>
            <ul className="list-disc list-inside text-blue-900 space-y-2 text-sm">
              <li>
                <strong>Locale Detection Priority:</strong> When a request
                arrives, the I18nInterceptor checks in this order:
                <ol className="list-decimal list-inside ml-6 mt-1 space-y-1">
                  <li>URL source (header or query parameter)</li>
                  <li>
                    Locale cookie (if user previously selected a language)
                  </li>
                  <li>Accept-Language header (browser preference)</li>
                  <li>Default locale (fallback)</li>
                </ol>
              </li>
              <li>
                <strong>Cookie Setting:</strong> When a locale is detected from
                the URL (not from a cookie), the I18nInterceptor automatically
                sets a cookie with that locale for 1 year.
              </li>
              <li>
                <strong>Persistent Experience:</strong> On the user's next
                visit, the cookie is read automatically, so they'll see your
                site in their previously selected language without needing to
                specify it again.
              </li>
              <li>
                <strong>setupHarpyApp:</strong> The setupHarpyApp function
                enables Fastify's cookie parser, which is required to read and
                write cookies in your Harpy.js application.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Installation (if not already configured)
          </h3>

          <p className="text-slate-600 mb-4">
            If you didn't enable i18n during CLI initialization, install and
            configure it manually:
          </p>

          <p className="text-slate-600 mb-4">
            <strong>1. Install the i18n package:</strong>
          </p>

          <CommandTabs
            commands={{
              pnpm: snippets.INSTALL_PNPM,
              npm: snippets.INSTALL_NPM,
              yarn: snippets.INSTALL_YARN,
            }}
          />

          <p className="text-slate-600 mb-4 mt-6">
            <strong>2. Create i18n configuration:</strong>
          </p>

          <CodeSnippet
            code={snippets.I18N_CONFIG}
            showLineNumbers
            className="mb-6"
          />
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
            <p className="text-blue-900">
              <strong>💡 URL Pattern Explanation:</strong>
            </p>
            <ul className="list-disc list-inside text-blue-900 mt-2 space-y-1">
              <li>
                <strong>header:</strong> Locale from Accept-Language header
                (cleaner URLs)
              </li>
              <li>
                <strong>query:</strong> Locale from query param like ?lang=fr
              </li>
            </ul>
          </div>

          <p className="text-slate-600 mb-4">
            <strong>3. Create dictionary loader:</strong>
          </p>

          <CodeSnippet
            code={snippets.GET_DICTIONARY}
            showLineNumbers
            className="mb-6"
          />

          <p className="text-slate-600 mb-4">
            <strong>4. Import I18nModule in your app module:</strong>
          </p>

          <CodeSnippet
            code={snippets.APP_MODULE_I18N}
            showLineNumbers
            className="mb-6"
          />

          <div id="create-dictionaries" />
          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            Creating Dictionary Files
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

            <CodeSnippet code={snippets.SETUP_DICTIONARY_EN} className="mb-6" />
          </div>

          <div className="mb-6">
            <p className="text-sm text-slate-500 mb-2">
              src/dictionaries/fr.json
            </p>
            <CodeSnippet code={snippets.SETUP_DICTIONARY_FR} className="mb-6" />
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
          <p className="text-slate-600 mb-4">
            Use the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              @CurrentLocale()
            </code>{' '}
            decorator to inject the current locale:
          </p>

          <CodeSnippet
            code={snippets.I18N_CONTROLLER}
            showLineNumbers
            className="mb-6"
          />

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-6">
            <p className="text-amber-900">
              <strong>🎯 How it Works:</strong> The I18nInterceptor
              automatically detects the locale from your configured URL pattern
              (header or query) and stores it in the request. The{' '}
              <code className="bg-amber-100 px-2 py-1 rounded">
                @CurrentLocale()
              </code>{' '}
              decorator retrieves it for you.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            In Your View Component
          </h3>

          <CodeSnippet
            code={snippets.I18N_VIEW}
            showLineNumbers
            className="mb-6"
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <p className="text-green-900">
              <strong>✅ Type Safety:</strong> The{' '}
              <code className="bg-green-100 px-2 py-1 rounded">Dictionary</code>{' '}
              type is automatically inferred from your English dictionary,
              providing autocomplete and type checking for all translation keys!
              Always extend{' '}
              <code className="bg-green-100 px-2 py-1 rounded">
                CorePageProps
              </code>{' '}
              from @harpy-js/core.
            </p>
          </div>
        </section>

        {/* Client-Side Usage */}
        <section id="client-side" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Client-Side Translations
          </h2>
          <p className="text-slate-600 mb-6">
            Client components receive translations via props passed from the
            server. Since Harpy.js uses server-side rendering, all translations
            are available from the start with full type safety.
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Interactive Component Example
          </h3>

          <CodeSnippet
            code={snippets.CLIENT_COMPONENT}
            showLineNumbers
            className="mb-6"
          />

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            Language Switcher
          </h3>
          <p className="text-slate-600 mb-4">
            Create a language switcher component using the{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">useI18n()</code>{' '}
            hook from{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              @harpy-js/core/client
            </code>
            :
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-6">
            <p className="text-amber-900 mb-2">
              <strong>🎣 useI18n Hook:</strong> The useI18n hook provides the{' '}
              <code className="bg-amber-100 px-2 py-1 rounded">
                switchLocale()
              </code>{' '}
              function that correctly integrates with your i18n configuration.
            </p>
            <ul className="list-disc list-inside text-amber-900 space-y-1 text-sm">
              <li>
                The hook automatically detects your configured URL pattern
                (header or query)
              </li>
              <li>
                It communicates with the I18nInterceptor to trigger locale
                detection
              </li>
              <li>It works seamlessly with your cookie persistence system</li>
              <li>
                When called, it triggers a page reload to fetch the correct
                dictionary for the new locale
              </li>
            </ul>
          </div>

          <CodeSnippet
            code={snippets.LANGUAGE_SWITCHER}
            showLineNumbers
            className="mb-6"
          />
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
            <p className="text-blue-900">
              <strong>💡 Tip:</strong> Always set a default locale in your
              I18nModuleOptions configuration to ensure a consistent experience
              for users without a locale cookie or URL parameter.
            </p>
          </div>
        </section>

        {/* Advanced Features */}
        <section id="advanced" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Advanced Features
          </h2>

          <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-8">
            Nested Translations
          </h3>
          <p className="text-slate-600 mb-4">
            Organize your translations into nested objects for better structure
            and maintainability:
          </p>

          <CodeSnippet code={snippets.NESTED_TRANSLATIONS} className="mb-6" />
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
              <CodeSnippet
                code={snippets.ORGANIZE_BY_FEATURE}
                className="mb-6"
              />
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
                  <CodeSnippet
                    code={snippets.DESCRIPTIVE_BAD_KEYS}
                    className="mb-6"
                  />
                </div>
                <div>
                  <p className="text-sm text-green-600 font-semibold mb-2">
                    ✅ Good
                  </p>
                  <CodeSnippet
                    code={snippets.DESCRIPTIVE_GOOD_KEYS}
                    className="mb-6"
                  />
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
