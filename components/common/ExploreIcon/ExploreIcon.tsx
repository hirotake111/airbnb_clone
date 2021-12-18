interface Props {
  size?: number;
}

export default function ExploreIcon({ size }: Props) {
  const style: React.CSSProperties = {
    display: "block",
    fill: "none",
    height: size ? `${size}px` : "16px",
    width: size ? `${size}px` : "16px",
    stroke: "currentcolor",
    strokeWidth: 4,
    overflow: "visible",
    color: "rgb(255, 56, 92)",
  };

  return (
    <svg
      aria-label="explore icon"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={style}
    >
      <g fill="none">
        <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
      </g>
    </svg>
  );
}
