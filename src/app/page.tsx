import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InfoSection } from "@/components/InfoSection";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper as="main">
      <Header />
      <Hero />
      <InfoSection />
    </PageWrapper>
  );
}