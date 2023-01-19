import React from "react";
import { Litter } from "../Interfaces";

function ParentInfoCard(parents: Litter) {
  return (
    <div>
      <p>e. {parents.sire}</p>
      <p>u. {parents.dam}</p>
      <p>Född: {parents.born}</p>
    </div>
  );
}

export default ParentInfoCard;
