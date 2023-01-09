import { useContext } from "react";
import DogsContext, { DogsContextType } from "../context/DogsContext";

function useDogContext(): DogsContextType {
  return useContext(DogsContext);
}

export default useDogContext;
