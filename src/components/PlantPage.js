import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [refreshToggle, setRefreshToggle] = useState(false);
//fetch plants, add state?
const [plants, setPlants] = useState([]);
useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((r) => r.json())
  .then((data) => setPlants(data))
  //console.log("ran")
}, [refreshToggle]);

function handleNewPlant(newP) {
  setPlants([...plants, newP]);

  setRefreshToggle(() => !refreshToggle);
}



  return (
    <main>
      <NewPlantForm onAddNewPlant={handleNewPlant}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
