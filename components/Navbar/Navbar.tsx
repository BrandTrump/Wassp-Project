"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/Navbar/Navbar.module.scss";
import TemporaryDrawer from "./TemporaryDrawer";
import { Container } from "@mui/material";
import { useState } from "react";

function Navbar() {
  const [color, setColor] = useState(false);
  const changeColorOnScroll = () => {
    window.scrollY >= 60 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeColorOnScroll);
  return (
    <header
      className={
        color
          ? `${styles.headerContainer} ${styles.headerBackground}`
          : styles.headerContainer
      }
    >
      <Container maxWidth="xl" disableGutters>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Image src={"/Logo.svg"} alt="Wassp Logo" fill={true} priority />
          </div>

          <nav className={styles.navigationLinks}>
            <Link href={"/"}>Search</Link>
            <Link href={"/"}>Login</Link>
            <div className={styles.languageMenu}>
              <p>EN</p>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.48585 6.7149C3.53421 6.66652 3.59163 6.62815 3.65483 6.60196C3.71803 6.57578 3.78577 6.56231 3.85418 6.56231C3.92259 6.56231 3.99033 6.57578 4.05353 6.60196C4.11673 6.62815 4.17415 6.66652 4.22251 6.7149L10 12.4924L15.7775 6.7149C15.8259 6.66653 15.8833 6.62816 15.9465 6.60199C16.0097 6.57581 16.0774 6.56233 16.1458 6.56233C16.2143 6.56233 16.282 6.57581 16.3452 6.60199C16.4084 6.62816 16.4658 6.66653 16.5142 6.7149C16.5626 6.76327 16.6009 6.8207 16.6271 6.8839C16.6533 6.94709 16.6667 7.01483 16.6667 7.08324C16.6667 7.15164 16.6533 7.21938 16.6271 7.28258C16.6009 7.34578 16.5626 7.4032 16.5142 7.45157L10.3683 13.5974C10.32 13.6458 10.2626 13.6842 10.1994 13.7103C10.1362 13.7365 10.0684 13.75 10 13.75C9.9316 13.75 9.86387 13.7365 9.80067 13.7103C9.73747 13.6842 9.68004 13.6458 9.63168 13.5974L3.48585 7.45157C3.43747 7.4032 3.39909 7.34578 3.37291 7.28258C3.34673 7.21938 3.33325 7.15164 3.33325 7.08324C3.33325 7.01483 3.34673 6.94709 3.37291 6.88389C3.39909 6.82069 3.43747 6.76327 3.48585 6.7149Z"
                  fill="white"
                />
              </svg>
            </div>
            <TemporaryDrawer />
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
