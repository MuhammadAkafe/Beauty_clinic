import React, { useEffect, useState } from 'react';
import { Service, ServiceStatus } from '../types/Service';
import axios from 'axios';
import axiosInstance from '../axios_instance';

interface ServiceListProps {
  services: Service[];
  onEdit: (service: Service) => void;
  onDelete: (id: string) => void;
}

const getStatusBadgeClass = (status: ServiceStatus) => {
  switch (status) {
    case 'Active':
      return 'bg-success';
    case 'Pending':
      return 'bg-warning';
    case 'Archived':
      return 'bg-secondary';
    case 'Disabled':
      return 'bg-danger';
    default:
      return 'bg-primary';
  }
};




const ServiceList: React.FC<ServiceListProps> = ({ services, onEdit, onDelete }) => (



  <div className="card">
    <div className="card-body">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Sub-title</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.title}</td>
                <td>{service.subtitle}</td>
                <td>
                  <span className={`badge ${getStatusBadgeClass(service.status)}`}>
                    {service.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => onEdit(service)}
                    className="btn btn-sm btn-outline-primary me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(service.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
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
);

export default ServiceList; 