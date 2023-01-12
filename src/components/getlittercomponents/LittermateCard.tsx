import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function LittermateCard(littermate: Dog) {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + littermate.date + "/";

  return (
    <section>
      <Link to={`/dogs/${littermate.url}`}>
        <img src={baseUrl + littermate.standLeft} alt="hund" />
        <div>{littermate.name}</div>
      </Link>
    </section>
  );
}

export default LittermateCard;
