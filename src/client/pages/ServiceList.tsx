import React, { useState } from 'react';
import { ServicesApi } from '../types/types';
import axiosInstance from '../axios_instance';

interface ServiceListProps {
  services: ServicesApi[];
  loading: boolean;
  error: string | null;
  onEditService: (service: ServicesApi) => void;
  onServiceUpdate: () => Promise<void>;
}

const ServiceList: React.FC<ServiceListProps> = ({ 
  services, 
  loading, 
  error, 
  onEditService, 
  onServiceUpdate 
}) => {
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
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Title</th>
                  <th>li</th>
                  <th>Status</th>
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {services && services.map((service) => (
                  <tr key={service.service_id}>
                    <td>{service.title}</td>
                    <td>{service.sub_title}</td>
                    <td>
                      <span className={`badge bg-${service.status === 'قريبا' ? 'success' : service.status === 'جلسه' ? 'warning' : service.status === 'مغلق' ? 'danger' : 'secondary'}`}>
                        {service.status}
                      </span>
                    </td>
                    <td className="text-end">
                      <button 
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => onEditService(service)}
                      >
                        <i className="bi bi-pencil me-1"></i>
                        Edit
                      </button>
                      <button 
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDeleteClick(service.service_id)}
                      >
                        <i className="bi bi-trash me-1"></i>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <div className={`modal fade ${showDeleteModal ? 'show' : ''}`} 
           style={{ display: showDeleteModal ? 'block' : 'none' }}
           tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Delete</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShowDeleteModal(false)}
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this service? This action cannot be undone.
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn btn-danger" 
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {showDeleteModal && (
        <div className="modal-backdrop fade show"></div>
      )}
    </>
  );
};

export default ServiceList; 
