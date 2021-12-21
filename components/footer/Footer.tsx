import Link from "next/link";

import styles from "./Footer.module.css";

const items: ItemProps[] = [
  {
    header: "Support",
    links: [
      { label: "Help Center", href: "/" },
      { label: "Safety information", href: "/" },
      { label: "Cancellation options", href: "/" },
      { label: "Our COVID-19 Response", href: "/" },
      { label: "Supporting people with disabilities", href: "/" },
      { label: "Report a neighborhood concern", href: "/" },
    ],
  },
  {
    header: "Commuity",
    links: [
      { label: "Airbnb.org: disaster relief housing", href: "/" },
      { label: "Support Afghan refugees", href: "/" },
      { label: "Celebrating diversity & belonging", href: "/" },
      { label: "Combating discrimination", href: "/" },
    ],
  },
  {
    header: "Hosting",
    links: [
      { label: "Try hosting", href: "/" },
      { label: "AirCover: protection for Hosts", href: "/" },
      { label: "Explore hosting resources", href: "/" },
      { label: "Visit our community forum", href: "/" },
      { label: "How to host responsibly", href: "/" },
    ],
  },
  {
    header: "About",
    links: [
      { label: "Newsroom", href: "/" },
      { label: "Learn about new features", href: "/" },
      { label: "Letter from our founders", href: "/" },
      { label: "Careers", href: "/" },
      { label: "Investors", href: "/" },
      { label: "Airbnb Luxe", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.menuAndCompany}>
        <div className={styles.menuCollections}>
          {items.map((item) => (
            <Item key={item.header} {...item} />
          ))}
        </div>
        <div className={styles.company}>
          © 2021 Airbnb, Inc.·Privacy·Terms·Sitemap
        </div>
      </div>
    </footer>
  );
}

interface Link {
  label: string;
  href: string;
}

interface ItemProps {
  header: string;
  links: Link[];
}

const Item = ({ header, links }: ItemProps) => {
  return (
    <div className={styles.menu}>
      <span className={styles.menu__header}>{header}</span>
      <div className={styles.menu__linksContaier}>
        {links.map(({ label, href }) => (
          <span key={label} className={styles.menu__link}>
            <Link href={href}>{label}</Link>
          </span>
        ))}
      </div>
    </div>
  );
};
