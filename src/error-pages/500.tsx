import React from 'react';
import type { JsxLayoutProps } from '@harpy-js/core';

export interface Custom500Props extends JsxLayoutProps {
  message?: string;
  error?: string;
}

export default function Custom500Page({
  message = 'Internal Server Error',
  error,
}: Custom500Props) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-lg mb-4">
            <span className="text-4xl font-bold text-white">H</span>
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mb-4">
          500
        </h1>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{message}</h2>

        <p className="text-lg text-gray-600 mb-8">
          Something went wrong on our end. We're working to fix it!
        </p>

        {/* Error Details (Development only) */}
        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8 text-left">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-red-900 mb-2">
                  Error Details (Development Mode)
                </h3>
                <pre className="text-xs text-red-800 font-mono whitespace-pre-wrap break-words">
                  {error}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
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
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>

          <a
            href="/docs"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-300 hover:border-red-500 hover:text-red-600 transform hover:-translate-y-0.5 transition-all duration-200"
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
            Go to Documentation
          </a>
        </div>

        {/* Support Information */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">
            If this problem persists, please report it:
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/harpyjs/harpy/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline inline-flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Issues
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:support@harpyjs.org"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium hover:underline"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
