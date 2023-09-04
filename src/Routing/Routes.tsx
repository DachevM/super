import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
import { Provider } from "react-redux";

import MainPage from "../Services/MainePage";
import Test from "../Test/test";
import { state } from "../RTK/state";

const Clients = lazy(
  async () => await import("../Components/Pages/Clients/Clients")
);
const Orders = lazy(
  async () => await import("../Components/Pages/Orders/Orders")
);
const Products = lazy(
  async () => await import("../Components/Pages/Products/Products")
);
const CategoriesMain = lazy(
  async () => await import("../Components/Pages/Categories/CategoriesMain")
);
const Cities = lazy(
  async () => await import("../Components/Pages/Cities/Cities")
);
const Banners = lazy(
  async () => await import("../Components/Pages/Banners/Banners")
);
const Promocode = lazy(
  async () => await import("../Components/Pages/Promocode/Promocode")
);
const AuthLogin = lazy(
  async () => await import("../Components/Auth/AuthLogin")
);
const Register = lazy(async () => await import("../Components/Auth/Register"));

const ProtocolMain = lazy(
  async () => await import("../Components/Pages/Protocols/ProtocolMain")
);
const SeminarsRequest = lazy(
  async () =>
    await import("../Components/Pages/Seminars/SeminarsRequest/SeminarsRequest")
);
const SeminarsFuture = lazy(
  async () =>
    await import("../Components/Pages/Seminars/SeminarsFuture/SeminarsFuture")
);
const SeminarsHistory = lazy(
  async () =>
    await import("../Components/Pages/Seminars/SeminarsHistory/SeminarsHistory")
);
const Brands = lazy(
  async () => await import("../Components/Pages/Brands/Brands")
);

const privateRoutes = [
  { path: "/products", element: <Products /> },
  { path: "/categories", element: <CategoriesMain /> },
  { path: "/clients", element: <Clients /> },
  { path: "/cities", element: <Cities /> },
  { path: "/brands", element: <Brands /> },
  {
    path: "/protocols",
    element: (
      <Provider store={state}>
        <ProtocolMain />
      </Provider>
    ),
  },
  {
    path: "/orders",
    element: (
      <Provider store={state}>
        <Orders />{" "}
      </Provider>
    ),
  },
  {
    path: "/banners",
    element: (
      <Provider store={state}>
        <Banners />
      </Provider>
    ),
  },
  { path: "/seminars/request", element: <SeminarsRequest /> },
  { path: "/seminars/future", element: <SeminarsFuture /> },
  { path: "/seminars/history", element: <SeminarsHistory /> },
  { path: "/promocode", element: <Promocode /> },
  { path: "/service", element: <MainPage /> },
  { path: "/test", element: <Test /> },
  { path: "/", element: <Navigate to="/products" /> },
  { path: "*", element: <Navigate to="/products" /> },
];

const publicRoutes = [
  { path: "/auth/login", element: <AuthLogin /> },
  { path: "/auth/register", element: <Register /> },
  { path: "*", element: <Navigate to="/auth/login" /> },
];
export { publicRoutes, privateRoutes };
