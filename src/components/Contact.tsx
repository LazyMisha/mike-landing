import { personalInfo } from "@/lib/data";

export function Contact() {
  if (!personalInfo.email) return null;

  return (
    <section className="mx-auto max-w-[75ch] px-5 py-16">
      <p className="text-sm text-muted-foreground mb-4">
        Want to get in touch?
      </p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="text-lg font-medium underline underline-offset-4 hover:text-foreground transition-colors"
      >
        {personalInfo.email}
      </a>
    </section>
  );
}