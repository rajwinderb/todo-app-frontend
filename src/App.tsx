import AppHeader from "./components/AppHeader";
import NavBar from "./components/NavBar";
import ToDoItems from "./components/ToDoItems";

function App(): JSX.Element {
  return (
    <>
      <AppHeader />
      <NavBar />
      <ToDoItems />
    </>
  );
}

export default App;
