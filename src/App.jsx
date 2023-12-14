import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Footer from "./components/Footer";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";



function App() {
 

  return (
    <div className="font-poppins overflow-hidden">
      <BrowserRouter>
       <Navbar />
     
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
       </Routes>
        <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;

