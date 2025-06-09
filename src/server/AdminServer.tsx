'use server';

import { ServicesApi } from '../types/types';

const BASE_URL = 'https://beauty-clinic-backend.onrender.com';

// Server-side data fetching functions
export async function getServicesServer(): Promise<ServicesApi[]> {
  try {
    const response = await fetch(`${BASE_URL}/service/get_all_services/1`, {
      cache: 'no-store'
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

export async function addServiceServer(serviceData: any) {
  try {
    const response = await fetch(`${BASE_URL}/service/add_service/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to add service');
    }
    
    return await response.json();
  } catch (error: any) {
    throw new Error(error.message || 'Failed to add service');
  }
}

export async function updateServiceServer(serviceId: number, serviceData: any) {
  try {
    const response = await fetch(`${BASE_URL}/service/update_service/${serviceId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update service');
    }
    
    return await response.json();
  } catch (error: any) {
    throw new Error(error.message || 'Failed to update service');
  }
}

export async function deleteServiceServer(serviceId: number) {
  try {
    const response = await fetch(`${BASE_URL}/service/delete_service/${serviceId}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error('Failed to delete service');
    }
    
    return await response.json();
  } catch (error: any) {
    throw new Error(error.message || 'Failed to delete service');
  }
} 