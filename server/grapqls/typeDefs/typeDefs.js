module.exports = `#graphql
    type Post {
        id:ID!
        title:String!
        description:String!
    }

    type Query {
        getPost: [Post]
        getPostDetail(postId:ID!) : Post
    }

    input Input {
        title:String!
        description:String!
    }

    type Mutation {
        createPost(body:Input): Post
    }
`;
