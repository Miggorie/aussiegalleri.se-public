import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function OffspringCard(offspring: Dog) {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + offspring.date + "/";

  return (
    <section>
      <Link to={`/dogs/${offspring.url}`}>
        <img src={baseUrl + offspring.standLeft} alt="hund" />
        <div>{offspring.name}</div>
      </Link>
    </section>
  );
}

export default OffspringCard;
