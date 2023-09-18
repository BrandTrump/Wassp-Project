import Link from "next/link";
import styles from "./HeroSection.module.scss";
import { Container } from "@mui/material";
import CallToActionButton from "../CallToActionButton";

function HeroSection() {
  return (
    <div className={styles.heroBackground}>
      <Container maxWidth="xl" disableGutters>
        <section className={styles.heroContainer}>
          <div className={styles.heroTitle}>
            <h2>Sea it all</h2>
            <h1>Multibeam sonar product & solutions.</h1>
          </div>

          <div className={styles.heroCallToAction}>
            <p>
              WASSP multi-beam enables sustainable fishing, exploration, and
              surveys with versatility and detail.
            </p>
            <CallToActionButton name={"Contact Us"} href="contact" />
          </div>
        </section>
      </Container>
    </div>
  );
}

export default HeroSection;
