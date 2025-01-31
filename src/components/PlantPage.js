import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("");
//fetch plants, add state?
const [plants, setPlants] = useState([]);
useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then((r) => r.json())
  .then((data) => setPlants(data))
  //console.log("ran")
},[]);

function handleNewPlant(newP) {
  setPlants([...plants, newP]);

  
};

function handleSearch(searchTerm){
  setSearch(searchTerm);
};
function handleDeletePlant(id) {
  const updatedPlants = plants.filter((plant) => plant.id !== id);
  setPlants(updatedPlants);

}
function handlePriceUpdate(id, newPrice) {
  const updatedPlants = plants.map((plant) => plant.id === id? {...plant, price: newPrice} : plant);
  setPlants(updatedPlants);
}


  return (
    <main>
      <NewPlantForm onAddNewPlant={handleNewPlant}/>
      <Search handleSearch={handleSearch} search={search}/>
      <PlantList plants={plants} search={search} handleDeletePlant={handleDeletePlant} handlePriceUpdate={handlePriceUpdate}/>
    </main>
  );
}

export default PlantPage;
