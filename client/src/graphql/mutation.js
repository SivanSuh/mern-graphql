import { gql } from "@apollo/client";

export const CREATE_PORT = gql`
  mutation CreatePost($body: Input) {
    createPost(body: $body) {
      id
      title
      description
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($deletePostId: ID!) {
    deletePost(deletePostId: $deletePostId) {
      id
    }
  }
`;
