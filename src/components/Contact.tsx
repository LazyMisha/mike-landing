import { personalInfo } from "@/lib/data";

export function Contact() {
  return (
    <div>
      <p className="text-sm leading-relaxed sm:text-base max-w-[75ch]">
        I&apos;m a Senior Frontend Engineer based in Poland.
      </p>
      <p className="mt-2 text-sm leading-relaxed sm:text-base max-w-[75ch]">
        Here I write about my experience, projects, and lessons learned while building scalable and high-performance web applications with JavaScript, TypeScript, and React.
      </p>
      <p className="mt-4 text-2xl leading-tight sm:text-3xl md:text-2xl lg:text-3xl font-bold">
        Contacts:
      </p>
      <div className="mt-2 flex flex-col gap-1">
        {personalInfo.email && (
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs sm:text-sm underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {personalInfo.email}
          </a>
        )}
        {personalInfo.linkedin && (
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm underline underline-offset-4 hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}