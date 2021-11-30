import AppHeader from "./components/AppHeader";
import InputToDo from "./components/InputToDo";
import ToDoItems from "./components/ToDoItems";
import { Fragment } from "react";

function App(): JSX.Element {
  return (
    <Fragment>
      <AppHeader />
      <InputToDo />
      <ToDoItems />
    </Fragment>
  );
}

export default App;
