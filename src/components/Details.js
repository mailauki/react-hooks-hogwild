import React from "react";

function Details({specialty, greased, weight, medal}) {
  return (
    <ul>
      <li className="smallHeader">Specialty: {specialty}</li>
      <li className="smallHeader">Weight: {weight} lbs</li>
      <li className="smallHeader">Greased: {greased ? "Yes" : "No"}</li>
      <li className="smallHeader achievementText">Highest Medal Achieved: {medal}</li>
    </ul>
  )
}

export default Details