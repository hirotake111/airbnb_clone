import { MouseEventHandler, useState } from "react";
import styles from "./ButtonsOnTop.module.css";

export default function ButtonsOnTop() {
  const [calendarHighlighted, setCalendarHighlighted] = useState(true);

  const handleCalendarClick: MouseEventHandler<HTMLButtonElement> = () => {
    setCalendarHighlighted(true);
  };

  const handleFlexibleClick: MouseEventHandler<HTMLButtonElement> = () => {
    setCalendarHighlighted(false);
  };

  return (
    <div aria-label="calendar buttons" className={styles.button__container}>
      <Button onClick={handleCalendarClick} highlighted={calendarHighlighted}>
        Calendar
      </Button>
      <Button onClick={handleFlexibleClick} highlighted={!calendarHighlighted}>
        I&apos;m flexible
      </Button>
    </div>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  highlighted?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, highlighted, onClick }: ButtonProps) => {
  return (
    <button
      className={[
        styles.button,
        highlighted ? styles.button_highlighted : "",
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
