import React, { FC } from "react";
import Pizza from "../models/Pizza";
import SinglePizza from "./SinglePizaa";

interface DisplayPizzasProps {
  pizzasList: Pizza[];
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList }) => {
  return (
    <div className="container">
      {pizzasList.map((pizza) => {
        return <SinglePizza pizza={pizza} key={pizza.id} />;
      })}
    </div>
  );
};

export default DisplayPizzas;
