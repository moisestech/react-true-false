import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo";

export default function Nav() {
  const { pathname } = useLocation();

  console.log("pathname", pathname);

  return (
    <nav className="nav">
      <Logo />

      <div className="menu">
        {pathname === "/" ? null : (
          <NavLink exact to="/" activeClassName="active">
            Restart
          </NavLink>
        )}
      </div>
    </nav>
  );
}
