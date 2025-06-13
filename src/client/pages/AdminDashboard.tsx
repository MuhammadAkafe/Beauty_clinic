
import React, { useState, useEffect } from 'react';
import { getServicesServer } from '../../server/API';
import { ServicesApi } from '../../types/types';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';

export default function AdminDashboard() {
  const [services, setServices] = useState<ServicesApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingService, setEditingService] = useState<ServicesApi | null>(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const data = await getServicesServer();
      setServices(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } 
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);


  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Services Management</h1>
        <span className="badge bg-primary">Total Services: {services.length}</span>
      </div>

      <div className="row">
        <div className="col-md-7">
          <ServiceList 
            services={services}
            loading={loading}
            error={error}
            onEditService={setEditingService}
            onServiceUpdate={fetchServices}
          />
        </div>

        <div className="col-md-5">
          <ServiceForm 
            editingServiceform={editingService}
            onEditComplete={() => setEditingService(null)}
            onServiceUpdate={fetchServices}
          />
        </div>
      </div>
    </div>
  );
} 