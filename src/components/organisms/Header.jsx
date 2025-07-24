import React from "react";
import SearchBar from "@/components/molecules/SearchBar";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Header = ({ onSearch = () => {} }) => {
  return (
    <motion.header 
      className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <ApperIcon name="Zap" size={24} className="text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gradient">FeedFlow</h1>
              <p className="text-sm text-gray-600">Share your thoughts with the world</p>
            </div>
</div>
          <div className="mt-4 flex justify-center">
            <SearchBar onSearch={onSearch} placeholder="Search posts..." />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;