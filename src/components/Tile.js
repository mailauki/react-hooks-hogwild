import React, {useState} from "react";
import Details from "./Details";

function Tile({name, image, specialty, greased, weight, medal}) {
  const [isShown, setIsShown] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  function handleTileClick(event) {
    if(event.target.tagName !== "BUTTON") {
      setIsShown(!isShown)
    }
  }

  return (
    <div className="ui eight wide column">
      <div className="pigTile normalText" onClick={handleTileClick} >
        {isHidden ? 
        <div>
          <img src={image} alt={name} width={"100%"}></img>
          <h3 style={{marginTop: "2px"}}>{name}</h3>
          {isShown ? <Details specialty={specialty} greased={greased} weight={weight} medal={medal} /> : ""}
        </div>
        : 
        <h3 style={{marginTop: "2px", color:"#D1D1D1", width: "100%"}}>{name}</h3>
        }
        <button onClick={() => setIsHidden(!isHidden)} className="hoggyText">{isHidden ? "Hide" : "Show"} Hog</button>
      </div>
    </div>
  )
}

export default Tile