"use client";
import { useState } from "react";
import styles from "./FeaturesSection.module.scss";
import Image from "next/image";

const features = [
  {
    id: 1,
    number: "01",
    title: "High Resolution Chirp Sounder",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum.",
  },
  {
    id: 2,
    number: "02",
    title: "120 side to side coverage",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum.",
  },
  {
    id: 3,
    number: "03",
    title: "Realtime CDX Mapping",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum.",
  },
  {
    id: 4,
    number: "04",
    title: "Realtime 3D View CDX",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum.",
  },
  {
    id: 5,
    number: "05",
    title: "Backscatter license",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum.",
  },
  {
    id: 6,
    number: "06",
    title: "1. High Resolution Side Scan",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum.",
  },
  {
    id: 7,
    number: "07",
    title: "Third-Party Software Intergration",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum.",
  },
  {
    id: 8,
    number: "08",
    title: "Multiple WASSP Transducers",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, ipsum.",
  },
];

function FeatureSection() {
  const [selected, setSelected] = useState(1);

  const handleClick = (id: number) => {
    setSelected(id);
  };

  // Find the selected feature based on 'selected' state
  const selectedFeature = features.find((feature) => feature.id === selected);

  return (
    <section className={styles.FeatureContainer}>
      <div className={styles.mobileSectionTitle}>
        <h2>
          03 <span>Our Capabilities</span>
        </h2>
      </div>

      <div>
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
      </div>
    </section>
  );
}

export default FeatureSection;
