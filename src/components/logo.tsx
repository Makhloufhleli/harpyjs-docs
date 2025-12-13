import React from 'react';

export default function Logo({ className }: { className?: string }) {
  return <img src="/favicon.png" alt="logo" className={className} />;
}
