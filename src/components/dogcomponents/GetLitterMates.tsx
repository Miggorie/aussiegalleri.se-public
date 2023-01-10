import React, { useState, useEffect } from "react";
import { Dog } from "../../pages/dogs";

interface Props {
  currentDog: Dog;
}

const GetLitterMates: React.FC<Props> = ({ currentDog }) => {
  const [littermates, setLittermates] = useState([]);

  useEffect(() => {
    async function fetchLittermates() {
      const response = await fetch(
        "http://aussiegalleri.se/api/singledog/getlittermates.php"
      );
      const data = await response.json();
      console.log(response);
      setLittermates(data.littermates);
    }
    fetchLittermates();
  }, [currentDog.url]);

  return (
    <div>
      {littermates.map((littermate, index) => (
        <div key={index}>
          {/* <p>Name: {littermate.name}</p>
          <p>Image url: {littermate.standLeft}</p> */}
        </div>
      ))}
    </div>
  );
};

export default GetLitterMates;
