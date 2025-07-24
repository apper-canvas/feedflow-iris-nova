import React from "react";
import { formatDistanceToNow } from "date-fns";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import { motion } from "framer-motion";

const PostCard = ({ post }) => {
  const formatTimestamp = (timestamp) => {
    try {
      const date = new Date(timestamp);
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (error) {
      return "Just now";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="animate-slide-in"
    >
      <Card hover className="bg-white border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <ApperIcon name="User" size={20} className="text-white" />
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-gray-900 text-base">
                {post.authorName}
              </h3>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                {formatTimestamp(post.timestamp)}
              </span>
            </div>
            
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              {post.content}
            </p>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-500 hover:text-accent transition-colors group">
                <ApperIcon 
                  name="Heart" 
                  size={16} 
                  className="group-hover:scale-110 transition-transform" 
                />
                <span className="text-sm font-medium">{post.likes}</span>
              </button>
              
              <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors group">
                <ApperIcon 
                  name="MessageCircle" 
                  size={16} 
                  className="group-hover:scale-110 transition-transform" 
                />
                <span className="text-sm font-medium">Reply</span>
              </button>
              
              <button className="flex items-center gap-2 text-gray-500 hover:text-secondary transition-colors group">
                <ApperIcon 
                  name="Share" 
                  size={16} 
                  className="group-hover:scale-110 transition-transform" 
                />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PostCard;