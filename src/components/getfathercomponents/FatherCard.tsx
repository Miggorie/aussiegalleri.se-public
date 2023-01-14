import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function FatherCardItem(father: Dog) {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + father.date + "/";
  return (
    <div>
      <section>
        <Link to={`/dogs/${father.url}`}>
          <img src={baseUrl + father.standLeft} alt="hund" />
          <div>{father.name}</div>
        </Link>
      </section>
    </div>
  );
}

export default FatherCardItem;