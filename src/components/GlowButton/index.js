import "./glowbutton.css";
import PropTypes from "prop-types";

export default function GlowButton({ text }) {
  return <div className="glow-button">{text}</div>;
}

GlowButton.proptypes = {
  text: PropTypes.string.isRequired,
};
