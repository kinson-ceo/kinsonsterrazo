import React from "react";

interface ShimmerProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  className?: string;
}

const Shimmer: React.FC<ShimmerProps> = ({
  width,
  height,
  borderRadius,
  className,
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-gray-200 dark:bg-gray-700 ${
        className || ""
      }`}
      style={{
        width: width || "100%",
        height: height || "100%",
        borderRadius: borderRadius || "4px",
      }}
    >
      <div
        className="animate-shimmer absolute inset-0 -translate-x-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
        style={{
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
};

export default Shimmer;
