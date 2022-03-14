import { useState } from "react";

import { SearchBar } from "./SearchBar";
import { ProductTable } from "./ProductTable";

export const FilteredTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  //   const [inStockOnly, setInStockOnly] = useState(false);

  const handleOnChange = (e) => {
    console.log("&&&&&&&&&&&&&&&&&&" + e.target.value);
    setFilterText(e.target.value);
  };

  return (
    <div style={{ border: "1px solid blue", margin: "10px", padding: "28px" }}>
      <SearchBar filterText={filterText} onFilterTextChange={handleOnChange} />

      <ProductTable products={products} filterText={filterText} />
    </div>
  );
};
