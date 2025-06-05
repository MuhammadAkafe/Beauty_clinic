import React from 'react';
import { Service, Item, ServiceStatus } from '../types/Service';

interface ServiceFormProps {
  formData: Omit<Service, 'id'>;
  setFormData: React.Dispatch<React.SetStateAction<Omit<Service, 'id'>>>;
  onSubmit: (e: React.FormEvent) => void;
  editingService: Service | null;
  itemForm: { type: string; price: string };
  setItemForm: React.Dispatch<React.SetStateAction<{ type: string; price: string }>>;
  editingItemIndex: number | null;
  setEditingItemIndex: React.Dispatch<React.SetStateAction<number | null>>;
  handleAddOrEditItem: (e: React.FormEvent) => void;
  handleEditItem: (idx: number) => void;
  handleDeleteItem: (idx: number) => void;
}


const ServiceForm: React.FC<ServiceFormProps> = ({
  formData,
  setFormData,
  onSubmit,
  editingService,
  itemForm,
  setItemForm,
  editingItemIndex,
  setEditingItemIndex,
  handleAddOrEditItem,
  handleEditItem,
  handleDeleteItem,
}) =>
  
  (
  <div className="card mb-4">
    <div className="card-body">
      <h2 className="card-title mb-4">
        {editingService ? 'Edit Service' : 'Add New Service'}
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subtitle" className="form-label">
            Sub-title
          </label>
          <input
            type="text"
            className="form-control"
            id="subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={e => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={formData.status}
            onChange={e => setFormData(prev => ({ ...prev, status: e.target.value as ServiceStatus }))}
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Archived">Archived</option>
            <option value="Disabled">Disabled</option>
          </select>
        </div>
        {/* Items Section */}
        <div className="mb-3">
          <label className="form-label">Items</label>
          <form className="row g-2 align-items-end" onSubmit={handleAddOrEditItem}>
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="Type"
                value={itemForm.type}
                onChange={e => setItemForm(prev => ({ ...prev, type: e.target.value }))}
                required
              />
            </div>
            <div className="col-md-5">
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Price"
                value={itemForm.price}
                onChange={e => setItemForm(prev => ({ ...prev, price: e.target.value }))}
                required
                min="0"
              />
            </div>
            <div className="col-md-2">
              <button type="submit" className={`btn ${editingItemIndex !== null ? 'btn-warning' : 'btn-success'} w-100`}>
                {editingItemIndex !== null ? 'Update' : 'Add'}
              </button>
            </div>
          </form>
          {/* Items Table */}
          {formData.items.length > 0 && (
            <div className="table-responsive mt-3">
              <table className="table table-sm table-bordered align-middle">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items.map((item, idx) => (
                    <tr key={item.id}>
                      <td>{item.type}</td>
                      <td>{item.price}</td>
                      <td>
                        <button type="button" className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEditItem(idx)}>
                          Edit
                        </button>
                        <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteItem(idx)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-end gap-2">
          {editingService && (
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => {
                setFormData({ title: '', subtitle: '', status: 'Active', items: [] });
                setItemForm({ type: '', price: '' });
                setEditingItemIndex(null);
              }}
            >
              Cancel
            </button>
          )}
          <button type="submit" className="btn btn-primary">
            {editingService ? 'Update Service' : 'Add Service'}
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default ServiceForm; 