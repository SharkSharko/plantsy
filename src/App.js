import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    price: ''
  });

  useEffect(() => {
    fetch('http://localhost:6002/plants')
      .then(response => response.json())
      .then(data => setPlants(data));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setNewPlant(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:6002/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...newPlant,
        price: parseFloat(newPlant.price)
      })
    })
      .then(response => response.json())
      .then(data => {
        setPlants(prev => [...prev, data]);
        setNewPlant({ name: '', image: '', price: '' });
      });
  }

  return (
    <div className="App">
      <h1>Plantsy</h1>

      <form className="plant-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlant.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPlant.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newPlant.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>

      <div className="plant-list">
        {plants.map(plant => (
          <div className="plant-card" key={plant.id}>
            <h3>{plant.name}</h3>
            <img src={plant.image} alt={plant.name} width="150" />
            <p>Price: ${plant.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;