import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function MotherCardItem(mother: Dog) {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + mother.date + "/";
  return (
    <div>
      <section>
        <Link to={`/dogs/${mother.url}`}>
          <img src={baseUrl + mother.standLeft} alt="hund" />
          <div>{mother.name}</div>
        </Link>
      </section>
    </div>
  );
}

export default MotherCardItem;
