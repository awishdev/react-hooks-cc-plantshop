import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search, handleRefresh }) {
  console.log(plants);
  if (!plants.length) {
    return <p>Loading</p>;
  }
  else{

    const plantCards = plants.filter((plant) => plant.name.toLowerCase().includes(search)).map((plant) => (<PlantCard key={plant.id} plant={plant} handleRefresh={handleRefresh} />));

    return (
      <ul className="cards">{plantCards}</ul>
    );
  }
}

export default PlantList;
