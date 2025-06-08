import { useState, useEffect, useCallback } from 'react';
import axiosInstance from '../axios_instance';
import { ServicesApi } from '../types/types';

// Server-side data fetching function
export async function getServices() {
  try {
    const response = await axiosInstance.get('/service/get_all_services/1');
    return response.data.services;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch services');
  }
}

// Client-side hook for state management
export function useServices() {
  const [services, setServices] = useState<ServicesApi[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getServices();
      console.log('Fetched services data:', data);
      console.log('Number of services:', data.length);
      setServices(data || []);
    } catch (err: any) {
      console.error('Error fetching services:', err);
      setError(err.message);
      setServices([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return {
    services,
    loading,
    error,
    fetchServices,
  };
} 