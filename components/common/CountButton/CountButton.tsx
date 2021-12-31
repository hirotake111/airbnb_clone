import styles from "./CountButton.module.css";

interface ButtonProps {
  onClick?: () => void;
  plus?: boolean;
  count: number;
}

export default function CountButton({ onClick, plus, count }: ButtonProps) {
  const disabled = plus ? count > 15 : count < 1;

  return (
    <div>
      <button
        aria-label="count-button"
        className={[styles.button, disabled ? styles.button_disabled : ""].join(
          " "
        )}
        onClick={onClick}
      >
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className={styles.button__svg}
        >
          {plus ? (
            <path d="m2 16h28m-14-14v28"></path>
          ) : (
            <path d="m2 16h28"></path>
          )}
        </svg>
      </button>
    </div>
  );
}
