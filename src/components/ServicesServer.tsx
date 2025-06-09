'use server';

import { ServicesApi } from '../types/types';

// Server-side data fetching function
export async function getServicesServer(): Promise<ServicesApi[]> {
  try {
    // In a real server component, you would use server-side data fetching
    // For example, using fetch with absolute URL or direct database access
    const response = await fetch('http://localhost:5173/service/get_all_services/1', {
      cache: 'no-store' // Disable caching for real-time data
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch services');
    }
    
    const data = await response.json();
    return data.services;
  } catch (error: any) {
    console.error('Server error fetching services:', error);
    throw new Error(error.message || 'Failed to fetch services');
  }
}

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