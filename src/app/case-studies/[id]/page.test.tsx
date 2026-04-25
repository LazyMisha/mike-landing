import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CaseStudyDetailPage from './page';
import { caseStudies } from '@/lib/case-study-data';

describe('CaseStudyDetailPage', () => {
  it('renders case study details', async () => {
    const caseStudy = caseStudies[0];
    const params = Promise.resolve({ id: caseStudy.id });
    render(await CaseStudyDetailPage({ params }));

    expect(screen.getByText(caseStudy.title)).toBeInTheDocument();
    expect(screen.getByText(caseStudy.problem)).toBeInTheDocument();
    expect(screen.getByText(caseStudy.solution)).toBeInTheDocument();
  });

  it('renders results', async () => {
    const caseStudy = caseStudies[0];
    const params = Promise.resolve({ id: caseStudy.id });
    render(await CaseStudyDetailPage({ params }));

    caseStudy.result.forEach(res => {
      expect(screen.getByText(res)).toBeInTheDocument();
    });
  });
});
