import React, { useState, useEffect } from 'react';
import { Service_form, Item } from '../../types/Service';
import { ServiceStatus } from '../../types/Service';
import { addServiceServer, updateServiceServer } from '../../server/API';
import Add_items from './Add_items';
import Update_Service from './Update_Service';

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
    } 
    finally {
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


          <Add_items inputFields={inputFields} handleInputChange={handleInputChange} handleAddFields={handleAddFields} handleRemoveFields={handleRemoveFields} />

          <Update_Service editingServiceform={editingServiceform || null} onEditComplete={onEditComplete} setFormData={setFormData} setInputFields={setInputFields} isSubmitting={isSubmitting} />




        </form>
      </div>
    </div>
  );
};

export default ServiceForm; 