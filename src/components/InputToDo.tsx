import { useState } from "react";
import { API_BASE } from "../utils/APIFragments";
import axios from "axios";

export default function InputToDo(): JSX.Element {
  const [toDoDescription, setToDoDescription] = useState<string>("");

  const handleAddToDo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post(`${API_BASE}todos`, {
        todo: toDoDescription,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setToDoDescription("");
  };

  return (
    <form className="d-flex mt-5" id="InputToDo" onSubmit={handleAddToDo}>
      <input
        type="text"
        placeholder="Enter a to-do..."
        name="enter"
        autoComplete="off"
        className="form-control"
        value={toDoDescription}
        onChange={(e) => setToDoDescription(e.target.value)}
      />
      <button type="button" className="btn btn-success">
        Add
      </button>
    </form>
  );
}
