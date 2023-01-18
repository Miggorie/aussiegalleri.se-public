import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function FatherCardItem(father: Dog) {
  const baseUrl = "http://aussiegalleri.se/images/" + father.date + "/";
  return (
    <div>
      <section>
        <Link to={`/dogs/${father.url}`}>
          <img
            className="rounded-lg w-full"
            src={baseUrl + father.standLeft}
            alt="hund"
          />
          <div className="mt-4 text-s">{father.name}</div>
        </Link>
      </section>
    </div>
  );
}

export default FatherCardItem;
