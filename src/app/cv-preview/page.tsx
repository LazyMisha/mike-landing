import Link from 'next/link';
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
import { Heading } from '@/components/Heading';
import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import TimelineSection from '@/components/TimelineSection';
import { cliLabels, navigationLabels, terminalCommands } from '@/lib/constants';
import { cvPreviewData } from '@/lib/cv-preview-data';

const accentLinkClassName =
  'text-(--accent-green) transition-colors duration-200 hover:text-(--accent-green-hover) focus:underline focus:outline-none';

const downloadLinkClassName =
  'mt-5 inline-flex rounded-sm border border-(--accent-green) px-4 py-2 text-sm font-semibold text-(--accent-green) transition-colors duration-200 hover:bg-(--accent-green) hover:text-black focus:outline-none focus:ring-2 focus:ring-(--accent-green) focus:ring-offset-2 focus:ring-offset-background';

interface CvSectionProps {
  title: string;
  children: React.ReactNode;
}

function CvSection({ title, children }: CvSectionProps) {
  return (
    <TimelineSection>
      <Heading as="h2" className="mb-3">
        {title}
      </Heading>
      {children}
    </TimelineSection>
  );
}

interface BulletListProps {
  items: readonly string[];
}

function BulletList({ items }: BulletListProps) {
  return (
    <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed sm:text-base">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

interface AccentLinkProps {
  href: string;
  children: React.ReactNode;
  download?: boolean;
  className?: string;
}

function AccentLink({ href, children, download, className = accentLinkClassName }: AccentLinkProps) {
  return (
    <a href={href} download={download} className={className}>
      {children}
    </a>
  );
}

export default function CvPreviewPage() {
  return (
    <PageWrapper>
      <TerminalPrompt
        command={terminalCommands.view}
        argument={`${cliLabels.cvPreview}/mykhailo-trunov.md`}
      />
      <BackLink href="/" label={navigationLabels.backToHome} />

      <section className="mb-6 md:mb-8">
        <Heading>{cvPreviewData.title}</Heading>
        <Body className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {cvPreviewData.subtitle}
        </Body>
        <AccentLink href={cvPreviewData.downloadHref} download className={downloadLinkClassName}>
          Download CV
        </AccentLink>
      </section>

      <CvSection title="Professional Summary">
        <Body>{cvPreviewData.summary}</Body>
      </CvSection>

      <CvSection title="Core Information">
        <dl className="space-y-2 text-sm leading-relaxed sm:text-base">
          {cvPreviewData.coreInfo.map((item) => (
            <div key={item.label} className="grid gap-1 sm:grid-cols-[7rem_1fr]">
              <dt className="font-semibold">{item.label}:</dt>
              <dd>
                {'href' in item ? (
                  <AccentLink href={item.href}>{item.value}</AccentLink>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </CvSection>

      <CvSection title="Skills Snapshot">
        <div className="grid gap-4 md:grid-cols-2">
          {cvPreviewData.skillGroups.map((group) => (
            <section key={group.title}>
              <Heading as="h3" className="mb-2 text-base sm:text-lg">
                {group.title}
              </Heading>
              <BulletList items={group.items} />
            </section>
          ))}
        </div>
      </CvSection>

      <CvSection title="Experience Preview">
        <div className="space-y-2 text-sm leading-relaxed sm:text-base">
          <p className="font-semibold">{cvPreviewData.experiencePreview.title}</p>
          <p className="text-zinc-600 dark:text-zinc-400">
            {cvPreviewData.experiencePreview.company} · {cvPreviewData.experiencePreview.dateRange}
          </p>
          <BulletList items={cvPreviewData.experiencePreview.bullets} />
        </div>
      </CvSection>

      <CvSection title="More Detail">
        <Body className="mb-3">
          Want more detail? Explore my experience, projects, and case studies.
        </Body>
        <nav aria-label="Portfolio sections" className="flex flex-wrap gap-3 text-sm sm:text-base">
          {cvPreviewData.portfolioLinks.map((link) => (
            <Link key={link.href} href={link.href} className={accentLinkClassName}>
              [ {link.label} ]
            </Link>
          ))}
        </nav>
      </CvSection>
    </PageWrapper>
  );
}
