// components/FeatureCardContainer.tsx
import React from "react";
import FeatureCard from "./FeatureCard";

interface Feature {
  title: string;
  description: string;
}

interface FeatureCardContainerProps {
  features: Feature[];
}

const FeatureCardContainer: React.FC<FeatureCardContainerProps> = ({
  features,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-6">Hotel Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureCardContainer;
