import Image from "next/image";
import React from "react";

interface BannerProps {
  message: string;
}

function SecondaryBanner({ message }: BannerProps) {
  return (
    <div className="absolute inset-0  ">
      <Image
        src="/Findsup.jpg"
        layout="fill"
        className="object-fit"
        alt="banner image"
      />
    </div>
  );
}

export default SecondaryBanner;
