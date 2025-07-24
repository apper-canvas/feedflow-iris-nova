import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import Textarea from "@/components/atoms/Textarea";
import Input from "@/components/atoms/Input";
import CharacterCounter from "@/components/molecules/CharacterCounter";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const NewPostForm = ({ onPostCreate, isSubmitting }) => {
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const maxCharacters = 500;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      return;
    }
    
    await onPostCreate({
      content: content.trim(),
      authorName: authorName.trim() || "Anonymous"
    });
    
    setContent("");
    setAuthorName("");
  };

  const isValid = content.trim().length > 0 && content.length <= maxCharacters;

  return (
    <Card className="bg-white border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
            <ApperIcon name="PenTool" size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gradient">Share your thoughts</h2>
            <p className="text-gray-600 text-sm">What's on your mind today?</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <Input
              id="authorName"
              type="text"
              placeholder="Enter your name (optional)"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              maxLength={50}
              className="text-base"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Your Post
            </label>
            <Textarea
              id="content"
              placeholder="Share what's on your mind..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={maxCharacters + 50} // Allow typing past limit for visual feedback
              rows={4}
              className="text-base"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <CharacterCounter 
            current={content.length} 
            max={maxCharacters}
          />
          
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="px-6 py-2.5 font-semibold"
          >
            {isSubmitting ? (
              <>
                <ApperIcon name="Loader2" size={16} className="animate-spin mr-2" />
                Posting...
              </>
            ) : (
              <>
                <ApperIcon name="Send" size={16} className="mr-2" />
                Post
              </>
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default NewPostForm;