import "./ToTheTop.css";

const ToTheTop = () => {
  return (
    <div className="areaAlCielo">
      <button onClick={() => window.scrollTo(0, 0)} className="botonAlCielo">
        <svg
          width="27"
          height="34"
          viewBox="0 0 27 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 34L14 -8.34465e-07" stroke="white" strokeWidth="3" />
          <mask
            id="mask0_2_173"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="27"
            height="24"
          >
            <rect
              x="0.5"
              y="23.5"
              width="23"
              height="26"
              transform="rotate(-90 0.5 23.5)"
              fill="#D9D9D9"
              stroke="white"
            />
          </mask>
          <g mask="url(#mask0_2_173)">
            <ellipse
              cx="-4.5"
              cy="5.18633e-07"
              rx="18"
              ry="18.5"
              transform="rotate(-90 -4.5 5.18633e-07)"
              stroke="white"
              strokeWidth="3"
            />
            <ellipse
              cx="32.5"
              cy="5.18633e-07"
              rx="18"
              ry="18.5"
              transform="rotate(-90 32.5 5.18633e-07)"
              stroke="white"
              strokeWidth="3"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default ToTheTop;
