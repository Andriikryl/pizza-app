import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC = () => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Nmae"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Cost"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPizzaForm;
