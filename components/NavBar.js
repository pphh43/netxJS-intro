import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`} // 여러개 module style 적용 방법 1 : className={`${styles.name} ${styles.name}`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")} // 여러개 module style 적용 방법 2 : {[styles.name, styles.name].join("")}
        >
          about
        </a>
      </Link>
    </nav>
  );
}
