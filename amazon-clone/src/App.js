import "./App.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Content from "./Component/Content";
import Cart from "./Component/Cart";

export default function App() {
  const [openAddToCart, setopenAddToCart] = useState(false);
  const [addToCardData, setAddToCardData] = useState([]);
  return (
    <div>
      <Navbar
        addToCardData={addToCardData}
        setopenAddToCart={setopenAddToCart}
      />
      {!openAddToCart && (
        <Content
          addToCardData={addToCardData}
          setAddToCardData={setAddToCardData}
        />
      )}
      {openAddToCart && (
        <Cart
          setopenAddToCart={setopenAddToCart}
          addToCardData={addToCardData}
          setAddToCardData={setAddToCardData}
        />
      )}
    </div>
  );
}
