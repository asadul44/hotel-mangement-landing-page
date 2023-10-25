// components/HotelSiteSection.tsx
import Image from "next/image";
import React from "react";

const HotelSiteSection: React.FC = () => {
  return (
    <section id="hotel-site" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Powerful Hotel Website Management
        </h2>
        <p className="mt-4 text-gray-600">
          Elevate your hotel&apos;s online presence with our intuitive website
          management tools.
        </p>
        <Image
          src="/hotel.png"
          alt="Hotel Website"
          className="mt-8 object-cover rounded-lg shadow-lg mx-auto"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HotelSiteSection;
