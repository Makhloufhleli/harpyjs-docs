import { type PageProps as CorePageProps } from '@harpy-js/core';
import { Dictionary } from '../../../i18n/get-dictionary';

export interface PageProps extends CorePageProps {
  items?: string[];
  dict: Dictionary;
  locale: string;
}

export default function HeroPage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Soft blurred texture overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulance type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          filter: 'blur(80px)',
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30" />

      {/* Simple background for mobile and tablets (including iPad) - up to 1280px */}
      <div className="absolute inset-y-0 left-0 w-full xl:hidden bg-gradient-to-r from-slate-100/80 via-slate-50/50 to-transparent" />

      {/* Eagle Background Image - Large Desktop only (1280px+) */}
      <div className="hidden xl:block fixed inset-y-0 left-0 w-2/5 pointer-events-none z-0">
        <img
          src="/images.webp"
          alt="Harpy Eagle"
          className="h-full w-full object-cover opacity-80"
          style={{
            maskImage:
              'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 py-16 xl:py-24">
        <div className="flex items-center justify-end min-h-[500px]">
          {/* Content */}
          <div className="w-full xl:w-1/2 text-center xl:text-left">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Harpy.js
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl xl:text-3xl text-slate-700 mb-4 font-light leading-relaxed">
              A progressive{' '}
              <span className="font-semibold text-slate-900">Node.js</span>{' '}
              framework for building efficient and scalable server-side
              applications with{' '}
              <span className="font-semibold text-slate-900">
                NestJs & React SSR
              </span>
              .
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto xl:mx-0">
              Harpy combines the power of NestJS with React server-side
              rendering, delivering lightning-fast performance with 1-7ms render
              times and automatic client hydration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start mb-8">
              <a
                href="/docs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg"
              >
                Get Started
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/Makhloufhleli/harpy.js"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-slate-200 hover:border-slate-300 text-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>

            {/* Version Badges */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-3">
              <img
                src="https://img.shields.io/npm/v/@harpy-js/core?label=core&style=flat-square&color=e11d48"
                alt="Core Version"
                className="h-5"
              />
              <img
                src="https://img.shields.io/npm/v/@harpy-js/cli?label=cli&style=flat-square&color=ea580c"
                alt="CLI Version"
                className="h-5"
              />
              <img
                src="https://img.shields.io/badge/render-1--7ms-10b981?style=flat-square"
                alt="Performance"
                className="h-5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="relative z-10 bg-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: 'fastify-logo.png',
                title: 'Fastify',
                desc: 'Built on Fastify, one of the fastest web frameworks. Delivers exceptional performance with minimal overhead.',
              },
              {
                icon: 'nestjs-logo.png',
                title: 'NestJS',
                desc: 'Leverage the full power of NestJS for flexible, extensible, and scalable server-side applications.',
              },
              {
                icon: 'react-logo.png',
                title: 'React Components',
                desc: 'Server-side rendering with React 19, automatic hydration, and seamless client-side interactivity.',
              },
              {
                icon: 'shadcn-ui-logo.png',
                title: 'Tailwind + shadcn',
                desc: 'Beautiful UI with Tailwind CSS and shadcn components. Build stunning interfaces faster.',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-red-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">
                  <img
                    src={`/${feature.icon}`}
                    alt={feature.title}
                    className="h-12 w-12 mx-auto xl:mx-0"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
