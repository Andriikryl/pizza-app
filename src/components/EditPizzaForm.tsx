import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import "./styles.css";
import Pizza from "../models/Pizza";

interface EditPizzaFormProps {
  data: Pizza;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({ data }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      console.log("edit-pizza");
    }
  };

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Nmae"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        type="text"
        name="price"
        placeholder="Cost"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditPizzaForm;
