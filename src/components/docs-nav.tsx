import React, { useEffect, useMemo, useState } from 'react';
import type { NavSection } from '@hepta-solutions/harpy-core';
import {
  buildHrefIndex,
  getActiveItemIdFromIndex,
} from '@hepta-solutions/harpy-core/client/getActiveItemId';
import Link from '@hepta-solutions/harpy-core/client/Link';

type Props = {
  sections: NavSection[];
};

// Simple docs navigation component that uses the client helper to compute
// the active item id and applies an "active" CSS class.
export default function DocsNav({ sections }: Props) {
  // Flatten items into a manifest for the helper.
  const flatItems = useMemo(() => {
    return sections.flatMap((s) =>
      s.items.map((it) => ({ id: it.id, href: it.href })),
    );
  }, [sections]);

  const hrefIndex = useMemo(() => buildHrefIndex(flatItems), [flatItems]);

  const [activeId, setActiveId] = useState<string | undefined>(() =>
    typeof window !== 'undefined'
      ? getActiveItemIdFromIndex(hrefIndex, window.location.pathname)
      : undefined,
  );

  useEffect(() => {
    // Update active id on popstate/hashchange. For framework routing (Next/React Router)
    // prefer to call `setActiveId` on router change events.
    const update = () =>
      setActiveId(
        getActiveItemIdFromIndex(hrefIndex, window.location.pathname),
      );
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);

    // Monkey-patch history.pushState so navigations that use pushState also update.
    const origPush = history.pushState;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (history as any).pushState = function (
      data: any,
      title: string,
      url?: string | null,
    ) {
      const result = origPush.apply(this, [data, title, url]);
      update();
      return result;
    };

    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
      (history as any).pushState = origPush;
    };
  }, [hrefIndex]);

  return (
    <nav className="docs-nav">
      {sections.map((s) => (
        <section key={s.id} className="mb-4">
          <h3 className="text-sm font-semibold text-slate-700 mb-2">
            {s.title}
          </h3>
          <ul className="space-y-1">
            {s.items.map((it) => (
              <li key={it.id}>
                <Link
                  href={it.href ?? '#'}
                  className={`block px-2 py-1 rounded ${it.id === activeId ? 'text-blue-600 font-medium' : 'text-slate-600'}`}
                >
                  {it.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}
