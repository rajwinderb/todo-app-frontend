interface ToDoProps {
  todo: string;
}

export default function ToDo(props: ToDoProps): JSX.Element {
  return (
    <div className="ToDo">
      <input type="checkbox" />
      <p>{props.todo}</p>
    </div>
  );
}
