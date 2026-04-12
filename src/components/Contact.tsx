import { personalInfo } from "@/lib/data";

export function Contact() {
  if (!personalInfo.email) return null;

  return (
    <div>
      <p className="text-xs text-muted-foreground mb-1">
        Want to get in touch?
      </p>
      <a
        href={`mailto:${personalInfo.email}`}
        className="text-sm underline underline-offset-4 hover:text-foreground transition-colors"
      >
        {personalInfo.email}
      </a>
    </div>
  );
}