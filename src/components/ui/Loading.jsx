import React from "react";
import Card from "@/components/atoms/Card";

const PostSkeleton = () => (
  <Card className="bg-white">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
      <div className="flex-1 space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded-full px-2 py-1 w-16 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
        </div>
        <div className="flex items-center gap-4 pt-2">
          <div className="h-3 bg-gray-200 rounded w-12 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-12 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-12 animate-pulse"></div>
        </div>
      </div>
    </div>
  </Card>
);

const Loading = () => {
  return (
    <div className="space-y-4">
      <div className="text-center py-4">
        <div className="inline-flex items-center gap-2 text-primary">
          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span className="font-medium">Loading posts...</span>
        </div>
      </div>
      
      {[1, 2, 3].map((item) => (
        <PostSkeleton key={item} />
      ))}
    </div>
  );
};

export default Loading;