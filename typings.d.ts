interface NewsImageNode {
  sourceUrl: string;
}

interface NewsLink {
  url: string;
}

interface LatestNewsFields {
  newsImage: {
    node: NewsImageNode;
  };
  newsLink: NewsLink;
  title: string;
}

interface LatestNews {
  latestNewsFields: LatestNewsFields;
}

interface AllLatestNewsData {
  allLatestNews: {
    nodes: LatestNews[];
  };
}

interface Testimonial {
  testimonialFields: {
    position: string;
    quote: string;
    quotedBy: string;
  };
}

interface TestimonialsData {
  testimonials: {
    nodes: Testimonial[];
  };
}
