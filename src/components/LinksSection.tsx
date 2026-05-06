import { landingData } from "@/lib/data";

export function LinksSection() {
    const { email } = landingData.personal;
    const { linkedin } = landingData.socials;    
    
    return (
        <div className="flex flex-col items-start gap-1">
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
    )
}