import React from "react";
import Tile from "./Tile";

function Tiles({hogs}) {
  return (
    <div className="ui grid container">
      {hogs.map(hog => {
        // console.log(hog);
        return <Tile key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog["highest medal achieved"]} />
      })}
    </div>
  )
}

export default Tiles