"use client";
import { Container } from "@mui/material";
import styles from "./TestimonitalSection.module.scss";
import { useInView, animated } from "@react-spring/web";

type TestimonialProps = {
  testimonial: TestimonialsData;
};

function TestimonialSection({ testimonial }: TestimonialProps) {
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-40% 0%",
    }
  );
  return (
    <section className={styles.sectionContainer}>
      <Container maxWidth="xl" disableGutters sx={{ position: "relative" }}>
        <div className={styles.blob}></div>
        <div className={styles.blur}></div>
        <div className={styles.testimonialWrapper}>
          <div className={styles.sectionTitle}>
            <h2>
              04<span>Testimonials</span>
            </h2>
          </div>

          {testimonial.testimonials.nodes.map(
            (testimonial: Testimonial, i: number) => (
              <div className={styles.testimonialQuote} key={i}>
                <animated.div ref={ref} style={springs}>
                  <h1>
                    <span className={styles.quotation}>“</span>
                    {testimonial.testimonialFields.quote}”
                  </h1>
                  <h2>
                    {testimonial.testimonialFields.quotedBy}{" "}
                    <span>{testimonial.testimonialFields.position}</span>
                  </h2>
                </animated.div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialSection;
