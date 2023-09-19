"use client";
import styles from "./HeroSection.module.scss";
import { Container } from "@mui/material";
import CallToActionButton from "../CallToActionButton";
import { useSpring, animated } from "@react-spring/web";

function HeroSection() {
  const [props, api] = useSpring(
    () => ({
      from: { x: 10, opacity: 0 },
      to: { x: 0, opacity: 1 },
      config: { duration: 500 },
    }),
    []
  );
  return (
    <div className={styles.heroBackground}>
      <Container maxWidth="xl" disableGutters>
        <section className={styles.heroContainer}>
          <animated.div style={props}>
            <div className={styles.heroTitle}>
              <h2>Sea it all</h2>
              <h1>Multibeam sonar product & solutions.</h1>
            </div>
          </animated.div>

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
