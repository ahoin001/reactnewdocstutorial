// import "./App.css";
// import React from "react";
import { ProductTable } from "./components/ProductTable";

function App() {
  const productInventory = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  return (
    <>
      {/* {" "} */}
      <ProductTable products={productInventory} />{" "}
    </>
  );
}
export default App;
