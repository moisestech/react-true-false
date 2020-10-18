import { NavLink } from "react-router-dom";
import GlowButton from "../../components/GlowButton";

export default function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <div>Welcome to the Trivia Challenge!</div>
        <div>You will be presented with 10 True or False questions.</div>
        <div>Can you score 100?</div>
        <NavLink exact to="/quiz?number=1" className="start-quiz">
          <GlowButton text={"Begin"} />
        </NavLink>
      </div>
    </div>
  );
}
