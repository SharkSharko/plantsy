import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, onUpdatePlant }) {
  const { id, name, image, price } = plant;
  const [inStock, setInStock] = useState(true);

  function handleDeleteClick() {
    onDeletePlant(id);
  }

  function handleStockClick() {
    setInStock((inStock) => !inStock);
  }

  function handlePriceChange(e) {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      onUpdatePlant(id, newPrice);
    }
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {inStock ? (
        <button onClick={handleStockClick}>In Stock</button>
      ) : (
        <button onClick={handleStockClick}>Out of Stock</button>
      )}
      <input
        type="number"
        step="0.01"
        placeholder="New price"
        onBlur={handlePriceChange}
      />
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;