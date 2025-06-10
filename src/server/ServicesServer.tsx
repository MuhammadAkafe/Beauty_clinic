'use server';

import axiosInstance from '../axios_instance';
import { ServicesApi } from '../types/types';

// Server-side data fetching function
export async function getServicesServer(): Promise<ServicesApi[]> {
  try {
    // In a real server component, you would use server-side data fetching
    // For example, using fetch with absolute URL or direct database access
    const response = await axiosInstance.get(`/service/get_all_services/1`);
    
    return response.data.services;
  } 
  catch (error: any) {
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