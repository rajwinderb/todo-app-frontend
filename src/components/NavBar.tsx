export default function NavBar(): JSX.Element {
  return (
    <nav className="NavBar">
      <input
        type="text"
        placeholder="Enter a to-do..."
        name="enter"
        autoComplete="off"
      />
      <button type="button">Add</button>
    </nav>
  );
}
