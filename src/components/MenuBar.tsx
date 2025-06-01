import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const MenuBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm" dir="rtl">
      <Container>
        <Link to="/" className="navbar-brand">الرئيسية</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/about" className="nav-link px-3">من نحن</Link>
            <Link to="/services" className="nav-link px-3">الخدمات</Link>
            <Link to="/location" className="nav-link px-3">موقعنا</Link>
            <Link to="/login" className="nav-link px-3">تسجيل الدخول</Link>
            <Link to="/register" className="nav-link px-3">إنشاء حساب</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuBar; 