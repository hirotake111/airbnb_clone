import Image from "next/image";

import styles from "./NextTrip.module.css";

interface ItemProps {
  name: string;
  distance: number;
  url: string;
  backgroundColor: string;
}

const items: ItemProps[] = [
  {
    name: "Tokyo",
    distance: 10,
    url: "/tokyo.jpg",
    backgroundColor: "rgb(204, 45,74)",
  },
  {
    name: "Atami",
    distance: 90,
    url: "/atami.jpg",
    backgroundColor: "rgb(204, 45,74)",
  },
  {
    name: "Odawara",
    distance: 72,
    url: "/odawara.jpg",
    backgroundColor: "rgb(204, 45,74)",
  },
  {
    name: "Katsuura",
    distance: 70,
    url: "/katsuura.jpg",
    backgroundColor: "rgb(204, 45,74)",
  },
];

export default function NextTrip() {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Inspiration for your next trip</span>
      <div className={styles.items__parent}>
        {items.map(({ name, distance, url, backgroundColor }) => (
          <div key={name} className={styles.items__container}>
            <Item
              name={name}
              distance={distance}
              url={url}
              backgroundColor={backgroundColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Item({ name, distance, url, backgroundColor }: ItemProps) {
  return (
    <div className={styles.item__outline}>
      <div className={styles.item__image}>
        <Image
          src={url}
          alt={`image for ${name}`}
          width={240}
          height={160}
          layout="responsive"
        />
      </div>
      <div className={styles.item__description} style={{ backgroundColor }}>
        <span className={styles.item__location}>{name}</span>
        <span
          className={styles.item__distance}
        >{`${distance} kilometers away`}</span>
      </div>
    </div>
  );
}
