import { landingData } from '@/lib/data';

export function LinksSection() {
  const { email } = landingData.personal;
  const { linkedin } = landingData.socials;

  return (
    <div className="flex flex-col items-start gap-1">
      {email && (
        <a
          href={`mailto:${email}`}
          className="hover:text-foreground text-xs underline underline-offset-4 transition-colors sm:text-sm"
        >
          {email}
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground text-xs underline underline-offset-4 transition-colors sm:text-sm"
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}
