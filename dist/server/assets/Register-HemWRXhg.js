import { jsx, jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const create_User = async (userData) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/Register", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, message: "حدث خطأ أثناء إنشاء الحساب" };
  }
};
function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: ""
  });
  useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "الاسم مطلوب";
    }
    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صالح";
    }
    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }
    if (!formData.confirm_password) {
      newErrors.confirm_password = "تأكيد كلمة المرور مطلوب";
    } else if (formData.password !== formData.confirm_password) {
      newErrors.confirm_password = "كلمات المرور غير متطابقة";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: void 0
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    setMessage("");
    const result = await create_User(formData);
    if (result.success) {
      setIsSuccess(result.success);
      setLoading(false);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
      });
      setErrors({});
      setMessage(result.message);
    } else {
      setIsSuccess(result.success);
      setMessage(result.message);
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-vh-100 d-flex align-items-center justify-content-center", style: {
    background: "linear-gradient(135deg, #00b4db 0%, #0083b0 100%)",
    padding: "20px"
  }, children: /* @__PURE__ */ jsx("div", { className: "card shadow-lg", style: { maxWidth: "500px", width: "100%" }, children: /* @__PURE__ */ jsxs("div", { className: "card-body p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "h3 fw-bold text-dark mb-2", children: "إنشاء حساب جديد" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted", children: "انضم إلينا اليوم" })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-3 text-end", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "form-label fw-semibold", children: "الاسم الكامل" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "username",
            name: "username",
            value: formData.username,
            onChange: handleInputChange,
            className: `form-control ${errors.username ? "is-invalid" : ""}`,
            placeholder: "أدخل اسمك الكامل",
            dir: "rtl"
          }
        ),
        errors.username && /* @__PURE__ */ jsx("div", { className: "invalid-feedback text-end", children: errors.username })
      ] }),
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
            className: `form-control ${errors.email ? "is-invalid" : ""}`,
            placeholder: "أدخل بريدك الإلكتروني",
            dir: "rtl"
          }
        ),
        errors.email && /* @__PURE__ */ jsx("div", { className: "invalid-feedback text-end", children: errors.email })
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
            className: `form-control ${errors.password ? "is-invalid" : ""}`,
            placeholder: "أدخل كلمة المرور",
            dir: "rtl"
          }
        ),
        errors.password && /* @__PURE__ */ jsx("div", { className: "invalid-feedback text-end", children: errors.password })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4 text-end", children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "confirmPassword", className: "form-label fw-semibold", children: "تأكيد كلمة المرور" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "password",
            id: "confirm_password",
            name: "confirm_password",
            value: formData.confirm_password,
            onChange: handleInputChange,
            className: `form-control ${errors.confirm_password ? "is-invalid" : ""}`,
            placeholder: "أدخل كلمة المرور مرة أخرى",
            dir: "rtl"
          }
        ),
        errors.confirm_password && /* @__PURE__ */ jsx("div", { className: "invalid-feedback text-end", children: errors.confirm_password })
      ] }),
      message && /* @__PURE__ */ jsx("div", { className: `alert ${isSuccess ? "alert-success" : "alert-danger"} text-center mb-4`, children: message }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "btn btn-primary w-100 py-2 fw-semibold",
          style: { backgroundColor: "#00b4db", borderColor: "#00b4db" },
          children: loading ? "جاري إنشاء الحساب..." : "إنشاء حساب"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-top text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-muted mb-0", children: [
      "لديك حساب بالفعل؟ ",
      /* @__PURE__ */ jsx(Link, { to: "/login", className: "text-decoration-none fw-semibold", style: { color: "#00b4db" }, children: "تسجيل الدخول" })
    ] }) })
  ] }) }) });
}
export {
  Register as default
};
