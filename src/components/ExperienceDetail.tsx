import React from 'react';
import { Heading } from './Heading';
import { Body } from './Body';
import type { Experience } from '@/lib/experience-data';

interface ExperienceDetailProps {
  experience: Experience;
}

export default React.memo(function ExperienceDetail({ experience }: ExperienceDetailProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header Section */}
      <article className="mb-6">
        <Heading as="h1">{experience.title}</Heading>
        <Body className="text-lg mt-1">
          @ {experience.company}
        </Body>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
          <span>{experience.dateRange}</span>
        </div>
      </article>

      {/* Overview Section */}
      <section aria-labelledby="overview-heading">
        <h2 id="overview-heading" className="sr-only">Overview</h2>
        <Heading as="h2" className="text-lime-700 dark:text-lime-500" aria-label="Overview">
          <span aria-hidden="true">[ Overview ]</span>
        </Heading>
        <div className="mt-2 space-y-3">
          <Body>{experience.fullDescription}</Body>
        </div>
      </section>

      {/* Technologies Section */}
      <section aria-labelledby="technologies-heading">
        <h2 id="technologies-heading" className="sr-only">Technologies</h2>
        <Heading as="h2" className="text-lime-700 dark:text-lime-500" aria-label="Technologies">
          <span aria-hidden="true">[ Technologies ]</span>
        </Heading>
        <div className="mt-2 flex flex-wrap gap-2" role="list">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-mono border border-gray-200 dark:border-gray-700"
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Key Achievements Section */}
      <section aria-labelledby="achievements-heading">
        <h2 id="achievements-heading" className="sr-only">Key Achievements</h2>
        <Heading as="h2" className="text-lime-700 dark:text-lime-500" aria-label="Key Achievements">
          <span aria-hidden="true">[ Key Achievements ]</span>
        </Heading>
        <ul className="mt-2 space-y-2 list-none" role="list">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-lime-700 dark:text-lime-500 mt-1" aria-hidden="true">├─</span>
              <Body className="flex-1">{achievement}</Body>
            </li>
          ))}
        </ul>
      </section>

      {/* Timeline Section */}
      <section aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="sr-only">Timeline</h2>
        <Heading as="h2" className="text-lime-700 dark:text-lime-500" aria-label="Timeline">
          <span aria-hidden="true">[ Timeline ]</span>
        </Heading>
        <div className="mt-2 space-y-3">
          {experience.timeline.milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-sm font-mono text-gray-500 dark:text-gray-400 min-w-[100px]">
                {milestone.date}
              </span>
              <span className="text-lime-700 dark:text-lime-500 mt-1" aria-hidden="true">│</span>
              <Body className="flex-1">{milestone.event}</Body>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});
