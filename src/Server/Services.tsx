import React from 'react';

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
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-hands text-success fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">التدليك العلاجي</h2>
                  </div>
                  <span className="badge bg-success rounded-pill">جلسة</span>
                </div>
                <p className="text-muted mb-4">
                  خدمات تدليك متخصصة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تدليك العضلات العميق</span>
                    <span className="text-success fw-bold">300 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تدليك الأنسجة الرخوة</span>
                    <span className="text-success fw-bold">250 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تدليك نقاط الضغط</span>
                    <span className="text-success fw-bold">280 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-success w-100">
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
                    <div className="bg-info bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-temperature-high text-info fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">العلاج بالحرارة والبرودة</h2>
                  </div>
                  <span className="badge bg-info rounded-pill">جلسة</span>
                </div>
                <p className="text-muted mb-4">
                  علاجات متقدمة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالموجات فوق الصوتية</span>
                    <span className="text-info fw-bold">220 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالتبريد</span>
                    <span className="text-info fw-bold">180 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالأشعة تحت الحمراء</span>
                    <span className="text-info fw-bold">200 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-info w-100">
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
                    <div className="bg-warning bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-dumbbell text-warning fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">تمارين إعادة التأهيل</h2>
                  </div>
                  <span className="badge bg-warning rounded-pill">برنامج</span>
                </div>
                <p className="text-muted mb-4">
                  برامج تأهيلية متخصصة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تمارين تقوية العضلات</span>
                    <span className="text-warning fw-bold">350 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تمارين التوازن</span>
                    <span className="text-warning fw-bold">300 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تمارين المرونة</span>
                    <span className="text-warning fw-bold">280 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-warning w-100">
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
                    <div className="bg-info bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-water text-info fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">العلاج المائي</h2>
                  </div>
                  <span className="badge bg-info rounded-pill">جلسة</span>
                </div>
                <p className="text-muted mb-4">
                  علاجات مائية متخصصة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالماء الساخن</span>
                    <span className="text-info fw-bold">250 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>تمارين العلاج المائي</span>
                    <span className="text-info fw-bold">300 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالتدليك المائي</span>
                    <span className="text-info fw-bold">280 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-info w-100">
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
                    <div className="bg-success bg-opacity-10 rounded-circle p-3">
                      <i className="fas fa-bolt text-success fa-lg"></i>
                    </div>
                    <h2 className="h4 fw-bold text-dark mb-0">العلاج الكهربائي</h2>
                  </div>
                  <span className="badge bg-success rounded-pill">جلسة</span>
                </div>
                <p className="text-muted mb-4">
                  علاجات كهربائية متقدمة:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>التحفيز الكهربائي</span>
                    <span className="text-success fw-bold">220 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالتيار المتداخل</span>
                    <span className="text-success fw-bold">250 ريال</span>
                  </li>
                  <li className="mb-3 d-flex justify-content-between align-items-center">
                    <span>العلاج بالتحفيز العصبي</span>
                    <span className="text-success fw-bold">280 ريال</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <a href="tel:+972524366637" className="btn btn-outline-success w-100">
                    <i className="fas fa-phone me-2"></i>
                    احجز موعد
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                <h2 className="display-5 fw-bold text-dark mb-4 text-center">موقعنا</h2>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="h-100">
                      <div className="mb-4">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.915715729!2d35.0017!3d32.2672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9c2e5b4b3f%3A0x1c3c3c3c3c3c3c3c!2s%D7%93%D7%90%D7%95%D7%93%20%D7%A8%D7%90%D7%96%D7%A7!5e0!3m2!1siw!2sil!4v1620000000000!5m2!1siw!2sil" 
                          style={{ border: 0, width: '400px', height: '400px' }} 
                          allowFullScreen 
                          loading="lazy"
                          className="rounded-3 shadow-lg"
                        ></iframe>
                      </div>
                      <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <div className="bg-primary rounded-circle p-3">
                            <i className="fas fa-map-marker-alt text-white"></i>
                          </div>
                          <div>
                            <h4 className="h6 fw-bold mb-1">العنوان</h4>
                            <p className="text-muted mb-0">الطيرة المثلث، إسرائيل</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                          <div className="bg-primary rounded-circle p-3">
                            <i className="fas fa-clock text-white"></i>
                          </div>
                          <div>
                            <h4 className="h6 fw-bold mb-1">ساعات العمل</h4>
                            <p className="text-muted mb-0">الأحد - الخميس: 9:00 صباحاً - 8:00 مساءً</p>
                            <p className="text-muted mb-0">الجمعة: 9:00 صباحاً - 2:00 مساءً</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center gap-3">
                          <div className="bg-primary rounded-circle p-3">
                            <i className="fas fa-parking text-white"></i>
                          </div>
                          <div>
                            <h4 className="h6 fw-bold mb-1">موقف سيارات</h4>
                            <p className="text-muted mb-0">موقف سيارات مجاني متوفر للعملاء</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100 d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="h4 fw-bold mb-4">كيف تصل إلينا</h3>
                        <div className="mb-4">
                          <h4 className="h6 fw-bold mb-2">بالسيارة</h4>
                          <p className="text-muted">
                            يمكنك الوصول إلينا بسهولة عبر شارع الرئيسي. موقف سيارات مجاني في المبنى مقابل بيت الضيافه
                          </p>
                        </div>
                        <div className="mb-4">
                          <h4 className="h6 fw-bold mb-2">بالحافلة</h4>
                          <p className="text-muted">
                            خطوط الحافلات 1، 2، 3 تتوقف بالقرب من العيادة. محطة الحافلات على بعد 5 دقائق سيراً على الأقدام.
                          </p>
                        </div>
                        <div>
                          <h4 className="h6 fw-bold mb-2">بالقطار</h4>
                          <p className="text-muted">
                            محطة القطار المركزية على بعد 10 دقائق سيراً على الأقدام من العيادة.
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <a 
                          href="https://maps.google.com/?q=32.0853,34.7817693" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-primary btn-lg w-100"
                        >
                          <i className="fas fa-directions me-2"></i>
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
