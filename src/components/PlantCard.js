import React, {useState} from "react";

function PlantCard({ plant, handleRefresh }) {
  // Add logic to check if plant is in stock and render appropriate button
  const [inStock, setInStock] = useState(true);
  const [newPrice, setNewPrice] = useState(0);
  function handleClick() {
    setInStock( () => !inStock );
  }
  // Add logic to delete plant and update the plants list
  function handleDelete(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        handleRefresh();
      });
  }
  function handlePriceChange(e) {
    setNewPrice(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: newPrice }),
    })
     .then((r) => r.json())
     .then(() => {
        setNewPrice(0);
        handleRefresh();
      });
  }



  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={() => handleDelete(plant.id)}>Delete</button>
      <form onSubmit={handleSubmit}>
        <input type="text" name="newPrice" placeholder="New Price" value={newPrice} onChange={handlePriceChange}/>
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
