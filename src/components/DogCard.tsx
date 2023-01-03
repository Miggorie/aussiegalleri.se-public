import React from "react";

function DogCardItem(props: any) {
  //importing props from Products.js
  const { dog } = props;
  return <section>{dog.dogID}</section>;
}

export default DogCardItem;
