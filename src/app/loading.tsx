import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-btn"></div>
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;
