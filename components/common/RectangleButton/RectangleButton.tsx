import styles from "./RectangleButton.module.css";

interface Props {
  label: string;
  callback?: () => void;
}
export default function RectangleButton({ label, callback }: Props) {
  return (
    <button className={styles.button} onClick={callback}>
      {label}
    </button>
  );
}
