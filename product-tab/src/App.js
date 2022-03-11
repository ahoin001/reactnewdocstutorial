// import "./App.css";
// import React from "react";
import { ProductTable } from "./components/ProductTable";
import { Toolbar } from "./components/Toolbar";
import Gallery from "./components/Gallery";

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
      {/* {" Think In React, build component by component "} */}
      <ProductTable products={productInventory} />

      {/* Event Interaction  */}
      <Toolbar
        onPlayMovie={() => alert("Playing!")}
        onUploadImage={() => alert("Uploading!")}
      />

      <Gallery />
    </>
  );
}
export default App;
