import { useState, useEffect } from "react";
import DogCard from "../components/DogCard";
import dog from "./dog";

function Dogs(props: { dogs: { dogID: string }[] }) {
  const { dogs } = props;
  console.log(dogs);
  return (
    <main>
      <div>{dog.name}</div>
    </main>
  );
}
export default Dogs;
