'use server';

import { getServicesServer } from './API';

// Server Component
export default async function ServicesServer() {
  const services = await getServicesServer();
  return (
    <div>
      {services.map((service) => (
        <div key={service.service_id}>
          <h3>{service.title}</h3>
          <p>{service.sub_title}</p>
          <span>{service.status}</span>
        </div>
      ))}
    </div>
  );
} 