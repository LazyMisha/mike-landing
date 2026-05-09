import { Hero } from "@/components/landing/Hero";
import { InfoSection } from "@/components/landing/InfoSection";
import { PageWrapper } from "@/components/PageWrapper";
import CliNavigation from "@/components/CliNavigation";

export default function Home() {
  return (
    <PageWrapper as="main">
      <Hero />
      <InfoSection />
      <CliNavigation />
    </PageWrapper>
  );
}