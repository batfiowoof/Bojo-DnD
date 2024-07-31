import { Link } from "react-router-dom";
import logo from "../assets/dnd-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="DnD Logo" />
      <h1 className="header-title">Bojos DnD Web App</h1>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/character">Characters</Link>
          </li>
          <li>
            <a href="/spells">Spells</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
