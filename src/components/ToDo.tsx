import axios from "axios";
import EditTodo from "./EditToDo";
import { API_BASE } from "../utils/APIFragments";
import { IToDo } from "../utils/todoInterface";

interface Props {
  todo: IToDo;
  loadAllToDos: () => void;
}

export default function ToDo(props: Props): JSX.Element {
  const handleDeleteTodo = async () => {
    await axios
      .delete(`${API_BASE}todos/${props.todo.id}`)
      .then((response) => {
        props.loadAllToDos();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDoneChange = async () => {
    axios
      .patch(`${API_BASE}todos/${props.todo.id}`, {
        done: !props.todo.done,
      })
      .then((response) => {
        props.loadAllToDos();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          checked={props.todo.done}
          onChange={handleDoneChange}
        />
      </td>
      <td>{props.todo.todo}</td>
      <td>
        <EditTodo todo={props.todo} loadAllToDos={props.loadAllToDos} />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDeleteTodo}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
