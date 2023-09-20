"use client";
import React, { useState } from "react";
import styles from "./FeaturesSection.module.scss";
import { Container } from "@mui/material";
import { featuredCompany, features } from "@/data/data";
import FeaturedCompany from "./FeaturedCompany";
import { useSpring, animated } from "@react-spring/web";

function FeatureSection() {
  const [selected, setSelected] = useState(1);

  const [springs, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  const handleClick = (id: number) => {
    setSelected(id);
    api.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 400 },
    });
  };

  const selectedFeature = features.find((feature) => feature.id === selected);

  return (
    <section className={styles.featureContainer}>
      <Container maxWidth="xl" disableGutters>
        <div className={styles.wrapper}>
          <div className={styles.mobileSectionTitle}>
            <h2>
              03 <span>Our Capabilities</span>
            </h2>
          </div>
          <div className={styles.desktopSectionTitle}>
            <h2>
              03 <span>Features</span>
            </h2>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.tabsContainer}>
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => handleClick(feature.id)}
                  className={styles.featureTabs}
                  style={
                    feature.id === selected
                      ? { backgroundColor: "white", color: "rgb(4 29 47)" }
                      : {}
                  }
                >
                  <h2>{feature.number}</h2>
                  <h3>{feature.title}</h3>
                </div>
              ))}
            </div>

            {selectedFeature && (
              <div className={styles.selectedFeature}>
                <animated.div style={{ ...springs }}>
                  <h2>{selectedFeature.number}</h2>
                  <div className={styles.featureDetails}>
                    <h1>{selectedFeature.title}</h1>
                    <p>{selectedFeature.content}</p>
                  </div>
                </animated.div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.companiesContainer}>
          {featuredCompany.map((company, i) => (
            <div key={i}>
              <FeaturedCompany name={company.name} src={company.src} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeatureSection;
