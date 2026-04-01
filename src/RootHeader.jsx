import { Link } from "react-router";
import "./RootHeader.css";

export default function RootHeader() {
  return (
    <header className="root-header">
      <h1>Tyler's Charlotte Website</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/introduction">Introduction</Link>
      </nav>
    </header>
  );
}
