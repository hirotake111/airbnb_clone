import Image from "next/image";

import Outside from "../../../public/discover/outside.jpg";
import Inside from "../../../public/discover/inside.jpg";

import styles from "./Discover.module.css";

const items: Props[] = [
  {
    subTitle: "Things to do\non your trip",
    buttonLabel: "Experiences",
    picture: Outside,
    href: "/",
  },
  {
    subTitle: "Things to do from home",
    buttonLabel: "Online Experiences",
    picture: Inside,
    href: "/",
  },
];

export default function Discover() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <span aria-label="title" className={styles.title}>
          Discover Airbnb Experiences
        </span>
      </div>
      <div className={styles.itemsContainer}>
        {items.map((item) => (
          <Item key={item.subTitle} {...item} />
        ))}
      </div>
    </div>
  );
}

interface Props {
  subTitle: string;
  buttonLabel: string;
  picture: StaticImageData;
  href: string;
}

const Item = ({ subTitle, buttonLabel, picture, href }: Props) => {
  return (
    <div className={styles.pictureContainer}>
      <div className={styles.titleAndButton}>
        <span className={styles.subTitle}>{subTitle}</span>
        <a href={href}>
          <button className={styles.button}>{buttonLabel}</button>
        </a>
      </div>
      <div className={styles.pictureContainer}>
        <Image src={picture} alt={subTitle} />
      </div>
    </div>
  );
};
