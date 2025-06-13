import React from 'react'
import { Item, Service_form } from '../../types/Service';

interface props {
    editingServiceform: Service_form | null;
    onEditComplete?: () => void;
    setFormData: (formData: Omit<Service_form, 'service_id'>) => void;
    setInputFields: (inputFields: Item[]) => void;
    isSubmitting: boolean;
}


const Update_Service = ({editingServiceform, onEditComplete, setFormData, setInputFields, isSubmitting}: props) => 
    {
  return (
    <>
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
) : 
(
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
    </>
  )
}

export default Update_Service