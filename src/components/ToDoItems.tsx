import { Fragment } from "react";
import { IToDo } from "../utils/todoInterface";
import ToDo from "./ToDo";

interface Props {
  allToDos: IToDo[];
  loadAllToDos: () => void;
}

export default function ToDoItems(props: Props): JSX.Element {
  const episodeElements = props.allToDos.map((singleToDo, index) => (
    <ToDo
      key={singleToDo.id}
      todo={singleToDo}
      loadAllToDos={props.loadAllToDos}
    />
  ));

  return (
    <Fragment>
      <table className="table">
        <tbody>{episodeElements}</tbody>
      </table>
    </Fragment>
  );
}
