import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact } from "@/components/Contact";
import { PageWrapper } from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper as="main">
      <Header />
      <Hero />
      <Contact />
    </PageWrapper>
  );
}