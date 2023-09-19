"use client";
import React, { useState } from "react";
import styles from "./FeaturesSection.module.scss";
import Image from "next/image";
import { Container } from "@mui/material";
import { features } from "@/data/data";

function FeatureSection() {
  const [selected, setSelected] = useState(1);

  const handleClick = (id: number) => {
    setSelected(id);
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
                <h2>{selectedFeature.number}</h2>
                <div className={styles.featureDetails}>
                  <h1>{selectedFeature.title}</h1>
                  <p>{selectedFeature.content}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.companiesContainer}>
          <div className={styles.featuredCompany}>
            <h1>GPA SEABOATS</h1>
            <div className={styles.companyLogoContainer}>
              <div className={styles.companyLogo}>
                <Image src={"/Seabots.svg"} alt="company logo" fill />
              </div>
            </div>
          </div>
          <div className={styles.featuredCompany}>
            <h1>Hemisphere</h1>
            <div className={styles.companyLogoContainer}>
              <div className={styles.companyLogo}>
                <Image src={"/Hemisphere.svg"} alt="company logo" fill />
              </div>
            </div>
          </div>
          <div className={styles.featuredCompany}>
            <h1>Sbg Systems</h1>
            <div className={styles.companyLogoContainer}>
              <div className={styles.companyLogo}>
                <Image src={"/SbgSystems.svg"} alt="company logo" fill />
              </div>
            </div>
          </div>
          <div className={styles.featuredCompany}>
            <h1>GPA SEABOATS</h1>
            <div className={styles.companyLogoContainer}>
              <div className={styles.companyLogo}>
                <Image src={"/Seabots.svg"} alt="company logo" fill />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FeatureSection;
