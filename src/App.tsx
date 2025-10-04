import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Products from "./pages/Products";

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
