import { Body } from "./Body";

export function InfoSection() {
  return (
    <section className="flex flex-col gap-3 px-5 pb-10">
      <Body>I&apos;m a Senior Frontend Engineer based in Poland.</Body>
      <Body>
        Here I write about my experience, projects, and lessons learned while
        building scalable and high-performance web applications with JavaScript,
        TypeScript, and React.
      </Body>
    </section>
  );
}