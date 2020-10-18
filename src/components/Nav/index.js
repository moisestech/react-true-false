import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo";
import GlowButton from "../GlowButton";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav className="nav">
      <Logo />

      <div className="menu">
        {pathname === "/" ? null : (
          <NavLink exact to="/" activeClassName="active">
            <GlowButton text="Restart" />
          </NavLink>
        )}
      </div>
    </nav>
  );
}
