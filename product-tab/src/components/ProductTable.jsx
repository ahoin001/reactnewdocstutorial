import React from "react";
import { ProductCategoryRow } from "./ProductCategoryRow";
import { ProductRow } from "./ProductRow";

export const ProductTable = ({ products }) => {
  const rows = [];
  let lastItem = null;

  products.forEach((product) => {
    if (product.category !== lastItem) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} />);

    // Change lastItem category to current category, so when checked against a new product of different category,
    // it will go through if statement and create new category row
    lastItem = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
