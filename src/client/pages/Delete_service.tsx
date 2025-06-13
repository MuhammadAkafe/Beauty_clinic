import React from 'react'

interface Delete_serviesProps {
    showDeleteModal: boolean;
    setShowDeleteModal: (show: boolean) => void;
    handleConfirmDelete: () => Promise<void>;
}

function Delete_servies({showDeleteModal, setShowDeleteModal, handleConfirmDelete}: Delete_serviesProps) {
  return (
    <>
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
  )
}

export default Delete_servies