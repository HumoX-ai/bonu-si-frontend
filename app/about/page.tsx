import ArchitectureOfModel from "@/components/about/components/architecture-of-model";
import BonuModelsSection from "@/components/about/components/bonu-models-section";
import HeroSection from "@/components/about/components/hero-section";
import UseCasesSection from "@/components/about/components/use-cases-section";
import UzbekistanDataSection from "@/components/about/components/uzbekistan-data-section";

export default function About() {
  return (
    <>
      <HeroSection />
      <ArchitectureOfModel />
      <BonuModelsSection />
      <UseCasesSection />
      <UzbekistanDataSection />
    </>
  );
}
