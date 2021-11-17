import ToDo from "./ToDo";

export default function ToDoItems(): JSX.Element {
  return (
    <section className="ToDoItems">
      <ToDo todo={"eat"} />
      <ToDo todo={"shopping"} />
    </section>
  );
}
