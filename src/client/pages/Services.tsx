import React, { useEffect, useState } from 'react';
import { ServicesApi, Item } from '../../types/types';
import { getServicesServer } from '../../server/API';
import ContactUs from './ContactUs';

const Services: React.FC = () => {
  const [services, setServices] = useState<ServicesApi[]>([]);
  const [loading, setLoading] = useState(true);
  const getServices = async () => 
  {
    try
    {
      setLoading(true);
      const servies = await getServicesServer();
      setServices(servies);
     
    }
    catch (error)
    {
      console.log(error);
    }
    finally
    {
      setLoading(false);
    }
  }
  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>

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



{
  loading ? (
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-md-8">
          <h1 className="display-3 fw-bold mb-3">
            <i className="fas fa-spinner fa-spin"></i>
          </h1>
        </div>
      </div>
    </div>
  ):(
  <div className="container py-5">
  <div className="row g-4 mb-5">
    {services.length > 0 ? (
      services.map((service: ServicesApi, index: number) => (
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
    ))
    ) : 
    (
      <div className="col-md-12">
        <div className="alert alert-info">لا يوجد خدمات متاحة حاليا</div>
      </div>
    )}
  </div>
</div>
)}











      
      <ContactUs />
    </div>
  );
};

export default Services;
