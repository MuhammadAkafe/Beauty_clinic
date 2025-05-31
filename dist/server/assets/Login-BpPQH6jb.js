import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const authenticateUser = async (credentials) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/Login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    return { message: error.response.data.message, success: false };
  }
};
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await authenticateUser(formData);
    if (result.success) {
      setIsSuccess(result.success);
      setMessage(result.message);
      setLoading(false);
      setMessage("");
      navigate("/register");
    } else {
      setIsSuccess(result.success);
      setMessage(result.message);
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-vh-100 d-flex align-items-center justify-content-center", style: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px"
  }, children: /* @__PURE__ */ jsx("div", { className: "card shadow-lg", style: { maxWidth: "400px", width: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "card-body p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "h3 fw-bold text-dark mb-2", children: "تسجيل الدخول" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "مرحباً بك مرة أخرى" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-3 text-end", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "form-label fw-semibold", children: "البريد الإلكتروني" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            value: formData.email,
            onChange: handleInputChange,
            required: true,
            className: "form-control",
            placeholder: "أدخل بريدك الإلكتروني",
            dir: "rtl"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-3 text-end", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "form-label fw-semibold", children: "كلمة المرور" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            id: "password",
            name: "password",
            value: formData.password,
            onChange: handleInputChange,
            required: true,
            className: "form-control",
            placeholder: "أدخل كلمة المرور",
            dir: "rtl"
          }
        )
      ] }),
      message && /* @__PURE__ */ jsx("div", { className: `alert ${isSuccess ? "alert-success" : "alert-danger"} text-center`, children: message }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "btn btn-primary w-100 py-2 fw-semibold",
          style: { backgroundColor: "#667eea", borderColor: "#667eea" },
          children: loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-top text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-muted mb-3", children: [
      "ليس لديك حساب؟ ",
      /* @__PURE__ */ jsx(Link, { to: "/register", className: "text-decoration-none fw-semibold", style: { color: "#667eea" }, children: "إنشاء حساب جديد" })
    ] }) })
  ] }) }) });
}
export {
  Login as default
};
