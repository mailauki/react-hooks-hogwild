import React from "react";

function Filter({isOn, onFilterClick, onSortChange}){
  return (
    <div className="filterWrapper">
      <label>
        Filter Greased: <input type="checkbox" onClick={onFilterClick} />
      </label>
      {/* <button onClick={onFilterClick}>Filter Greased: {isOn ? "ON" : "OFF"}</button> */}
      <label style={{marginLeft: "16px"}}>
      Sort By: <select onChange={onSortChange}>
          <option value="None">None</option>
          <option value="Name">Name</option>
          <option value="Weight">Weight</option>
        </select>
      </label>
    </div>
  )
}

export default Filter