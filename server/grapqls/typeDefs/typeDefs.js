module.exports = `#graphql

type Post {
    id:ID!
    title:String!
    description:String!
}
  type Query {
    getPost: [Post]
  }
`;
