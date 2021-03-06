import Image from "next/image";
import RectangleButton from "../../common/RectangleButton/RectangleButton";

import styles from "./GiftCard.module.css";
import MobileImage from "../../../public/giftcard/giftcard_mobile.jpg";
import Container from "../../common/Container/Container";
import Background from "../../common/Background/Background";

export default function GiftCard() {
  return (
    <div className={styles.root}>
      {/** background */}
      <Background />
      <Container>
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
              src="/giftcard/giftcard.jpg"
              width={1440}
              height={728}
              alt="gift card"
            />
          </div>
          {/** image for mobile device */}
          <div className={styles.mobileImage}>
            <Image src={MobileImage} alt="gift card mobile" />
          </div>{" "}
        </div>
      </Container>
    </div>
  );
}
