import React, { useState } from 'react';
import { Service, Item } from '../types/Service';
import { useServices } from './useServices';
import ServiceForm from './ServiceForm';
import ServiceList from './ServiceList';

const AdminDashboard: React.FC = () => {
  const {
    services,
    addService,
    updateService,
    deleteService,
    loading,
    error,
  } = useServices();

  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<Omit<Service, 'id'>>({
    title: '',
    subtitle: '',
    status: 'Active',
    items: [],
  });
  const [itemForm, setItemForm] = useState<{ type: string; price: string }>({ type: '', price: '' });
  const [editingItemIndex, setEditingItemIndex] = useState<number | null>(null);

  // Item handlers
  const handleAddOrEditItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemForm.type.trim() || !itemForm.price.trim() || isNaN(Number(itemForm.price))) return;
    const newItem: Item = {
      id: editingItemIndex !== null ? formData.items[editingItemIndex].id : Date.now().toString(),
      type: itemForm.type,
      price: Number(itemForm.price),
    };
    if (editingItemIndex !== null) {
      setFormData((prev) => ({
        ...prev,
        items: prev.items.map((item, idx) => (idx === editingItemIndex ? newItem : item)),
      }));
      setEditingItemIndex(null);
    } else {
      setFormData((prev) => ({ ...prev, items: [...prev.items, newItem] }));
    }
    setItemForm({ type: '', price: '' });
  };
  const handleEditItem = (idx: number) => {
    setEditingItemIndex(idx);
    setItemForm({
      type: formData.items[idx].type,
      price: formData.items[idx].price.toString(),
    });
  };
  const handleDeleteItem = (idx: number) => {
    setFormData((prev) => ({ ...prev, items: prev.items.filter((_, i) => i !== idx) }));
    if (editingItemIndex === idx) {
      setEditingItemIndex(null);
      setItemForm({ type: '', price: '' });
    }
  };

  // Service form submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingService) {
      await updateService({ ...editingService, ...formData });
      setEditingService(null);
    } else {
      await addService(formData);
    }
    setFormData({ title: '', subtitle: '', status: 'Active', items: [] });
    setItemForm({ type: '', price: '' });
    setEditingItemIndex(null);
  };

  // Edit service
  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      subtitle: service.subtitle,
      status: service.status,
      items: service.items,
    });
    setItemForm({ type: '', price: '' });
    setEditingItemIndex(null);
  };

  // Delete service
  const handleDelete = async (id: string) => {
    await deleteService(id);
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">Services Management</h1>
      <ServiceForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit}
        editingService={editingService}
        itemForm={itemForm}
        setItemForm={setItemForm}
        editingItemIndex={editingItemIndex}
        setEditingItemIndex={setEditingItemIndex}
        handleAddOrEditItem={handleAddOrEditItem}
        handleEditItem={handleEditItem}
        handleDeleteItem={handleDeleteItem}
      />
      <ServiceList
        services={services}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {loading && <div className="mt-3 alert alert-info">Loading...</div>}
      {error && <div className="mt-3 alert alert-danger">{error}</div>}
    </div>
  );
};

export default AdminDashboard; 