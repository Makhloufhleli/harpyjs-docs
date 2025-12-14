import React from 'react';
import type { JsxLayoutProps } from '@harpy-js/core';
import Logo from 'src/components/logo';

export interface Custom404Props extends JsxLayoutProps {
  path?: string;
  message?: string;
}

export default function Custom404Page({
  path,
  message = 'Page Not Found',
}: Custom404Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full shadow-lg mb-4">
            <Logo className="size-14 text-white" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{message}</h2>

        <p className="text-lg text-gray-600 mb-8">
          The documentation page you're looking for doesn't exist or has been
          moved.
        </p>

        {/* Path Display */}
        {path && (
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-8 text-left">
            <div className="font-mono text-sm text-gray-700">
              <span className="text-gray-500">Requested path:</span>{' '}
              <span className="text-purple-600 font-semibold">{path}</span>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/docs"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            Go to Documentation
          </a>

          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Go to Homepage
          </a>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="/docs"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              Getting Started
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/docs/routing"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              Routing
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/docs/examples"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              Examples
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/docs/seo"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              SEO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
