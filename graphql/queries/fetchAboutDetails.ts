import { gql } from "@apollo/client";

const fetchAboutQuery = gql`
  query MyQuery {
    aboutContents(first: 1) {
      nodes {
        aboutContentFields {
          title
          content
        }
      }
    }
  }
`;

export default fetchAboutQuery;
