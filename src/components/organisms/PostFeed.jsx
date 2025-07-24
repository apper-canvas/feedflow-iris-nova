import React, { useState, useEffect, useMemo } from "react";
import PostCard from "@/components/molecules/PostCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import postService from "@/services/api/postService";
import { motion } from "framer-motion";

const PostFeed = ({ refreshTrigger, searchQuery = "" }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filter posts based on search query - moved here to ensure all hooks are called before any returns
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    
    const query = searchQuery.toLowerCase().trim();
    return posts.filter(post => 
      post.content?.toLowerCase().includes(query) ||
      post.author?.toLowerCase().includes(query)
    );
  }, [posts, searchQuery]);
  const loadPosts = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await postService.getAll();
      setPosts(data);
    } catch (err) {
      setError("Failed to load posts. Please try again.");
      console.error("Error loading posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [refreshTrigger]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} onRetry={loadPosts} />;
  }
// All hooks are now declared at the top - filteredPosts moved above
  if (posts.length === 0) {
    return <Empty />;
  }

  if (searchQuery.trim() && filteredPosts.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-gray-500 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-600">No posts match your search for "{searchQuery}"</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {filteredPosts.map((post, index) => (
        <motion.div
          key={post.Id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <PostCard post={post} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PostFeed;