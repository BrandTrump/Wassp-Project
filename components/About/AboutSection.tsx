"use client";
import { Container } from "@mui/material";
import styles from "./AboutSection.module.scss";
import CallToActionButton from "../CallToActionButton";
import { useScroll, animated } from "@react-spring/web";
import React from "react";

type AboutSectionProps = {
  about: AboutContents;
};

function AboutSection() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.aboutBackground}>
      <Container maxWidth="xl" disableGutters>
        {/* {about.aboutContents.nodes.map((details, i: number) => ( */}
        <section className={styles.aboutSection}>
          {/* <animated.div
            className={styles.aboutWelcome}
            style={{
              clipPath: scrollYProgress.to((val) => `circle(${val * 800}%)`),
            }}
          > */}
          {/* {details.aboutContentFields.title} */}
          <div className={styles.aboutWelcome}>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </div>
          {/* </animated.div> */}
          <div className={styles.infoContainer}>
            <div className={styles.sectionNumber}>
              <h2>
                <span>01</span>About Wassp
              </h2>
            </div>

            <div className={styles.aboutInformation}>
              {/* <p>{details.aboutContentFields.content}</p> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus eius delectus culpa recusandae in minima.
              </p>
              <div className={styles.ctaButton}>
                <CallToActionButton name={"Our Story"} href="/our-story" />
              </div>
            </div>
          </div>
        </section>
        {/* ))} */}
      </Container>
    </div>
  );
}

export default AboutSection;
