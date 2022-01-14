import React, {useState} from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import Tiles from "./Tiles"

import hogs from "../porkers_data";

function App() {
  const [isOn, setIsOn] = useState(false)
	const [pigs, setPigs] = useState(hogs)

  function handleCheck() {
    setIsOn(!isOn)
  }

	const displayedPigs = pigs.filter(pig => {
		if(isOn) {
			if(pig.greased) return pig
			else return false
		}
		else return pigs
	})

	function handleSort(event) {
		if(event.target.value === "Name") {
			const nameArray = [...hogs].sort((a,b) => a.name > b.name ? 1 : -1)
			setPigs(nameArray)
		}
		else if(event.target.value === "Weight") {
			const weightArray = [...hogs].sort((a,b) => a.weight > b.weight ? 1 : -1)
			setPigs(weightArray)
		}
		else setPigs(hogs)
	}


	return (
		<div className="App">
			<Nav />
			<Filter isOn={isOn} onFilterClick={handleCheck} onSortChange={handleSort} />
			<Tiles hogs={displayedPigs} />
		</div>
	);
}

export default App;
