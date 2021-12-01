import AppHeader from "./components/AppHeader";
import InputToDo from "./components/InputToDo";
import ToDoItems from "./components/ToDoItems";
import axios from "axios";
import { API_BASE } from "./utils/APIFragments";
import { IToDo } from "./utils/todoInterface";
import { Fragment, useState, useEffect } from "react";

function App(): JSX.Element {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [todoData, setTodoData] = useState<IToDo[]>([]);

  const loadAllToDos = async () => {
    await axios
      .get(`${API_BASE}todos`)
      .then((response) => {
        setTodoData(response.data.allToDos);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isFirstLoad) {
      loadAllToDos();
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  // const handleIsCompleteToggle = async (
  //   todoId: number,
  //   currentCompletedValue: boolean
  // ) => {
  //   await axios
  //     .patch(`${API_BASE}todos/${todoId}`, {
  //       completed: !currentCompletedValue,
  //     })
  //     .then((res) => handleUpdateTodosAfterEditing(res.data.data.todo))
  //     .catch((error) => console.log(error));
  // };

  return (
    <Fragment>
      <AppHeader />
      <InputToDo loadAllToDos={loadAllToDos} />
      <ToDoItems allToDos={todoData} loadAllToDos={loadAllToDos} />
    </Fragment>
  );
}

export default App;
