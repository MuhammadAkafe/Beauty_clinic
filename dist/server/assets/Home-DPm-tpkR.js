import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadData = async () => {
      try {
        const posts = await fetchData();
        setData(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-md-8", children: /* @__PURE__ */ jsx("div", { className: "card shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-5 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "spinner-border text-primary mb-4", role: "status", style: { width: "3rem", height: "3rem" }, children: /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Loading..." }) }),
      /* @__PURE__ */ jsx("h2", { className: "h4 text-dark mb-0", children: "جاري التحميل..." })
    ] }) }) }) }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-md-8", children: /* @__PURE__ */ jsx("div", { className: "card shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-5", children: [
      /* @__PURE__ */ jsx("h1", { className: "display-4 fw-bold text-dark mb-3", children: "مرحباً بك في موقعنا" }),
      /* @__PURE__ */ jsx("p", { className: "lead text-muted", children: "اكتشف محتوانا المميز" })
    ] }),
    data.length > 0 && /* @__PURE__ */ jsx("div", { className: "card bg-light mb-5", children: /* @__PURE__ */ jsxs("div", { className: "card-body p-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "h5 fw-bold text-dark mb-3", children: "أحدث المنشورات" }),
      /* @__PURE__ */ jsxs("div", { className: "post-preview", children: [
        /* @__PURE__ */ jsx("h3", { className: "h6 text-primary mb-2", children: data[0].title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted mb-0", children: data[0].body })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "d-grid gap-3 d-sm-flex justify-content-sm-center", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/login",
          className: "btn btn-primary btn-lg px-4 gap-3",
          children: "تسجيل الدخول"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/register",
          className: "btn btn-outline-primary btn-lg px-4",
          children: "إنشاء حساب"
        }
      )
    ] }) })
  ] }) }) }) }) });
}
export {
  Home as default
};
