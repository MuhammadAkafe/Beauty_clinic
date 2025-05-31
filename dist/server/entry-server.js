import { jsx, jsxs } from "react/jsx-runtime";
import { lazy, Suspense, StrictMode } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { Link, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
const MenuBar = () => {
  return /* @__PURE__ */ jsx(Navbar, { bg: "light", expand: "lg", className: "shadow-sm", dir: "rtl", children: /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "navbar-brand", children: "الرئيسية" }),
    /* @__PURE__ */ jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }),
    /* @__PURE__ */ jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: /* @__PURE__ */ jsxs(Nav, { className: "ms-auto", children: [
      /* @__PURE__ */ jsx(Link, { to: "/about", className: "nav-link px-3", children: "من نحن" }),
      /* @__PURE__ */ jsx(Link, { to: "/services", className: "nav-link px-3", children: "الخدمات" }),
      /* @__PURE__ */ jsx(Link, { to: "/login", className: "nav-link px-3", children: "تسجيل الدخول" }),
      /* @__PURE__ */ jsx(Link, { to: "/register", className: "nav-link px-3", children: "إنشاء حساب" })
    ] }) })
  ] }) });
};
const HomePage = lazy(() => import("./assets/Home-DPm-tpkR.js"));
const LoginPage = lazy(() => import("./assets/Login-BpPQH6jb.js"));
const RegisterPage = lazy(() => import("./assets/Register-HemWRXhg.js"));
const ServicesPage = lazy(() => import("./assets/Services-D-QST6cQ.js"));
const AboutPage = lazy(() => import("./assets/About-CifZVopo.js"));
function App() {
  return /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsxs("div", { className: "app-container", children: [
    /* @__PURE__ */ jsx(MenuBar, {}),
    /* @__PURE__ */ jsx("main", { className: "main-content", children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx("div", { className: "loading", children: "جاري التحميل..." }), children: /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/services", element: /* @__PURE__ */ jsx(ServicesPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/login", element: /* @__PURE__ */ jsx(LoginPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "/register", element: /* @__PURE__ */ jsx(RegisterPage, {}) }),
      /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) })
    ] }) }) })
  ] }) });
}
async function render(_url, options) {
  return renderToPipeableStream(
    /* @__PURE__ */ jsx(StrictMode, { children: /* @__PURE__ */ jsx(App, {}) }),
    options
  );
}
export {
  render
};
