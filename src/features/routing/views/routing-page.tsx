import { Dictionary } from '../../../i18n/get-dictionary';
import CodeSnippet from '../../../components/code-snippet';
import * as snippets from '../snippets';

export interface PageProps {
  sections: any[];
  dict: Dictionary;
  locale: string;
  activeItemId?: string;
}

export default function RoutingPage() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 lg:p-12">
        <section id="dynamic-navigation" className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Dynamic Navigation Architecture
          </h2>

          <p className="text-slate-600 mb-4">
            The core exposes a lightweight{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">
              NavigationService
            </code>{' '}
            that features use to register documentation sections and items
            during module initialization. The layout reads that registry to
            render sidebars and other navigation widgets. The general rule is:
            register navigation entries where the feature is implemented, and
            render them centrally.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded mb-6">
            <p className="text-purple-900 mb-2">
              <strong>Core concepts</strong>
            </p>
            <ul className="list-disc list-inside text-purple-900">
              <li>
                <strong>RouterModule</strong> — provides the runtime registry.
              </li>
              <li>
                <strong>NavigationService</strong> — API to register sections
                and items.
              </li>
              <li>
                <strong>AutoRegisterModule</strong> — optional base helper for
                feature modules.
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            How to compute the active item (recommended)
          </h3>
          <p className="text-slate-600 mb-4">
            To prevent a flash of incorrect sidebar state during client-side
            hydration, compute the active item on the server. In your controller
            compute the current request path (for example from the request URL)
            and call the core helper that returns the registry already decorated
            with an{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">active</code> flag
            on the matching item. Pass those sections down to the view so the
            initial HTML already reflects which link is active.
          </p>

          <p className="text-slate-600 mb-3">
            The snippet below shows a minimal controller pattern: determine the
            current path and ask the navigation service for decorated sections.
            This keeps the layout simple — it only reads{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">item.active</code>{' '}
            when rendering links.
          </p>
          <CodeSnippet
            code={snippets.ROUTING_CONTROLLER}
            showLineNumbers
            className="mb-6"
          />

          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Ordering and priorities
          </h3>
          <p className="text-slate-600 mb-4">
            The navigation registry supports simple numeric ordering for both
            sections and items. When you register a section you may include an
            optional numeric{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">order</code>{' '}
            property; lower numbers appear earlier. Items within a section may
            also have an{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">order</code> which
            controls their position inside the section. This approach avoids
            imperative reordering in most cases and keeps ordering declarative
            and local to the feature.
          </p>

          <p className="text-slate-600 mb-4">
            Use small integers (for example{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">0</code>,{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">10</code>,
            <code className="bg-slate-100 px-2 py-1 rounded">100</code>) to
            express priority. Reserve negative or very large numbers only for
            special cases. If a module registers later and you need to correct
            ordering at runtime, the core exposes a helper to move a section
            programmatically.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Declare section order
          </h4>
          <p className="text-slate-600 mb-3">
            Example: register a section and provide an explicit{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">order</code>.
          </p>
          <CodeSnippet
            code={snippets.REGISTER_WITH_ORDER}
            showLineNumbers
            className="mb-6"
          />

          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Declare item priority inside a section
          </h4>
          <p className="text-slate-600 mb-3">
            Example: add items to a section with explicit{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">order</code>{' '}
            values.
          </p>
          <CodeSnippet
            code={snippets.REGISTER_ITEMS_PRIORITY}
            showLineNumbers
            className="mb-6"
          />

          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Runtime adjustments
          </h4>
          <p className="text-slate-600 mb-3">
            If a section needs to be promoted dynamically (for example
            admin-only or feature-flagged modules), use the core helper shown
            below.
          </p>
          <CodeSnippet
            code={snippets.NAV_SERVICE_MOVE}
            showLineNumbers
            className="mb-6"
          />
        </section>

        <section id="illustrative-examples" className="mb-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Illustrative examples
          </h3>

          <p className="text-slate-600 mb-4">
            Below are short, focused snippets that demonstrate the recommended
            registration and server-side active-state pattern.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Feature module
          </h4>
          <CodeSnippet
            code={snippets.EAGLES_MODULE}
            showLineNumbers
            className="mb-6"
          />

          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Feature service
          </h4>
          <CodeSnippet
            code={snippets.EAGLES_SERVICE}
            showLineNumbers
            className="mb-6"
          />

          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Controller / SSR
          </h4>
          <p className="text-slate-600 mb-3">
            Compute the current path on the server and ask the navigation
            service for decorated sections (with{' '}
            <code className="bg-slate-100 px-2 py-1 rounded">active</code>{' '}
            flags) so the sidebar is correct on first render.
          </p>
          <CodeSnippet
            code={snippets.ROUTING_CONTROLLER}
            showLineNumbers
            className="mb-6"
          />
        </section>

        <section id="advanced" className="mb-8">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Advanced tips
          </h3>

          <p className="text-slate-600 mb-4">
            You can register sections early, use explicit ordering, or reorder
            at runtime. The examples below show each approach.
          </p>

          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Item types & priorities
          </h4>
          <CodeSnippet
            code={snippets.NAV_TYPES}
            showLineNumbers
            className="mb-6"
          />

          <h4 className="text-lg font-semibold text-slate-900 mb-2">
            Move at runtime
          </h4>
          <CodeSnippet
            code={snippets.NAV_SERVICE_MOVE}
            showLineNumbers
            className="mb-6"
          />
        </section>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
          <h4 className="font-bold text-green-900 mb-2">Benefits</h4>
          <ul className="text-green-900">
            <li>
              <strong>No duplication:</strong> register once, render everywhere.
            </li>
            <li>
              <strong>Scalable:</strong> features are self-contained.
            </li>
            <li>
              <strong>SSR-friendly:</strong> compute{' '}
              <code className="bg-slate-100 px-2 py-1 rounded">active</code>{' '}
              server-side to avoid hydration mismatch.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
//             Item types & priorities
//           </h4>
//           <CodeSnippet
//             code={snippets.NAV_TYPES}
//             showLineNumbers
//             className="mb-6"
//           />

//           <h4 className="text-lg font-semibold text-slate-900 mb-2">
//             Move at runtime
//           </h4>
//           <CodeSnippet
//             code={snippets.NAV_SERVICE_MOVE}
//             showLineNumbers
//             className="mb-6"
//           />
//         </section>

//         <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
//           <h4 className="font-bold text-green-900 mb-2">Benefits</h4>
//           <ul className="text-green-900">
//             <li>
//               <strong>No duplication:</strong> register once, render everywhere.
//             </li>
//             <li>
//               <strong>Scalable:</strong> features are self-contained.
//             </li>
//             <li>
//               <strong>SSR-friendly:</strong> compute{' '}
//               <code className="bg-slate-100 px-2 py-1 rounded">active</code>{' '}
//               server-side to avoid hydration mismatch.
//             </li>
//           </ul>
//         </div>

//         <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between">
//           <a
//             href="/docs"
//             className="text-amber-600 hover:text-amber-700 font-medium"
//           >
//             ← Back to Introduction
//           </a>
//           <Link
//             href="/docs/throttler"
//             className="text-amber-600 hover:text-amber-700 font-medium"
//           >
//             Rate Limiting →
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
// <h4 className="font-bold text-green-900 mb-2">Benefits</h4>;
