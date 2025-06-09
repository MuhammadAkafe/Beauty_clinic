import React, { useState, useEffect } from 'react';
import { Service_form, Item } from '../types/Service';
import { ServiceStatus } from '../types/Service';
import { addServiceServer, updateServiceServer } from './AdminServer';

interface ServiceFormProps {
  editingServiceform?: Service_form | null;
  onEditComplete?: () => void;
  onServiceUpdate: () => Promise<void>;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ editingServiceform, onEditComplete, onServiceUpdate }) => {
  const [formData, setFormData] = useState<Omit<Service_form, 'service_id'>>({
    title: '',
    sub_title: '',
    status: 'قريبا',
    items: []
  });
  const [inputFields, setInputFields] = useState<Item[]>([{ type: '', price: 0 }]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingServiceform) {
      setFormData({
        title: editingServiceform.title,
        sub_title: editingServiceform.sub_title,
        status: editingServiceform.status,
        items: editingServiceform.items
      });
      setInputFields(editingServiceform.items.length > 0 ? editingServiceform.items : [{ type: '', price: 0 }]);
    }
  }, [editingServiceform]);

  const handleAddFields = () => {
    setInputFields([...inputFields, { type: '', price: 0 }]);
  };

  const handleRemoveFields = (index: number) => {
    const newFields = inputFields.filter((_, idx) => idx !== index);
    setInputFields(newFields);
  };

  const handleInputChange = (index: number, field: keyof Item, value: string | number) => {
    const newFields = [...inputFields];
    newFields[index] = { ...newFields[index], [field]: value };
    setInputFields(newFields);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingServiceform) {
        await updateServiceServer(editingServiceform.service_id, {
          ...formData,
          items: inputFields
        });
      } else {
        await addServiceServer({
          ...formData,
          items: inputFields
        });
      }
      
      // Update the list first
      await onServiceUpdate();
      
      // Then reset form
      setFormData({
        title: '',
        sub_title: '',
        status: 'قريبا',
        items: []
      });
      setInputFields([{ type: '', price: 0 }]);
      
      if (onEditComplete) {
        onEditComplete();
      }
    } catch (error: any) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">
          {editingServiceform ? 'Edit Service' : 'Add New Service'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter service title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="subtitle" className="form-label">Sub-title</label>
              <input
                type="text"
                className="form-control"
                id="subtitle"
                placeholder="Enter service subtitle"
                value={formData.sub_title}
                onChange={(e) => setFormData(prev => ({ ...prev, sub_title: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="status" className="form-label">Status</label>
            <select
              className="form-select"
              id="status"
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as ServiceStatus }))}
            >
              <option value="قريبا">قريبا</option>
              <option value="جلسه">جلسه</option>
              <option value="مغلق">مغلق</option>
              <option value="غير متوفر">غير متوفر</option>
            </select>
          </div>

          {/* Items Section */}
          <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <label className="form-label mb-0">Items</label>
              <small className="text-muted">Add service items with their prices</small>
            </div>
            
            {inputFields.map((field, index) => (
              <div key={index} className="row g-2 align-items-end mb-3">
                <div className="col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type"
                    value={field.type}
                    onChange={(e) => handleInputChange(index, 'type', e.target.value)}
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    min="0"
                    value={field.price}
                    onChange={(e) => handleInputChange(index, 'price', Number(e.target.value))}
                  />
                </div>
                <div className="col-md-2">
                  {index === 0 ? (
                    <button 
                      type="button" 
                      className="btn btn-success w-100"
                      onClick={handleAddFields}
                    >
                      <i className="bi bi-plus-lg me-1"></i>
                      Add
                    </button>
                  ) : (
                    <button 
                      type="button" 
                      className="btn btn-outline-danger w-100"
                      onClick={() => handleRemoveFields(index)}
                    >
                      <i className="bi bi-trash me-1"></i>
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-end gap-2">
            {editingServiceform && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => {
                  setFormData({
                    title: '',
                    sub_title: '',
                    status: 'قريبا',
                    items: []
                  });
                  setInputFields([{ type: '', price: 0 }]);
                  if (onEditComplete) {
                    onEditComplete();
                  }
                }}
              >
                <i className="bi bi-x-lg me-1"></i>
                Cancel
              </button>
            )}
            {
              editingServiceform ? (
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Updating...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-check-lg me-1"></i>
                      Update Service
                    </>
                  )}
                </button>
              ) : (
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Adding...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-check-lg me-1"></i>
                      Add Service
                    </>
                  )}
                </button>
              )
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm; 