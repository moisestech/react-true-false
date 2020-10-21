import "./logo.css";
export default function Logo({ activeLocation }) {
  function handleActiveLocation(path) {
    if (path === "/quiz") {
      return "active";
    }
  }

  return (
    <div className="logo-header">
      <span className={`logo ${handleActiveLocation(activeLocation)}`}>
        <img src="https://raw.githubusercontent.com/moisestech/react-true-false/main/public/assets/react-truefalse-logo-square.png" />
      </span>
    </div>
  );
}
