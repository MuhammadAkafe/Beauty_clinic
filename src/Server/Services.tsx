import React, { useEffect, useState } from 'react';
import { Services_Api, Item } from '../types/types';
import axiosInstance from '../axios_instance';
const Services: React.FC = () => {
  const [services, setServices] = useState<Services_Api[]>([]);

  const getServices = async () => {
    const response = await axiosInstance.get('/service/get_all_services/1', {
    });
    console.log(response.data.services);
    setServices(response.data.services);
  }

  useEffect(() => {
    getServices();
  }, []);

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
          {services.map((service: Services_Api, index: number) => (
            <div key={index} className="col-md-4">
              <div className="card border-0 shadow-lg h-100 hover-shadow transition">
                <div className="card-body p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-primary bg-opacity-10 rounded-circle p-3">
                        <i className="fas fa-heartbeat text-primary fa-lg"></i>
                      </div>
                      <h2 className="h4 fw-bold text-dark mb-0">{service.title}</h2>
                    </div>
                    <span className="badge bg-primary rounded-pill">{service.status}</span>
                  </div>
                  <div className="flex-grow-1">
                    <p className="text-muted mb-4">
                     {service.sub_title}
                    </p>
                    <ul className="list-unstyled">
                      {service.items.map((item: Item, index: number) => (
                        <li key={index} className="mb-3 d-flex justify-content-between align-items-center">
                          <span>{item.type}</span>
                          <span className="text-primary fw-bold">{item.price} ₪</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <a href="tel:+972090222222" className="btn btn-outline-primary w-100">
                      <i className="fas fa-phone me-2"></i>
                      احجز موعد
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      </div>
    </div>
  );
};

export default Services;
