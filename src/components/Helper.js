import { Link } from "react-router-dom";

export function Li(props) {
  return (
    <li>
      <Link to={props.route}>
        <section className="px-4 py-2 bg-red-500 text-center text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-200 ease-in duration-300">
          {props.title}
        </section>
      </Link>
    </li>
  );
}

export function Input(props) {
  return <input type={props.type} value={props.value} />;
}
