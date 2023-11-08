import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import ExploreSection from "@/components/Explore/ExploreSection";
import FeatureSection from "@/components/Features/FeatureSection";
import TestimonialSection from "@/components/Testimonials/TestimonialSection";
import LatestNews from "@/components/LatestNews/LatestNews";
import { getClient } from "@/apollo-client";
import fetchNewsArticleQuery from "@/graphql/queries/fetchNewsArticles";
import fetchTestimonial from "@/graphql/queries/fetchTestimonial";
import fetchAboutQuery from "@/graphql/queries/fetchAboutDetails";

async function Home() {
  // const client = getClient();

  // const { data: newsArticles } = await client.query({
  //   query: fetchNewsArticleQuery,
  // });

  // const { data: testimonial } = await client.query({
  //   query: fetchTestimonial,
  // });

  // const { data: about } = await client.query({
  //   query: fetchAboutQuery,
  // });

  return (
    <main>
      <HeroSection />
      {/* <AboutSection about={about} /> */}
      <AboutSection />
      <ExploreSection />
      <FeatureSection />
      {/* <TestimonialSection testimonial={testimonial} /> */}
      <TestimonialSection />
      {/* <LatestNews news={newsArticles} /> */}
      <LatestNews />
    </main>
  );
}

export default Home;
