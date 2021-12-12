import OvalButton from "../../common/OvalButton/OvalButton";
import styles from "./Location.module.css";

export default function Location() {
  return (
    <div className={styles.container}>
      <div aria-label="location label" className={styles.label}>
        GO ANYWHERE, ANYTIME
      </div>
      <div className={styles.buttonContainer}>
        <OvalButton label={<ButtonLabel />} />
      </div>
    </div>
  );
}

const ButtonLabel = () => (
  <>
    <div className={styles.button__label}>I&apos;m flexible</div>
    <video
      autoPlay={true}
      crossOrigin="anonymous"
      playsInline={true}
      poster="https://a0.muscache.com/pictures/04c0a34f-9880-48b7-a69c-49011f602a35.jpg"
      preload="auto"
      width="28"
      height="28"
    >
      <source
        src="https://a0.muscache.com/videos/vopt/13/e1/13e14ffc-822c-5e84-aa58-d6a6527dc218/13e14ffc822c5e84aa58d6a6527dc218.mp4?impolicy=low_quality"
        type="video/mp4"
      />
    </video>
  </>
);
