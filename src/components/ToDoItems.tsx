import { Fragment } from "react";
import { IToDo } from "../utils/todoInterface";
import ToDo from "./ToDo";

interface Props {
  allToDos: IToDo[];
  loadAllToDos: () => void;
}

export default function ToDoItems(props: Props): JSX.Element {
  const toDoElements = props.allToDos.map((singleToDo) => (
    <ToDo
      key={singleToDo.id}
      todo={singleToDo}
      loadAllToDos={props.loadAllToDos}
    />
  ));

  return (
    <Fragment>
      <table className="table">
        <tbody>{toDoElements}</tbody>
      </table>
    </Fragment>
  );
}
