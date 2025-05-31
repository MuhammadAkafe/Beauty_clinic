import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavigateFunction } from 'react-router-dom';
interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface RegisterResponse {
  success: boolean;
  message: string;
}

const create_User = async (userData: RegisterFormData): Promise<RegisterResponse> => {
  try {
    const response = await axios.post('http://localhost:3000/auth/Register', userData);
    return response.data;
  } 
  catch (error) {
    console.error('Error registering user:', error);
    return { success: false, message: 'حدث خطأ أثناء إنشاء الحساب' };
  }
};  


export default function Register() {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });
  const navigate:NavigateFunction= useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'الاسم مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
    }
    
    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    
    if (!formData.confirm_password) {
      newErrors.confirm_password = 'تأكيد كلمة المرور مطلوب';
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = 'كلمات المرور غير متطابقة';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof RegisterFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    setMessage('');
    const result = await create_User(formData);
    if (result.success) {
      setIsSuccess(result.success);
      setLoading(false);
      setFormData({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
      });
      setErrors({});
      setMessage(result.message);
    }
    else {
      setIsSuccess(result.success);
      setMessage(result.message);
      setLoading(false);
    }

  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{
      background: 'linear-gradient(135deg, #00b4db 0%, #0083b0 100%)',
      padding: '20px'
    }}>
      <div className="card shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h1 className="h3 fw-bold text-dark mb-2">إنشاء حساب جديد</h1>
            <p className="text-muted">انضم إلينا اليوم</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-end">
              <label htmlFor="name" className="form-label fw-semibold">
                الاسم الكامل
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                placeholder="أدخل اسمك الكامل"
                dir="rtl"
              />
              {errors.username && <div className="invalid-feedback text-end">{errors.username}</div>}
            </div>

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
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="أدخل بريدك الإلكتروني"
                dir="rtl"
              />
              {errors.email && <div className="invalid-feedback text-end">{errors.email}</div>}
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
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                placeholder="أدخل كلمة المرور"
                dir="rtl"
              />
              {errors.password && <div className="invalid-feedback text-end">{errors.password}</div>}
            </div>

            <div className="mb-4 text-end">
              <label htmlFor="confirmPassword" className="form-label fw-semibold">
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleInputChange}
                className={`form-control ${errors.confirm_password ? 'is-invalid' : ''}`}
                placeholder="أدخل كلمة المرور مرة أخرى"
                dir="rtl"
              />
              {errors.confirm_password && <div className="invalid-feedback text-end">{errors.confirm_password}</div>}
            </div>

            {message && (
              <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} text-center mb-4`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-100 py-2 fw-semibold"
              style={{ backgroundColor: '#00b4db', borderColor: '#00b4db' }}
            >
              {loading ? 'جاري إنشاء الحساب...' : 'إنشاء حساب'}
            </button>
          </form>

          <div className="mt-4 pt-3 border-top text-center">
            <p className="text-muted mb-0">
              لديك حساب بالفعل؟ <Link to="/login" className="text-decoration-none fw-semibold" style={{ color: '#00b4db' }}>تسجيل الدخول</Link>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
} 