"use client";
import { Container } from "@mui/material";
import styles from "./TestimonitalSection.module.scss";
import { useInView, animated } from "@react-spring/web";

type TestimonialProps = {
  testimonial: TestimonialsData;
};

function TestimonialSection() {
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

          {/* {testimonial.testimonials.nodes.map(
            (testimonial: Testimonial, i: number) => ( */}
          <div className={styles.testimonialQuote}>
            <animated.div ref={ref} style={springs}>
              <h1>
                <span className={styles.quotation}>“</span>
                {/* {testimonial.testimonialFields.quote}” */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                inventore ea eius unde architecto placeat.”
              </h1>
              <h2>
                {/* {testimonial.testimonialFields.quotedBy}{" "} */}
                Lorem, ipsum.{" "}
                {/* <span>{testimonial.testimonialFields.position}</span> */}
                <span>Lorem.</span>
              </h2>
            </animated.div>
          </div>
          {/* )
          )} */}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialSection;
