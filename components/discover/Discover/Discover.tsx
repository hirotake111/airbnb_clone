import Image from "next/image";
import Link from "next/link";

import Outside from "../../../public/discover/outside.jpg";
import OutsideMobile from "../../../public/discover/outside_mobile.jpg";
import Inside from "../../../public/discover/inside.jpg";
import InsideMobile from "../../../public/discover/inside_mobile.jpg";
import WhiteButton from "../../common/WhiteButton/WhiteButton";

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
    <>
      {/* <div className={styles.container}> */}
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
      {/* </div> */}
    </>
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
        <Link href={href} passHref>
          <a>
            <WhiteButton>{buttonLabel}</WhiteButton>
          </a>
        </Link>
      </div>
      {/** image for PC */}
      <div
        className={[styles.pictureContainer, styles.pictureContainer_pc].join(
          " "
        )}
      >
        <Image src={picture} layout="responsive" alt={subTitle} />
      </div>
      {/** image for mobile device */}
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
