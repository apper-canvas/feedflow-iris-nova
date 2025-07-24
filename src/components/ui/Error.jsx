import React from "react";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <Card className="text-center py-12 bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-error/10 flex items-center justify-center">
          <ApperIcon name="AlertCircle" size={32} className="text-error" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">Oops! Something went wrong</h3>
          <p className="text-gray-600 max-w-md">{message}</p>
        </div>
        
        {onRetry && (
          <Button 
            onClick={onRetry}
            variant="primary"
            className="mt-4"
          >
            <ApperIcon name="RefreshCw" size={16} className="mr-2" />
            Try Again
          </Button>
        )}
      </div>
    </Card>
  );
};

export default Error;