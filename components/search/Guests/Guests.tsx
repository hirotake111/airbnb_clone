import CountButton from "../../common/CountButton/CountButton";

import styles from "./Guests.module.css";

const items: ItemProps[] = [
  { label: "Adults", description: "Ages 13 or above", count: 0 },
  { label: "Children", description: "Ages 2–12", count: 0 },
  { label: "Infants", description: "Under 2", count: 0 },
  {
    label: "Pets",
    description: "Bringing an assistance animal?",
    count: 0,
    link: "xxx",
  },
];

export default function Guests() {
  return (
    <div className={styles.guests}>
      <div aria-label="items">
        {items.map((item) => (
          <Item key={item.label} {...item} />
        ))}
      </div>
      <div className={styles.guests__description}>
        If you&apos;re lucky enough to have more than 2 pets with you, be sure
        to let your host know.
      </div>
    </div>
  );
}

interface ItemProps {
  label: string;
  description: string;
  link?: string;
  count: number;
}

const Item = ({ label, description, link, count }: ItemProps) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__labelContainer}>
        <span className={styles.item__label}>{label}</span>
        <span
          className={[
            styles.item__description,
            link ? styles.item__description_hasLink : "",
          ].join(" ")}
        >
          {description}
        </span>
      </div>
      <div className={styles.item__buttons}>
        <CountButton count={count} />
        <span className={styles.item__count}>{count}</span>
        <CountButton count={count} plus />
      </div>
    </div>
  );
};
