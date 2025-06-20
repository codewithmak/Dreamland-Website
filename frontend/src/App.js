import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;