import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
//fetch plants, add state?
const [plants, setPlants] = useState([]);
useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((r) => r.json())
  .then((data) => setPlants(data))
  //console.log("ran")
}, []);



  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
