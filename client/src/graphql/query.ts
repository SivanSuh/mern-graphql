import { gql } from "@apollo/client";

export const GET_POST = gql`
  query ExampleQuery {
    getPost {
      description
      title,
      id
    }
  }
`;

export const DETAIL_POST = gql`
  query GetPostDetail($postId: ID!) {
    getPostDetail(postId: $postId) {
      title,
      id,
      description
    }
  }
`