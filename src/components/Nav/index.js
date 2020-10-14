import { NavLink } from "react-router-dom";
import Logo from "../Logo";

export default function Nav() {
  return (
    <nav className="nav">
      <Logo />

      <div className="menu">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/quiz" activeClassName="active">
          Quiz
        </NavLink>
      </div>
    </nav>
  );
}
