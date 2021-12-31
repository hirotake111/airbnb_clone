import useGuests from "../../../hooks/guestsHook";
import { useAppSelector } from "../../../redux/store";
import { Guest, GuestKeys } from "../../../types/types";
import CountButton from "../../common/CountButton/CountButton";

import styles from "./Guests.module.css";

// const items: ItemProps[] = [
//   { label: "Adults", description: "Ages 13 or above", count: 0 },
//   { label: "Children", description: "Ages 2–12", count: 0 },
//   { label: "Infants", description: "Under 2", count: 0 },
//   {
//     label: "Pets",
//     description: "Bringing an assistance animal?",
//     count: 0,
//     link: "xxx",
//   },
// ];

export default function Guests() {
  const { guests, updateGuestCount } = useGuests();
  return (
    <div className={styles.guests}>
      <div aria-label="items">
        {guests.map((guest) => (
          <Item key={guest.label} {...guest} updateFunc={updateGuestCount} />
        ))}
      </div>
      <div className={styles.guests__description}>
        If you&apos;re lucky enough to have more than 2 pets with you, be sure
        to let your host know.
      </div>
    </div>
  );
}

type ItemProps = Guest & {
  updateFunc: (key: GuestKeys, count: number) => void;
};

const Item = ({ label, description, link, count, updateFunc }: ItemProps) => {
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
        <CountButton count={count} onClick={() => updateFunc(label, -1)} />
        <span className={styles.item__count}>{count}</span>
        <CountButton count={count} onClick={() => updateFunc(label, 1)} plus />
      </div>
    </div>
  );
};
