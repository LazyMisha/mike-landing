import { Body } from "./Body";

export function InfoSection() {
  return (
    <section className="flex flex-col gap-3 px-5 pb-10">
      <Body className="max-w-[75ch]">
        I&apos;m a fan of frontend challenges - the more complex, the better.
        I turn complex problems into clean, scalable solutions that work in the real world.
        I value clear communication, teamwork, and never stop learning.
      </Body>
    </section>
  );
}