import styles from "./page.module.css";
import HeroSection from "@/components/Hero/HeroSection";
import Container from "@mui/material/Container";
import NewsArticle from "@/components/NewsArticle/NewsArticle";
import AboutSection from "@/components/About/AboutSection";
import ExploreSection from "@/components/Explore/ExploreSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <ExploreSection />
    </main>
  );
}
