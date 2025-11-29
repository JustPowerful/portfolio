import React from "react";
import notFoundImage from "@/assets/404.png";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        src={notFoundImage}
        alt="404 Easter egg image"
        width={800}
        height={800}
      />
    </div>
  );
};

export default NotFound;
