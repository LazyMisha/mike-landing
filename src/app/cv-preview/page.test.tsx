import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { cvPreviewData } from '@/lib/cv-preview-data';
import CvPreviewPage from './page';

describe('CvPreviewPage', () => {
  it('renders terminal prompt and title', () => {
    render(<CvPreviewPage />);

    expect(screen.getByText('[cv-preview]/mykhailo-trunov.md')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'CV Preview' })).toBeInTheDocument();
  });

  it('renders download CV link', () => {
    render(<CvPreviewPage />);

    const downloadLink = screen.getByRole('link', { name: 'Download CV' });
    expect(downloadLink).toHaveAttribute('href', cvPreviewData.downloadHref);
    expect(downloadLink).toHaveAttribute('download');
  });

  it('renders core professional information', () => {
    render(<CvPreviewPage />);

    expect(screen.getAllByText('Senior Frontend Engineer').length).toBeGreaterThan(0);
    expect(screen.getByText('Poland')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'misha_trunov@hotmail.com' })).toHaveAttribute(
      'href',
      'mailto:misha_trunov@hotmail.com',
    );
    expect(screen.getByRole('link', { name: 'https://www.linkedin.com/in/misha-trunov/' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/misha-trunov/',
    );
  });

  it('renders skills and experience preview', () => {
    render(<CvPreviewPage />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Component-driven development')).toBeInTheDocument();
    expect(screen.getByText('Experience Preview')).toBeInTheDocument();
    expect(screen.getByText(/Built and maintained scalable frontend features/)).toBeInTheDocument();
  });

  it('renders portfolio navigation links', () => {
    render(<CvPreviewPage />);

    expect(screen.getByRole('link', { name: '[ Experience ]' })).toHaveAttribute('href', '/experience');
    expect(screen.getByRole('link', { name: '[ Projects ]' })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: '[ Case Studies ]' })).toHaveAttribute('href', '/case-studies');
    expect(screen.getByRole('link', { name: '[ Notes ]' })).toHaveAttribute('href', '/notes');
  });
});
