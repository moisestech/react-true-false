import "./notfound.css";
import { NavLink } from "react-router-dom";
import GlowButton from "../../components/GlowButton";
export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>Sorry, we couldn't find what you're looking for.</h1>
      <NavLink to={"/"}>
        <GlowButton text={"PLAY GAME"} />
      </NavLink>
    </div>
  );
}
