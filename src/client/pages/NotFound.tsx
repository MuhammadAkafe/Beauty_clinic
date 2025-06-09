import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      padding: '20px'
    }}>
      <div className="text-center">
        <h1 className="display-1 fw-bold text-white mb-4">404</h1>
        <h2 className="h3 text-white mb-4">عذراً، الصفحة غير موجودة</h2>
        <p className="text-white-50 mb-5">
          يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>
        <Link 
          to="/" 
          className="btn btn-light btn-lg px-5 py-3 rounded-3 fw-semibold"
          style={{
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 