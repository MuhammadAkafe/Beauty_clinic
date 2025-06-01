import React from 'react';
import Location from './Location';

const Services: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8">
              <h1 className="display-3 fw-bold mb-3">خدماتنا</h1>
              <p className="lead mb-0">اكتشف خدماتنا المميزة في عياده الطب الطبيعي</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* Services Section */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100 hover-shadow transition">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-heartbeat text-primary fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">العلاج الطبيعي</h2>
                  </div>
                  <span className="badge bg-primary rounded-pill">الأكثر طلباً</span>
                </div>
                <p className="text-muted mb-4">
                  برامج علاجية متخصصة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>علاج آلام المفاصل</span>
                    <span className="text-primary fw-bold">200 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>إعادة تأهيل الإصابات</span>
                    <span className="text-primary fw-bold">250 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>علاج آلام الظهر والرقبة</span>
                    <span className="text-primary fw-bold">180 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-primary w-100">
                    <i className="fas fa-phone me-2"></i>
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100 hover-shadow transition">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-hands text-primary fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">التدليك العلاجي</h2>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-check text-primary"></i>
                    </div>
                    <div>
                      <span className="badge bg-primary rounded-pill">جلسة</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  خدمات تدليك متخصصة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تدليك العضلات العميق</span>
                    <span className="text-primary fw-bold">300 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تدليك الأنسجة الرخوة</span>
                    <span className="text-primary fw-bold">250 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تدليك نقاط الضغط</span>
                    <span className="text-primary fw-bold">280 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-primary w-100">
                    <i className="fas fa-phone me-2"></i>
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100 hover-shadow transition">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-temperature-high text-primary fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">العلاج بالحرارة والبرودة</h2>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-check text-primary"></i>
                    </div>
                    <div>
                      <span className="badge bg-primary rounded-pill">جلسة</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  علاجات متقدمة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالموجات فوق الصوتية</span>
                    <span className="text-primary fw-bold">220 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالتبريد</span>
                    <span className="text-primary fw-bold">180 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالأشعة تحت الحمراء</span>
                    <span className="text-primary fw-bold">200 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-primary w-100">
                    <i className="fas fa-phone me-2"></i>
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100 hover-shadow transition">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-dumbbell text-primary fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">تمارين إعادة التأهيل</h2>
                  </div>
                  <span className="badge bg-primary rounded-pill">برنامج</span>
                </div>
                <p className="text-muted mb-4">
                  برامج تأهيلية متخصصة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تمارين تقوية العضلات</span>
                    <span className="text-primary fw-bold">350 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تمارين التوازن</span>
                    <span className="text-primary fw-bold">300 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تمارين المرونة</span>
                    <span className="text-primary fw-bold">280 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-primary w-100">
                    <i className="fas fa-phone me-2"></i>
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100 hover-shadow transition">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-water text-primary fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">العلاج المائي</h2>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-check text-primary"></i>
                    </div>
                    <div>
                      <span className="badge bg-primary rounded-pill">جلسة</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted mb-4">
                  علاجات مائية متخصصة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالماء الساخن</span>
                    <span className="text-primary fw-bold">250 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تمارين العلاج المائي</span>
                    <span className="text-primary fw-bold">300 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالتدليك المائي</span>
                    <span className="text-primary fw-bold">280 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-primary w-100">
                    <i className="fas fa-phone me-2"></i>
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-lg h-100 hover-shadow transition">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-bolt text-primary fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">العلاج الكهربائي</h2>
                  </div>
                  <span className="badge bg-primary rounded-pill">جلسة</span>
                </div>
                <p className="text-muted mb-4">
                  علاجات كهربائية متقدمة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>التحفيز الكهربائي</span>
                    <span className="text-primary fw-bold">220 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالتيار المتداخل</span>
                    <span className="text-primary fw-bold">250 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالتحفيز العصبي</span>
                    <span className="text-primary fw-bold">280 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-primary w-100">
                    <i className="fas fa-phone me-2"></i>
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Contact Section */}
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
                      <p className="text-muted mb-0">+972 52 436 6637</p>
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
                  <a href="https://wa.me/972524366637" className="btn btn-success btn-lg">
                    <i className="fab fa-whatsapp me-2"></i>
                    تواصل عبر واتساب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
