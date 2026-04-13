import { Heading } from "./Heading";
import { Body } from "./Body";
import { landingData } from "@/lib/data";

export function Contact() {
  const { email } = landingData.personal;
  const { linkedin } = landingData.socials;

  return (
    <section className="flex flex-col gap-3 px-5 pb-10">
      <Body>I&apos;m a Senior Frontend Engineer based in Poland.</Body>
      <Body>
        Here I write about my experience, projects, and lessons learned while
        building scalable and high-performance web applications with JavaScript,
        TypeScript, and React.
      </Body>
      <Heading as="h2">Contacts:</Heading>
      <div className="flex flex-col gap-1">
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-xs sm:text-sm underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {email}
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm underline underline-offset-4 hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}