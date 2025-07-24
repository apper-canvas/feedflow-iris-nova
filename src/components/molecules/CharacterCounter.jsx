import React from "react";
import { cn } from "@/utils/cn";

const CharacterCounter = ({ current, max, className }) => {
  const percentage = (current / max) * 100;
  const isWarning = percentage > 80;
  const isError = current > max;
  
  const getColor = () => {
    if (isError) return "text-error";
    if (isWarning) return "text-warning";
    return "text-gray-500";
  };
  
  const getProgressColor = () => {
    if (isError) return "stroke-error";
    if (isWarning) return "stroke-warning";
    return "stroke-primary";
  };
  
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (Math.min(percentage, 100) / 100) * circumference;
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative w-8 h-8">
        <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="3"
          />
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            strokeWidth="3"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={cn("transition-all duration-300", getProgressColor())}
          />
        </svg>
      </div>
      <span className={cn("text-sm font-medium transition-colors", getColor())}>
        {current}/{max}
      </span>
    </div>
  );
};

export default CharacterCounter;