import React, { useState } from 'react';
import { ServicesApi } from '../../types/types';
import axiosInstance from '../../axios_instance';
import Edit_Services from './Edit_Services';
import Delete_servies from './Delete_service.tsx';

interface ServiceListProps {
  services: ServicesApi[];
  loading: boolean;
  error: string | null;
  onEditService: (service: ServicesApi) => void;
  onServiceUpdate: () => Promise<void>;
}

const ServiceList = ({ 
  services, 
  loading, 
  error, 
  onEditService, 
  onServiceUpdate,
}: ServiceListProps) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [service_id, setServiceToDelete] = useState<number | null>(null);

  const handleDeleteClick = async(service_id: number) => {
    setShowDeleteModal(true);
    setServiceToDelete(service_id);
  };

  const handleConfirmDelete = async() => {
    try {
      console.log('Attempting to delete service:', service_id);
      const response = await axiosInstance.delete(`/service/delete_service/${service_id}`);
      console.log('Delete response:', response.data);
      await onServiceUpdate();
      console.log('Service update completed after deletion');
    }
    catch(error: any) {
      console.error('Error during deletion:', error.response?.data);
    }
    finally {
      setShowDeleteModal(false);
      setServiceToDelete(null);
    }
  };

  if (loading) {
    return (
      <div className="card shadow-sm">
        <div className="card-body text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card shadow-sm">
        <div className="card-body text-center py-5">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>

    <Edit_Services services={services} onEditService={onEditService} handleDeleteClick={handleDeleteClick} />

    <Delete_servies showDeleteModal={showDeleteModal} setShowDeleteModal={setShowDeleteModal} handleConfirmDelete={handleConfirmDelete} />



    </>
  );
};

export default ServiceList; 
