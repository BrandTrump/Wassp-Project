import { gql } from "@apollo/client";

const fetchTestimonial = gql`
  query MyQuery {
    testimonials {
      nodes {
        testimonialFields {
          position
          quote
          quotedBy
        }
      }
    }
  }
`;

export default fetchTestimonial;
