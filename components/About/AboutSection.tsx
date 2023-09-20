"use client";
import { Container } from "@mui/material";
import styles from "./AboutSection.module.scss";
import CallToActionButton from "../CallToActionButton";
// import { useScroll, animated } from "@react-spring/web";
import React from "react";

type AboutSectionProps = {
  about: AboutContents;
};

function AboutSection({ about }: AboutSectionProps) {
  // const containerRef = React.useRef<HTMLDivElement>(null!);

  // const { scrollYProgress } = useScroll();

  return (
    <div className={styles.aboutBackground}>
      <Container maxWidth="xl" disableGutters>
        {about.aboutContents.nodes.map((details, i: number) => (
          <section className={styles.aboutSection} key={i}>
            <div className={styles.aboutWelcome}>
              {details.aboutContentFields.title}
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.sectionNumber}>
                <h2>
                  <span>01</span>About Wassp
                </h2>
              </div>

              <div className={styles.aboutInformation}>
                <p>{details.aboutContentFields.content}</p>
                <div className={styles.ctaButton}>
                  <CallToActionButton name={"Our Story"} href="/our-story" />
                </div>
              </div>
            </div>
          </section>
        ))}
      </Container>
    </div>
  );
}

export default AboutSection;
