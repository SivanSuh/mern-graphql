const postSchema = require("../../models/postSchema.js");

module.exports = {
  Query: {
    getPost: async () => {
      try {
        const allPost = await postSchema.find();
        return allPost;
      } catch (err) {
        console.log(err);
      }
    },
    getPostDetail: async (_, { postId }) => {
      try {
        const postDetail = await postSchema.findById(postId);
        return postDetail;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createPost: async (_, { body }) => {
      try {
        const createPosts = await postSchema.create(body);
        return createPosts;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
