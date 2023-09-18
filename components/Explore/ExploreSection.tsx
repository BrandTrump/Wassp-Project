import Link from "next/link";
import styles from "./ExploreSection.module.scss";
import { Container } from "@mui/material";

function ExploreSection() {
  return (
    <div className={styles.exploreBackground}>
      <Container maxWidth="xl" disableGutters style={{ height: "100%" }}>
        <section className={styles.exploreSection}>
          <div className={styles.exploreTitle}>
            <h1>F - Series</h1>
            <h2 className={styles.fishingSeriesTitle}>(Fishing Series)</h2>
            <div className={styles.numberLine}>
              <h2>01</h2>
              <hr />
              <h2>03</h2>
            </div>
          </div>
          <div className={styles.exploreDetails}>
            <h2>F - Series</h2>
            <p>
              WASSP Multibeam finds fish and habitat over a wider area than
              single-beam systems
            </p>
            <Link href={"/explore"}>Explore Now</Link>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default ExploreSection;
