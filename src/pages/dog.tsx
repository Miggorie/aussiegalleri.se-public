import { useState } from "react";
import useDogContext from "../hooks/use-dog-context";

function dog() {
  const [singleDog, setSingleDog] = useState([]);
  const { dogs } = useDogContext();
  return <div></div>;
}

export default dog;
