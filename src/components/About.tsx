import { Body } from "./Body";
import { landingData } from "@/lib/data";

export function About() {
  return (
    <section className="flex flex-col gap-2 px-5">
      <Body className="max-w-[75ch]">I&apos;m a Senior Frontend Engineer based in Poland.</Body>
      <Body className="max-w-[75ch]">
        Here I write about my experience, projects, and lessons learned while
        building scalable and high-performance web applications with JavaScript,
        TypeScript, and React.
      </Body>
    </section>
  );
}