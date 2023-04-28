import React, { FC } from "react";
import Pizza from "../models/Pizza";
import SinglePizza from "./SinglePizaa";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza pizza={pizza} key={pizza.id} updatePizza={updatePizza} />
        );
      })}
    </div>
  );
};

export default DisplayPizzas;
