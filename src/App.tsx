import React, { useState } from "react";
import "./App.css";
import AddPizzaForm from "./components/AddPizzaForm";
import Pizza from "./models/Pizza";
import DisplayPizzas from "./components/DisplayPizzas";

const App: React.FC = () => {
  const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(
      pizzasList.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
    );
  };

  return (
    <div className="App">
      <div className="wrap">
        <span className="headeing">Our pizza</span>
        <AddPizzaForm addPizza={addPizza} />
        <DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} />
      </div>
    </div>
  );
};

export default App;
