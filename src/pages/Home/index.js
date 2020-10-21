import { NavLink } from "react-router-dom";
import GlowButton from "../../components/GlowButton";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <div className="intro">Welcome to the Trivia Challenge!</div>
        <div className="instructions">
          You will be presented with 10 True or False questions.
        </div>
        <div className="challenge">Can you score 100?</div>
        <NavLink exact to="/quiz?number=1" className="start-quiz">
          <GlowButton text={"Begin"} />
        </NavLink>
      </div>
    </div>
  );
}
