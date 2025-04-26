mport React from "react";
import PlantList from "./components/PlantList";
import Search from "./components/Search";
import NewPlantForm from "./components/NewPlantForm";

function PlantPage() {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;