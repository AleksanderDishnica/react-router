import { Nav } from "./Nav.js";

export function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}
