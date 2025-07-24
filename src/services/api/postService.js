import postsData from "@/services/mockData/posts.json";

class PostService {
  constructor() {
    this.posts = [...postsData];
  }

  async getAll() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Return posts sorted by timestamp (newest first)
    return this.posts
      .slice()
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  }

  async create(postData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // Find highest existing Id and add 1
    const maxId = this.posts.reduce((max, post) => Math.max(max, post.Id), 0);
    
    const newPost = {
      Id: maxId + 1,
      authorName: postData.authorName || "Anonymous",
      content: postData.content,
      timestamp: new Date().toISOString(),
      likes: 0
    };
    
    this.posts.push(newPost);
    return { ...newPost };
  }

  async getById(id) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 250));
    
    const post = this.posts.find(p => p.Id === parseInt(id));
    if (!post) {
      throw new Error("Post not found");
    }
    return { ...post };
  }

  async update(id, updateData) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const postIndex = this.posts.findIndex(p => p.Id === parseInt(id));
    if (postIndex === -1) {
      throw new Error("Post not found");
    }
    
    this.posts[postIndex] = { ...this.posts[postIndex], ...updateData };
    return { ...this.posts[postIndex] };
  }

  async delete(id) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 250));
    
    const postIndex = this.posts.findIndex(p => p.Id === parseInt(id));
    if (postIndex === -1) {
      throw new Error("Post not found");
    }
    
    this.posts.splice(postIndex, 1);
    return true;
  }
}

const postService = new PostService();
export default postService;