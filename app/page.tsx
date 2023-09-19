import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ExploreSection from "@/components/Explore/ExploreSection";
import FeatureSection from "@/components/Features/FeatureSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import LatestNews from "@/components/LatestNews/LatestNews";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <FeatureSection />
      <TestimonialSection />
      <LatestNews />
    </main>
  );
}
