
import React from 'react';
import ServicesServer from '../../server/ServicesServer';

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