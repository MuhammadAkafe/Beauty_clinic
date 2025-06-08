import React, { useState, useEffect } from 'react';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';
import { Service_form } from '../types/Service';
import { ServicesApi } from '../types/types';
import { useServices } from './useServices';

const AdminDashboard: React.FC = () => {
  const [editingServiceform, setEditingService] = useState<Service_form | null>(null);
  const { services, loading, error, fetchServices } = useServices();

  // Refresh services when component mounts
  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const handleEditComplete = () => {
    setEditingService(null);
    fetchServices(); // Refresh list after edit is complete
  };

  const mapApiToForm = (service: ServicesApi): Service_form => {
    return {
      service_id: service.service_id,
      title: service.title,
      sub_title: service.sub_title,
      status: service.status,
      items: service.items
    };
  };

  const handleServiceUpdate = async () => {
    try {
      await fetchServices();
      // Force a re-render by updating a state
      setEditingService(prev => prev);
    } catch (error) {
      console.error('Error updating services:', error);
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Services Management</h1>
        <span className="badge bg-primary">Total Services: {services.length}</span>
      </div>

      <div className="row">
        {/* Table on the left */}
        <div className="col-md-7">
          <ServiceList 
            services={services}
            loading={loading}
            error={error}
            onEditService={(service) => setEditingService(mapApiToForm(service))}
            onServiceUpdate={handleServiceUpdate}
          />
        </div>

        {/* Form on the right */}
        <div className="col-md-5">
          <ServiceForm 
            editingServiceform={editingServiceform}
            onEditComplete={handleEditComplete}
            onServiceUpdate={handleServiceUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard; 