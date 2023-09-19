import Link from "next/link";
import CallToActionButton from "../CallToActionButton";
import styles from "./Footer.module.scss";
import WasspMultibeamSvg from "./WasspMultibeamSvg";
import { Container } from "@mui/material";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com" },
  { name: "Instagram", href: "https://www.instagram.com" },
  { name: "Youtube", href: "https://www.youtube.com" },
];

const offices = ["Auckland - NZ", "Essex - UK"];

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{ position: "relative", overflow: "hidden" }}
      >
        <div className={styles.blob}></div>
        <div className={styles.blur}></div>
        <section className={styles.footerContent}>
          <div className={styles.cta}>
            <h1>
              Dui duis facilisis id et ullamcorper diam est. Vulputate ac magna
              in id.
            </h1>
            <div className={styles.ctaButton}>
              <CallToActionButton name={"Contact"} href="/contact" />
            </div>
            <Link href="/" className={styles.newsLetterLink}>
              Subscribe to our newsletter
            </Link>
          </div>

          <div className={styles.linksWrapper}>
            <div className={styles.leftCol}>
              <div className={styles.homeLinks}>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Products</Link>
                <Link href={"/"} id={styles.desktopLink}>
                  About ENL
                </Link>
                <Link href={"/"} id={styles.desktopLink}>
                  Multibeam Technology
                </Link>
                <Link href={"/"}>News</Link>
                <Link href={"/"}>Resources</Link>
                <Link href={"/"}>Contact</Link>
              </div>
              <div className={styles.socials}>
                {socials.map((link, i) => (
                  <a href={link.href} key={i}>
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.rightCol}>
              <div className={styles.offices}>
                <h1>Offices</h1>
                {offices.map((office, i) => (
                  <h1 key={i}>{office}</h1>
                ))}
              </div>
              <h1>©2023 WASSP</h1>
            </div>
          </div>
        </section>
        <div className={styles.wrapper}>
          <WasspMultibeamSvg color="#010f33" />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
