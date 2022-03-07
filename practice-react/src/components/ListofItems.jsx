import React from "react";

export const ListofItems = () => {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Banana", isFruit: true, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
    { title: "Carrot", isFruit: false, id: 4 },
    { title: "Orange", isFruit: true, id: 5 },
  ];

  const itemList = products.map((item) => (
    <li key={item.id} style={{color: item.isFruit ? "white" : "green"}}>Item: {item.title}</li>
  ));

  return (
    <div>
      <ul>{itemList}</ul>
    </div>
  );
};
