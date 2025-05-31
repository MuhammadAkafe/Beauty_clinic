import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
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
        const response = await axios.post<LoginResponse>('http://localhost:3000/auth/Login', credentials);
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
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div className="card shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h1 className="h3 fw-bold text-dark mb-2">تسجيل الدخول</h1>
            <p className="text-muted">مرحباً بك مرة أخرى</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-end">
              <label htmlFor="email" className="form-label fw-semibold">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-control"
                placeholder="أدخل بريدك الإلكتروني"
                dir="rtl"
              />
            </div>

            <div className="mb-3 text-end">
              <label htmlFor="password" className="form-label fw-semibold">
                كلمة المرور
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="form-control"
                placeholder="أدخل كلمة المرور"
                dir="rtl"
              />
            </div>

            {message && (
              <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} text-center`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-100 py-2 fw-semibold"
              style={{ backgroundColor: '#667eea', borderColor: '#667eea' }}
            >
              {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            </button>
          </form>

          <div className="mt-4 pt-3 border-top text-center">
            <p className="text-muted mb-3">
              ليس لديك حساب؟ <Link to="/register" className="text-decoration-none fw-semibold" style={{ color: '#667eea' }}>إنشاء حساب جديد</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 