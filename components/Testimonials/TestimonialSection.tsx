import { Container } from "@mui/material";
import styles from "./TestimonitalSection.module.scss";

function TestimonialSection() {
  return (
    <section className={styles.sectionContainer}>
      <Container maxWidth="xl" disableGutters>
        <div>
          <div className={styles.sectionTitle}>
            <h2>
              04<span>Testimonials</span>
            </h2>
          </div>

          <div className={styles.testimonialQuote}>
            <h1>
              <span className={styles.quotation}>“</span>WASSP LETS ME GO TO
              WHERE I WOULD NEVER HAVE FISHED BEFORE, GIVING ME A HIGHER CATCH
              WITH REDUCED FUEL CONSUMPTION.”
            </h1>
            <h2>
              Dominique Faou <span>Owner/Skipper, France</span>
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TestimonialSection;
