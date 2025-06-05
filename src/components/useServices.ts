import { useState, useEffect } from 'react';
import axiosInstance from '../axios_instance';
import { Service } from '../types/Service';

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  // Fetch all services
  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get('/service/get_all_services/1');
      setServices(response.data.services);
    } 
    catch (err: any) {
      setError('Failed to load services');
    }
    setLoading(false);
  };

  // Add a service
  const addService = async (service: Omit<Service, 'id'>) => {
    const response = await axiosInstance.post('/service/add', service);
    setServices((prev) => [...prev, response.data.service]);
  };

  // Update a service
  const updateService = async (service: Service) => {
    const response = await axiosInstance.put(`/service/update/${service.id}`, service);
    setServices((prev) => prev.map((s) => (s.id === service.id ? response.data.service : s)));
  };

  // Delete a service
  const deleteService = async (id: string) => {
    await axiosInstance.delete(`/service/delete/${id}`);
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    services,
    loading,
    error,
    fetchServices,
    addService,
    updateService,
    deleteService,
    setServices,
  };
} 