import React from "react";
import { Litter } from "../Interfaces";

function ParentInfoCard(parents: Litter) {
  return <div>{parents.sire}</div>;
}

export default ParentInfoCard;
