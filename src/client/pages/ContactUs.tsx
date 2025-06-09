import React from 'react'

const ContactUs = () => {
  return (
   
    <div className="row justify-content-center mt-5">
    <div className="col-md-8">
      <div className="card border-0 shadow-lg">
        <div className="card-body p-5 text-center">
          <h2 className="display-5 fw-bold text-dark mb-4">تواصل معنا</h2>
          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 mb-3">
                  <i className="fas fa-phone fa-2x text-primary"></i>
                </div>
                <h3 className="h5 fw-bold mb-2">اتصل بنا</h3>
                <p className="text-muted mb-0">+972528546620</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 mb-3">
                  <i className="fas fa-envelope fa-2x text-primary"></i>
                </div>
                <h3 className="h5 fw-bold mb-2">البريد الإلكتروني</h3>
                <p className="text-muted mb-0">info@clinic.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 mb-3">
                  <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <h3 className="h5 fw-bold mb-2">العنوان</h3>
                <p className="text-muted mb-0">الطيرة المثلث، إسرائيل</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://wa.me/972090222222" className="btn btn-success btn-lg">
              <i className="fab fa-whatsapp me-2"></i>
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactUs