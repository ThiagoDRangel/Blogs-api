const { blogPostService } = require('../services');

class BlogPostController {
  static async createPost(req, res) {
    const userId = req.user.payload.id;
    const { type, message } = await blogPostService.createPost(req.body, userId);

    return res.status(type).json(message);
  }

  static async getAllPosts(req, res) {
    const { type, message } = await blogPostService.getAllPosts();

    return res.status(type).json(message);
  }

  static async getPostById(req, res) {
    const { id } = req.params;
    const { type, message } = await blogPostService.getPostById(Number(id));

    return res.status(type).json(message);
  }

  static async updatePost(req, res) {
    const { id } = req.params;
    const { type, message } = await blogPostService.updatePost(req.body, id);

    return res.status(type).json(message);
  }

  static async deletePost(req, res) {
    const { id } = req.params;
    const { type, message } = await blogPostService.deletePost(id);

    return res.status(type).json(message);
  }

  static async searchPost(req, res) {
    const { q } = req.query;
    const { type, message } = await blogPostService.searchPost(q);
    
    return res.status(type).json(message);
  }
}

module.exports = BlogPostController;