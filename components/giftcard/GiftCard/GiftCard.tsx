import Image from "next/image";
import RectangleButton from "../../common/RectangleButton/RectangleButton";

import styles from "./GiftCard.module.css";
import MobileImage from "../../../public/giftcard_mobile.jpg";

export default function GiftCard() {
  return (
    <div className={styles.root}>
      {/** background */}
      <div className={styles.background}>
        <div className={styles.black}></div>
        <div className={styles.white}></div>
      </div>
      <div className={styles.container}>
        {/** label and button */}
        <div className={styles.labels}>
          <div className={styles.labels__container}>
            <span className={styles.labels__subText}>Introducing</span>
            <span className={styles.labels__productName}>
              Airbnb
              <br />
              gift cards
            </span>

            <RectangleButton label="Shop now" />
          </div>
        </div>
        {/** image */}
        <div className={styles.image}>
          <Image
            src="/giftcard.jpg"
            width={1440}
            height={728}
            alt="gift card"
          />
        </div>
        {/** image for mobile device */}
        <div className={styles.mobileImage}>
          <Image src={MobileImage} alt="gift card mobile" />
        </div>
      </div>
    </div>
  );
}
