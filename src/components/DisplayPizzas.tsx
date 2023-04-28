import React, { FC } from "react";
import Pizza from "../models/Pizza";
import SinglePizza from "./SinglePizaa";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
  updatePizza: (newPizza: Pizza) => void;
  deletPizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({
  pizzasList,
  updatePizza,
  deletPizza,
}) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return (
          <SinglePizza
            pizza={pizza}
            key={pizza.id}
            updatePizza={updatePizza}
            deletPizza={deletPizza}
          />
        );
      })}
    </div>
  );
};

export default DisplayPizzas;
