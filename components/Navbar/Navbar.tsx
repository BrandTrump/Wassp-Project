import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Navbar/Navbar.module.scss";
import TemporaryDrawer from "./TemporaryDrawer";
import { Container } from "@mui/material";

function Navbar() {
  return (
    <header className={styles.headerContainer}>
      <Container maxWidth="xl" disableGutters>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Image src={"/Logo.svg"} alt="Wassp Logo" fill priority />
          </div>

          <nav className={styles.navigationLinks}>
            <Link href={"/"}>Search</Link>
            <Link href={"/"}>Login</Link>
            <TemporaryDrawer />
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
