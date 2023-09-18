import NewsArticle from "../NewsArticle/NewsArticle";
import styles from "./LatestNews.module.scss";
import img1 from "@/public/images/05.jpg";
import img2 from "@/public/images/06.jpg";
import img3 from "@/public/images/07.jpg";
import img4 from "@/public/images/08.jpg";
import img5 from "@/public/images/09.jpg";
import img6 from "@/public/images/10.jpg";
import img7 from "@/public/images/11.jpg";
import img8 from "@/public/images/12.jpg";
import img9 from "@/public/images/13.jpg";
import img10 from "@/public/images/14.jpg";
import { Container } from "@mui/material";
import Image from "next/image";

const images = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img9 },
  { img: img10 },
];

function LatestNews() {
  return (
    <section className={styles.sectionContainer}>
      <Container maxWidth="xl" disableGutters>
        <div className={styles.sectionTitle}>
          <h2>
            05<span>Latest News</span>
          </h2>
        </div>

        <NewsArticle />

        <div className={styles.wrapper}>
          <div className={styles.imagesContainer}>
            {images.map((src) => (
              <>
                <Image
                  src={src.img}
                  alt="news image"
                  width={100}
                  height={100}
                  priority
                  style={{ borderRadius: ".5em" }}
                />
              </>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LatestNews;