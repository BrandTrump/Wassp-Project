import styles from "./page.module.css";
import HeroSection from "@/components/Hero/HeroSection";
import Container from "@mui/material/Container";
import NewsArticle from "@/components/NewsArticle/NewsArticle";
import AboutSection from "@/components/About/AboutSection";
import ExploreSection from "@/components/Explore/ExploreSection";
import FeatureSection from "@/components/Features/FeatureSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <FeatureSection />
      <TestimonialSection />
    </main>
  );
}
