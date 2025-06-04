import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Footer from "./components/Footer";
import Table from "./pages/Table";
import Search from "./components/Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./layout/DashboardLayout";
import UserLayout from "./layout/UserLayout";

const App = () => {
  return (
    <div className="">
      <ToastContainer />
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/table" element={<Table />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/patients" element={<Collection />} />
          <Route path="/reports" element={<About />} />
          <Route path="/sms" element={<Contact />} />
          <Route path="/staff" element={<Product />} />
          <Route path="/privacy-policy" element={<Cart />} />
          <Route path="/faq" element={<PlaceOrder />} />
          <Route path="/settingsder" element={<Orders />} />
        </Route>
        <Route path="/admin" element={<Login />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
