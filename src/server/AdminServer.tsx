'use server';

import { ServicesApi } from '../types/types';
import axiosInstance from '../axios_instance';
// Server-side data fetching functions


export async function getServicesServer(): Promise<ServicesApi[]> {
  try {
    const response = await axiosInstance.get(`/service/get_all_services/1`);
    
    return response.data.services;
  } 
  catch (error: any) 
  {
    console.error('Server error fetching services:', error);
    throw new Error(error.message || 'Failed to fetch services');
  }
}

export async function addServiceServer(serviceData: any) {
  try {
    const response = await axiosInstance.post(`/service/add_service/1`, serviceData);
    
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to add service');
  }
}

export async function updateServiceServer(serviceId: number, serviceData: any) {
  try {
    const response = await axiosInstance.put(`/service/update_service/${serviceId}`, serviceData);
    
    return response.data;
  } catch (error: any) {
    throw new Error(error.message || 'Failed to update service');
  }
}

export async function deleteServiceServer(serviceId: number) {
  try {
    const response = await axiosInstance.delete(`/service/delete_service/${serviceId}`);
    return response.data;
  }
   catch (error: any) {
    throw new Error(error.message || 'Failed to delete service');
  }
} 