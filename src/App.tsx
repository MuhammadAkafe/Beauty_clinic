// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MenuBar from './components/MenuBar';

const HomePage = lazy(() => import('./client/pages/Home'));
const LoginPage = lazy(() => import('./client/pages/Login'));
const RegisterPage = lazy(() => import('./client/pages/Register'));
const ServicesPage = lazy(() => import('./client/pages/Services'));
const AboutPage = lazy(() => import('./client/pages/About'));
const LocationPage = lazy(() => import('./client/pages/Location'));
const NotFoundPage = lazy(() => import('./client/pages/NotFound'));
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
