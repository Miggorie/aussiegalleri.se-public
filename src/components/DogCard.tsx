import React from "react";

function ProductCardItem(props: any) {
  //importing props from Products.js
  const { dog } = props;
  return <section>{dog.name}</section>;
}

export default ProductCardItem;
