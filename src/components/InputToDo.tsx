import { useState } from "react";
import { API_BASE } from "../utils/APIFragments";
import axios from "axios";

interface Props {
  loadAllToDos: () => void;
}

export default function InputToDo(props: Props): JSX.Element {
  const [toDoDescription, setToDoDescription] = useState<string>("");

  const handleAddToDo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post(`${API_BASE}todos`, {
        todo: toDoDescription,
      })
      .then(function (response) {
        props.loadAllToDos();
        console.log(response);
        setToDoDescription("");
      })
      .catch(function (error) {
        console.log(error);
      });
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
      <button type="submit" className="btn btn-success">
        Add
      </button>
    </form>
  );
}
