// src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data - replace with actual API call
    const fetchPosts = async () => {
      try {
        // Example data - replace with your actual API endpoint
        const dummyData: Post[] = [
          {
            id: 1,
            title: "أحدث خدمات ",
            body: "اكتشف أحدث خدمات  والعناية بالبشرة في عيادتنا"
          },
          {
            id: 2,
            title: "عروض خاصة",
            body: "استمتع بخصومات حصرية على خدماتنا المميزة"
          }
        ];
        setPosts(dummyData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-dark mb-3">مرحباً بك في عيادة </h1>
                <p className="lead text-muted">اكتشف خدماتنا المميزة واعتنِ بجمالك</p>
              </div>

              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">جاري التحميل...</span>
                  </div>
                </div>
              ) : (
                <div className="row g-4 mb-5">
                  {posts.map((post) => (
                    <div key={post.id} className="col-md-6">
                      <div className="card h-100 bg-light">
                        <div className="card-body p-4">
                          <h2 className="h5 fw-bold text-dark mb-3">{post.title}</h2>
                          <p className="text-muted mb-0">{post.body}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
