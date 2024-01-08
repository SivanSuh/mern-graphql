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
  },
};
