import React from 'react'
import { ServicesApi } from '../../types/types'

interface Edit_ServicesProps {
  services: ServicesApi[];
  onEditService: (service: ServicesApi) => void;
  handleDeleteClick: (service_id: number) => void;
}

function Edit_Services({services, onEditService, handleDeleteClick}: Edit_ServicesProps) 
{


  return (
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
  )
}

export default Edit_Services
