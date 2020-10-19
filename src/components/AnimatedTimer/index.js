import "./animatedtimer.css";

export default function AnimatedTimer() {
  return (
    <div className="animated-timer">
      <svg>
        <defs>
          <linearGradient x1="0%" y1="0%" x2="0%" y2="100%" id="bgGradient">
            <stop offset="0%" stopColor="rgb(70, 39, 89)" stopOpacity="1" />
            <stop offset="50%" stopColor="#800080" />
            <stop offset="100%" stopColor="#FF0080" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgGradient)" />
      </svg>
    </div>
  );
}
