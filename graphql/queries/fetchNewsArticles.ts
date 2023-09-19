import { gql } from "@apollo/client";

const fetchNewsArticleQuery = gql`
  query MyQuery {
    posts {
      nodes {
        latestNews {
          title
          newsImage {
            sourceUrl
          }
          newsLink {
            url
            title
          }
        }
      }
    }
  }
`;

export default fetchNewsArticleQuery;
