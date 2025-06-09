'use client';

import React from 'react';
import ServicesServer from './ServicesServer';

export default function ServicesClient() {
  return (
    <div className="container">
      <h2>Services</h2>
      <React.Suspense fallback={<div>Loading services...</div>}>
        <ServicesServer />
      </React.Suspense>
    </div>
  );
} 