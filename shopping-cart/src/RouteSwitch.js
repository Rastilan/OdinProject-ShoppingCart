import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Shop from "./Shop";


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
