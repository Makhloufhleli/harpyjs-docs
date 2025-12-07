'use client';
import * as React from 'react';
import Logo from 'src/components/logo';
import Link from '@hepta-solutions/harpy-core/client/Link';

interface DocNavItem {
  id: string;
  title: string;
  href: string;
}

interface DocNavSection {
  id: string;
  title: string;
  items: DocNavItem[];
}

export default function MobileMenu({
  sections,
}: {
  sections: DocNavSection[];
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, [open]);

  // Close the drawer when navigation occurs (popstate/hashchange/pushstate)
  React.useEffect(() => {
    if (!open) return;
    const onNav = () => setOpen(false);
    window.addEventListener('popstate', onNav);
    window.addEventListener('hashchange', onNav);
    window.addEventListener('pushstate', onNav);
    window.addEventListener('locationchange', onNav);
    return () => {
      window.removeEventListener('popstate', onNav);
      window.removeEventListener('hashchange', onNav);
      window.removeEventListener('pushstate', onNav);
      window.removeEventListener('locationchange', onNav);
    };
  }, [open]);

  return (
    <>
      {/* Burger button - left side, always visible on mobile, normal flex item */}
      <button
        className="fixed top-5 left-5 z-20 lg:hidden bg-amber-600 text-white p-2 rounded-lg shadow-lg hover:bg-amber-700 transition-colors cursor-pointer shrink-0"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Drawer overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <aside
            className={`fixed inset-y-0 left-0 z-60 w-[280px] bg-white border-r border-slate-200 lg:hidden
              transform transition-transform duration-300
              ${open ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <Link
                href="/"
                className="flex items-center gap-2 text-xl font-bold"
                onClick={() => setOpen(false)}
              >
                <Logo className="size-11" />
                <span className=" text-3xl bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Harpy.js
                </span>
              </Link>
              <button
                className="text-slate-600 hover:text-slate-900"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="px-6 py-6 space-y-8 h-full overflow-y-auto">
              {sections.map((section) => (
                // FIXME - Fix the key issue in hydration (When add key to any of the list items, it removes the elements from the DOM after hydration)
                <div>
                  <h3 className="text-xs font-bold text-slate-900 mb-3 uppercase tracking-wider px-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={`block text-sm ${
                            (item as { active?: boolean }).active === true
                              ? 'text-amber-600 bg-amber-50 font-semibold'
                              : 'text-slate-600'
                          } hover:text-amber-600 hover:bg-amber-50 px-2 py-1.5 rounded transition-colors`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
