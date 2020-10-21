import "./notfound.css";
import { NavLink, useLocation } from "react-router-dom";
import GlowButton from "../../components/GlowButton";
export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="notfound-container">
      <div className="notfound-emoji">
        <img src="https://raw.githubusercontent.com/moisestech/react-true-false/main/public/assets/not-found.gif" />
      </div>
      <h1 className="notfound-header">
        Sorry, we couldn't find what you're looking for.
      </h1>
      <NavLink to={"/"} className="notfound-restart">
        <GlowButton text={"RESTART"} />
      </NavLink>
    </div>
  );
}
