import React, { useEffect, useState } from "react";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6002/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  return (
    <div>
      <h1>Plantsy</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <h2>{plant.name}</h2>
            <img src={plant.image} alt={plant.name} width="150" />
            <p>Price: ${plant.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
