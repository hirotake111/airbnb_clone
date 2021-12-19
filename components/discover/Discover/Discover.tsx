import Image from "next/image";

import Outside from "../../../public/discover/outside.jpg";
import OutsideMobile from "../../../public/discover/outside_mobile.jpg";
import Inside from "../../../public/discover/inside.jpg";
import InsideMobile from "../../../public/discover/inside_mobile.jpg";

import styles from "./Discover.module.css";

const items: Props[] = [
  {
    subTitle: "Things to do\non your trip",
    buttonLabel: "Experiences",
    picture: Outside,
    pictureMobile: OutsideMobile,
    href: "/",
  },
  {
    subTitle: "Things to do\nfrom home",
    buttonLabel: "Online Experiences",
    picture: Inside,
    pictureMobile: InsideMobile,
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
  pictureMobile: StaticImageData;
  href: string;
}

const Item = ({
  subTitle,
  buttonLabel,
  picture,
  pictureMobile,
  href,
}: Props) => {
  return (
    <div className={styles.pictureContainer}>
      <div className={styles.titleAndButton}>
        <span className={styles.subTitle}>{subTitle}</span>
        <a href={href}>
          <button className={styles.button}>{buttonLabel}</button>
        </a>
      </div>
      <div
        className={[styles.pictureContainer, styles.pictureContainer_pc].join(
          " "
        )}
      >
        <Image src={picture} alt={subTitle} />
      </div>
      <div
        className={[
          styles.pictureContainer,
          styles.pictureContainer_mobile,
        ].join(" ")}
      >
        <Image src={pictureMobile} alt={subTitle} />
      </div>
    </div>
  );
};
