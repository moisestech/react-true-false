import "./nav.css";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";

export default function Nav() {
  const { pathname } = useLocation();

  console.log("pathname >>", pathname);

  return (
    <nav className="nav">
      <Logo activeLocation={pathname} />
    </nav>
  );
}
