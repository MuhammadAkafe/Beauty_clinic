import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card border-0 shadow-lg">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  <h2 className="display-5 fw-bold text-dark mb-4">من نحن</h2>
                  <p className="lead text-muted mb-4">
                    نحن عيادة متخصصة في الطب الطبيعي، نقدم خدمات علاجية متكاملة باستخدام أحدث التقنيات والأساليب العلمية.
                  </p>
                  <div className="d-flex gap-3 mb-4">
                    <div className="text-center">
                      <h3 className="h2 fw-bold text-primary mb-0">15+</h3>
                      <p className="text-muted mb-0">سنوات الخبرة</p>
                    </div>
                    <div className="text-center">
                      <h3 className="h2 fw-bold text-primary mb-0">5000+</h3>
                      <p className="text-muted mb-0">حالة ناجحة</p>
                    </div>
                    <div className="text-center">
                      <h3 className="h2 fw-bold text-primary mb-0">98%</h3>
                      <p className="text-muted mb-0">رضا المرضى</p>
                    </div>
                  </div>
                  <p className="text-muted">
                    نسعى دائماً لتقديم أفضل الخدمات العلاجية لمرضانا، مع ضمان الرعاية الصحية المتميزة والعلاج الفعال.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="position-relative">
                    <div className="ratio ratio-4x3 mb-4">
                      <img 
                        src="/assets/clinic.jpg" 
                        alt="عيادة الطب الطبيعي" 
                        className="rounded-3 shadow-lg w-100 h-100"
                        style={{ 
                          objectFit: 'cover',
                          maxHeight: '400px',
                          width: '100%',
                          height: 'auto'
                        }}
                      />
                    </div>
                    <div className="position-absolute bottom-0 start-0 translate-middle-y ms-4">
                      <div className="bg-white p-3 rounded-3 shadow-lg">
                        <div className="d-flex align-items-center gap-3">
                          <div className="bg-primary rounded-circle p-3">
                            <i className="fas fa-check text-white"></i>
                          </div>
                          <div>
                            <h4 className="h6 fw-bold mb-0">معتمدة دولياً</h4>
                            <p className="text-muted small mb-0">شهادات عالمية</p>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default About; 