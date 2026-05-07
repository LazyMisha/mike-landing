import type { Metadata } from "next";
import BackLink from '@/components/BackLink';
import { Body } from '@/components/Body';
import { Heading } from '@/components/Heading';
import { PageWrapper } from '@/components/PageWrapper';
import TerminalPrompt from '@/components/TerminalPrompt';
import TimelineSection from '@/components/TimelineSection';
import { cliLabels, navigationLabels, terminalCommands } from '@/lib/constants';
import { cvPreviewData } from '@/lib/cv-preview-data';

export const metadata: Metadata = {
  title: 'CV Preview — Mykhailo Trunov',
  description: 'A focused web summary of the full PDF CV for Mykhailo Trunov, Senior Front-end Engineer.',
};

const accentLinkClassName =
  'font-semibold text-(--brand) transition-colors duration-200 hover:text-(--brand-hover) focus:underline focus:outline-none';

const downloadLinkClassName =
  'mt-5 inline-flex rounded-sm border border-(--brand) px-4 py-2 text-sm font-semibold text-(--brand) transition-colors duration-200 hover:bg-(--brand) hover:text-black focus:outline-none focus:ring-2 focus:ring-(--brand) focus:ring-offset-2 focus:ring-offset-background';

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

      <CvSection title="Key Strengths">
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

      <CvSection title="Current Role Highlight">
        <div className="space-y-2 text-sm leading-relaxed sm:text-base">
          <p className="font-semibold">
            {cvPreviewData.currentRole.title} @ {cvPreviewData.currentRole.company}
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            {cvPreviewData.currentRole.location} · {cvPreviewData.currentRole.dateRange}
          </p>
          <BulletList items={cvPreviewData.currentRole.bullets} />
        </div>
      </CvSection>

      <CvSection title="Experience Snapshot">
        <ol className="space-y-3 text-sm leading-relaxed sm:text-base">
          {cvPreviewData.experienceSnapshot.map((item) => (
            <li key={`${item.company}-${item.title}-${item.dateRange}`}>
              <p className="font-semibold">
                {item.title} @ {item.company}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                {item.location} · {item.dateRange}
              </p>
            </li>
          ))}
        </ol>
      </CvSection>

      <CvSection title="Selected Results">
        <BulletList items={cvPreviewData.selectedResults} />
      </CvSection>

      <CvSection title="Education">
        <div className="text-sm leading-relaxed sm:text-base">
          <p className="font-semibold">{cvPreviewData.education.degree}</p>
          <p className="text-zinc-600 dark:text-zinc-400">{cvPreviewData.education.institution}</p>
        </div>
      </CvSection>
    </PageWrapper>
  );
}
