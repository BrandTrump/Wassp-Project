import { Button, Container } from "@mui/material";
import styles from "./AboutSection.module.scss";
import Image from "next/image";
import CallToActionButton from "../CallToActionButton";

function AboutSection() {
  return (
    <div className={styles.aboutBackground}>
      <Container maxWidth="xl" disableGutters>
        <section className={styles.aboutSection}>
          <h1 className={styles.aboutWelcome}>
            Welcome to the world of Wassp Multibeam
          </h1>
          <div className={styles.infoContainer}>
            <div className={styles.sectionNumber}>
              <h2>
                <span>01</span>About Wassp
              </h2>
            </div>

            <div className={styles.aboutInformation}>
              <p>
                WASSP, a powerful multibeam sounder with 120-degree coverage and
                models for deep exploration, offers unparalleled accuracy,
                detail, and versatility. Target fish with steerable sounders,
                generate real-time 3D charts, map fish in water, and make better
                decisions with the user-friendly advanced mode.
              </p>
              <div className={styles.ctaButton}>
                <CallToActionButton name={"Our Story"} href="/our-story" />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default AboutSection;
