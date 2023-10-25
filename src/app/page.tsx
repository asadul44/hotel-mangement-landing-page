import Analytical from "@/components/Analytical";
import FeatureCardContainer from "@/components/Card";
import HeroSection from "@/components/HeroSection";
import HotelSiteSection from "@/components/Hotel";
import BannerImage from "@/components/Image/analytical";
const features = [
  {
    title: "Reservation Management",
    description: "Effortlessly handle hotel reservations and bookings.",
  },
  {
    title: "Inventory Tracking",
    description: "Keep track of hotel inventory and supplies with ease.",
  },
  {
    title: "Guest Check-In/Out",
    description: "Streamline the check-in and check-out process for guests.",
  },
  // Add more features here
];
export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeatureCardContainer features={features} />
      <Analytical />
      {/* <HotelSiteSection /> */}
      {/* <BannerImage /> */}
    </div>
  );
}
