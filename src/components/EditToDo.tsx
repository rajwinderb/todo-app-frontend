import React, { Fragment, useState } from "react";
import { IToDo } from "../utils/todoInterface";
import { API_BASE } from "../utils/APIFragments";
import axios from "axios";

interface Props {
  todo: IToDo;
  loadAllToDos: () => void;
}

export default function EditTodo(props: Props): JSX.Element {
  const [toDoDescription, setToDoDescription] = useState<string>(
    props.todo.todo
  );

  const handleEditToDo = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    axios
      .patch(`${API_BASE}todos/${props.todo.id}`, {
        todo: toDoDescription,
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
    <Fragment>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#todo${props.todo.id}`}
      >
        Edit
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id={`todo${props.todo.id}`}
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit To-Do
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={toDoDescription}
                onChange={(e) => setToDoDescription(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => handleEditToDo(e)}
              >
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
