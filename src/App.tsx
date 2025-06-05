// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MenuBar from './components/MenuBar';

const HomePage = lazy(() => import('./Server/Home'));
const LoginPage = lazy(() => import('./Server/Login'));
const RegisterPage = lazy(() => import('./Server/Register'));
const ServicesPage = lazy(() => import('./Server/Services'));
const AboutPage = lazy(() => import('./Server/About'));
const LocationPage = lazy(() => import('./Server/Location'));
const NotFoundPage = lazy(() => import('./Server/NotFound'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));

function App() {
  return (
    <Router basename="/">
      <div className="app-container">
        <MenuBar />
        <main className="main-content">
          <Suspense fallback={<div className="loading">جاري التحميل...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/location" element={<LocationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
