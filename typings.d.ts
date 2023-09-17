interface NewsImage {
  sourceUrl: string;
}

interface NewsLink {
  url: string;
  title: string;
}

interface LatestNews {
  title: string;
  newsImage: NewsImage;
  newsLink: NewsLink;
  fieldGroupName: string;
}

interface NewsArticle {
  latestNews: LatestNews;
}

interface NewsData {
  posts: {
    nodes: NewsArticle[];
  };
}
