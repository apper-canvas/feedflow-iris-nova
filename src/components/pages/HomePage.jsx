import React, { useState } from "react";
import NewPostForm from "@/components/molecules/NewPostForm";
import PostFeed from "@/components/organisms/PostFeed";
import postService from "@/services/api/postService";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const HomePage = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePostCreate = async (postData) => {
    try {
      setIsSubmitting(true);
      await postService.create(postData);
      
      // Trigger refresh of the feed
      setRefreshTrigger(prev => prev + 1);
      
      toast.success("Post shared successfully! 🎉");
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to share post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-2xl mx-auto px-4 py-6">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <NewPostForm 
            onPostCreate={handlePostCreate}
            isSubmitting={isSubmitting}
          />
          
          <div className="border-t border-gray-100 pt-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-primary rounded-full"></span>
                Recent Posts
              </h2>
              <PostFeed refreshTrigger={refreshTrigger} />
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default HomePage;