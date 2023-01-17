import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function MotherCardItem(mother: Dog) {
  const baseUrl = "http://aussiegalleri.se/images/" + mother.date + "/";
  return (
    <div>
      <section className="content-center">
        <Link to={`/dogs/${mother.url}`}>
          <img
            className="rounded-lg w-full"
            src={baseUrl + mother.standLeft}
            alt="hund"
          />
          <div>{mother.name}</div>
        </Link>
      </section>
    </div>
  );
}

export default MotherCardItem;
