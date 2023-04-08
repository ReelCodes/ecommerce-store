import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
