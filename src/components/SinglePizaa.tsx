import React, { FC } from "react";
import Pizza from "../models/Pizza";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

interface SinglePizzaProps {
  pizza: Pizza;
}

const SinglePizza: FC<SinglePizzaProps> = ({ pizza }) => {
  return (
    <div className="pizaa">
      <img src={`/images/${pizza.img}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <p>{pizza.price} $</p>

      <div className="pizza-controls">
        <AiFillEdit />
        <AiFillDelete />
      </div>
    </div>
  );
};

export default SinglePizza;
