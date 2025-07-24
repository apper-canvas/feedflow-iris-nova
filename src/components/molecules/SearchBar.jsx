import React, { useState, useCallback } from "react";
import Input from "@/components/atoms/Input";
import ApperIcon from "@/components/ApperIcon";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const SearchBar = ({ onSearch, placeholder = "Search posts..." }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  }, [onSearch]);

  const clearSearch = useCallback(() => {
    setSearchValue("");
    onSearch("");
  }, [onSearch]);

  return (
    <motion.div 
      className="relative w-full max-w-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative">
        <ApperIcon 
          name="Search" 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
          className={cn(
            "pl-10 pr-10 py-2.5 text-sm bg-gray-50 border-gray-200 focus:bg-white transition-colors duration-200",
            searchValue && "pr-10"
          )}
        />
        {searchValue && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-150"
            type="button"
          >
            <ApperIcon name="X" size={16} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default SearchBar;