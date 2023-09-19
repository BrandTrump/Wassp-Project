import { gql } from "@apollo/client";

const fetchNewsArticleQuery = gql`
  query MyQuery {
    allLatestNews {
      nodes {
        latestNewsFields {
          newsImage {
            node {
              sourceUrl
            }
          }
          newsLink {
            url
          }
          title
        }
      }
    }
  }
`;

export default fetchNewsArticleQuery;
