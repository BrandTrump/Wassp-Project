import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ExploreSection from "@/components/Explore/ExploreSection";
import FeatureSection from "@/components/Features/FeatureSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import LatestNews from "@/components/LatestNews/LatestNews";
import { getClient } from "@/apollo-client";
import fetchNewsArticleQuery from "@/graphql/queries/fetchNewsArticles";

async function Home() {
  const client = getClient();

  const { data: newsArticles } = await client.query({
    query: fetchNewsArticleQuery,
  });

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExploreSection />
      <FeatureSection />
      <TestimonialSection />
      <LatestNews news={newsArticles} />
    </main>
  );
}

export default Home;
