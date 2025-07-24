import React from "react";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const Empty = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Card className="text-center py-16 bg-gradient-surface">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-primary/10 flex items-center justify-center">
            <ApperIcon name="MessageSquare" size={40} className="text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <ApperIcon name="Plus" size={16} className="text-accent" />
          </div>
        </div>
        
        <div className="space-y-3 max-w-md">
          <h3 className="text-2xl font-bold text-gradient">No posts yet!</h3>
          <p className="text-gray-600 leading-relaxed">
            Be the first to share your thoughts with the community. Your voice matters, and we'd love to hear what's on your mind.
          </p>
        </div>
        
        <Button 
          onClick={scrollToTop}
          size="large"
          className="mt-4 px-8"
        >
          <ApperIcon name="PenTool" size={18} className="mr-2" />
          Create First Post
        </Button>
        
        <div className="flex items-center gap-8 mt-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <ApperIcon name="Users" size={16} />
            <span>Join the conversation</span>
          </div>
          <div className="flex items-center gap-2">
            <ApperIcon name="Heart" size={16} />
            <span>Share your story</span>
          </div>
          <div className="flex items-center gap-2">
            <ApperIcon name="Zap" size={16} />
            <span>Connect with others</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Empty;