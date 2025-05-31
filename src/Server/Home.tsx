// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const fetchData = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

export default function Home() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const posts = await fetchData();
        setData(posts);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-body p-5 text-center">
                <div className="spinner-border text-primary mb-4" role="status" style={{ width: '3rem', height: '3rem' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
                <h2 className="h4 text-dark mb-0">جاري التحميل...</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-dark mb-3">مرحباً بك في موقعنا</h1>
                <p className="lead text-muted">اكتشف محتوانا المميز</p>
              </div>

              {data.length > 0 && (
                <div className="card bg-light mb-5">
                  <div className="card-body p-4">
                    <h2 className="h5 fw-bold text-dark mb-3">أحدث المنشورات</h2>
                    <div className="post-preview">
                      <h3 className="h6 text-primary mb-2">{data[0].title}</h3>
                      <p className="text-muted mb-0">{data[0].body}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <Link 
                    to="/login" 
                    className="btn btn-primary btn-lg px-4 gap-3"
                  >
                    تسجيل الدخول
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-outline-primary btn-lg px-4"
                  >
                    إنشاء حساب
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
