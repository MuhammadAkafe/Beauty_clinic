'use server';

import { getServicesServer } from './API';
import { ServicesApi } from '../types/types';

// Server Component
export default async function ServicesServer() {``
  const services = await getServicesServer();
  if (Array.isArray(services)) {
    return services.map((service: ServicesApi) => (
      <div key={service.service_id}>
        <h3>{service.title}</h3>
        <p>{service.sub_title}</p>
        <span>{service.status}</span>
      </div>
    ));
  } else {
    return <div>{services}</div>;
  }

  
} 