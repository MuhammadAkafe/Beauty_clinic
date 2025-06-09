import React from 'react';

const Location: React.FC = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-10">
        <div className="card border-0 shadow-lg">
          <div className="card-body p-5">
            <h2 className="display-5 fw-bold text-primary mb-4 text-center">موقعنا</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="h-100">
                  <div className="mb-4">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.915715729!2d35.0017!3d32.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9c2e5b4b3f%3A0x1c3c3c3c3c3c3c3c!2s%D7%93%D7%90%D7%95%D7%93%20%D7%A8%D7%90%D7%96%D7%A7!5e0!3m2!1siw!2sil!4v1620000000000!5m2!1siw!2sil" 
                      style={{ border: 0, width: '100%', height: '400px' }} 
                      allowFullScreen 
                      loading="lazy"
                      className="rounded-3 shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h4 fw-bold mb-4 text-primary">كيف تصل إلينا</h3>
                    <div className="mb-4">
                      <h4 className="h6 fw-bold mb-2 text-primary">بالسيارة</h4>
                      <p className="text-muted">
                        يمكنك الوصول إلينا بسهولة عبر شارع الرئيسي. موقف سيارات مجاني في المبنى مقابل بيت الضيافه
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary rounded-circle p-3">
                          <i className="fas fa-map-marker-alt text-white"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1 text-primary">العنوان</h4>
                          <p className="text-muted mb-0">الطيرة المثلث، إسرائيل</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary rounded-circle p-3">
                          <i className="fas fa-clock text-white"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1 text-primary">ساعات العمل</h4>
                          <p className="text-muted mb-0">الأحد - الخميس: 9:00 صباحاً - 8:00 مساءً</p>
                          <p className="text-muted mb-0">الجمعة: 9:00 صباحاً - 2:00 مساءً</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-primary rounded-circle p-3">
                          <i className="fas fa-parking text-white"></i>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-1 text-primary">موقف سيارات</h4>
                          <p className="text-muted mb-0">موقف سيارات مجاني متوفر للعملاء</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <a 
                      href="https://maps.google.com/?q=32.0853,34.7817693" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary btn-lg w-100"
                      style={{
                        padding: '1rem 2rem',
                        borderRadius: '12px',
                        boxShadow: '0 4px 6px rgba(13, 110, 253, 0.2)',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <i className="fas fa-directions me-2 "></i>
                      احصل على الاتجاهات
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location; 