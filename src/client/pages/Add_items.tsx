import React from 'react'
import { Item } from '../../types/types';

interface props {
    inputFields: Item[];
    handleInputChange: (index: number, field: keyof Item, value: string | number) => void;
    handleAddFields: () => void;
    handleRemoveFields: (index: number) => void;
}


const Add_items = ({inputFields, handleInputChange, handleAddFields, handleRemoveFields}: props) => {
  return (
    <div className="mb-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <label className="form-label mb-0">Items</label>
      <small className="text-muted">Add service items with their prices</small>
    </div>
    
    {inputFields.map((field: Item, index: number) => (
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
  )
}

export default Add_items