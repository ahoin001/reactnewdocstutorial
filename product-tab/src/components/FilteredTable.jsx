import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export const FilterableProductTable = () => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};
