import HeroSlider from "@/components/HeroSlider";
import TrustBar from "@/components/TrustBar";
import ProductCategories from "@/components/ProductCategories";
import WhyUs from "@/components/WhyUs";
import BrandsStrip from "@/components/BrandsStrip";
import EnquiryStrip from "@/components/EnquiryStrip";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustBar />
      <ProductCategories />
      <WhyUs />
      <BrandsStrip />
      <EnquiryStrip />
    </>
  );
}
