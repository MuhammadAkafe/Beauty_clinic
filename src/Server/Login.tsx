import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axios_instance';
interface LoginFormData {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  accessToken?: string;
}

const authenticateUser = async (credentials: LoginFormData): Promise<LoginResponse> => {
    try {
        const response = await axiosInstance.post<LoginResponse>('/Login', credentials);
        return response.data;
    } 
    catch (error:any) 
    {
        console.error('Error logging in:', error);
        return { message: error.response.data.message, success: false };
    }
};

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await authenticateUser(formData);
    if (result.success) {
      setIsSuccess(result.success);
      setMessage(result.message);
      setLoading(false);
      setMessage('');
      navigate('/register');
    } 
    else {
      setIsSuccess(result.success);
      setMessage(result.message);
      setLoading(false);
    }

  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: 'linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%)',
      padding: '20px'
    }}>
      <div className="card shadow-lg border-0" style={{ 
        maxWidth: '400px', 
        width: '100%',
        borderRadius: '16px',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
      }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h1 className="h3 fw-bold text-primary mb-2">تسجيل الدخول</h1>
            <p className="text-muted">مرحباً بك مرة أخرى</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-end">
              <label htmlFor="email" className="form-label fw-semibold text-primary">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-control form-control-lg"
                placeholder="أدخل بريدك الإلكتروني"
                dir="rtl"
                style={{ borderRadius: '12px' }}
              />
            </div>

            <div className="mb-4 text-end">
              <label htmlFor="password" className="form-label fw-semibold text-primary">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="form-control form-control-lg"
                placeholder="أدخل كلمة المرور"
                dir="rtl"
                style={{ borderRadius: '12px' }}
              />
            </div>

            {message && (
              <div className={`alert ${isSuccess ? 'alert-primary' : 'alert-danger'} text-center rounded-3`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-100 py-3 fw-semibold rounded-3"
              style={{ 
                fontSize: '1.1rem',
                boxShadow: '0 4px 6px rgba(13, 110, 253, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="mt-4 pt-3 border-top text-center">
            <p className="text-muted mb-3">
              ليس لديك حساب؟ <Link to="/register" className="text-decoration-none fw-semibold text-primary">إنشاء حساب جديد</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 