import { gql } from "@apollo/client";

export const GET_POST = gql`
  query ExampleQuery {
    getPost {
      description
      title
    }
  }
`;
