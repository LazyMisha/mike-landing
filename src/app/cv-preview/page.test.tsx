import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { cvPreviewData } from '@/lib/cv-preview-data';
import CvPreviewPage from './page';

describe('CvPreviewPage', () => {
  it('renders terminal prompt and title', () => {
    render(<CvPreviewPage />);

    expect(
      screen.getByText('[cv-preview]/mykhailo-trunov.md'),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'CV Preview' }),
    ).toBeInTheDocument();
  });

  it('renders download CV link', () => {
    render(<CvPreviewPage />);

    const downloadLink = screen.getByRole('link', { name: 'Download CV' });
    expect(downloadLink).toHaveAttribute('href', cvPreviewData.downloadHref);
    expect(downloadLink).toHaveAttribute('download');
  });

  it('renders core professional information from the PDF CV', () => {
    render(<CvPreviewPage />);

    expect(
      screen.getAllByText('Senior Front-end Engineer & Scrum Master').length,
    ).toBeGreaterThan(0);
    expect(screen.getByText('Poland')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'misha_trunov@hotmail.com' }),
    ).toHaveAttribute('href', 'mailto:misha_trunov@hotmail.com');
    expect(
      screen.getByRole('link', {
        name: 'https://www.linkedin.com/in/misha-trunov/',
      }),
    ).toHaveAttribute('href', 'https://www.linkedin.com/in/misha-trunov/');
  });

  it('renders key strengths and current role highlight', () => {
    render(<CvPreviewPage />);

    expect(screen.getByText('Key Strengths')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('GitLab CI/CD')).toBeInTheDocument();
    expect(screen.getByText('Current Role Highlight')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Designed and delivered scalable React components and APIs/,
      ),
    ).toBeInTheDocument();
  });

  it('renders the CV experience snapshot', () => {
    render(<CvPreviewPage />);

    expect(screen.getByText('Experience Snapshot')).toBeInTheDocument();
    expect(
      screen.getAllByText('Senior Front-end Engineer & Scrum Master @ Avid')
        .length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByText('Senior Front-end Engineer @ GlobalLogic'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Software Test Engineer @ AB Soft'),
    ).toBeInTheDocument();
  });

  it('renders selected results and education', () => {
    render(<CvPreviewPage />);

    expect(screen.getByText('Selected Results')).toBeInTheDocument();
    expect(
      screen.getByText(/Microsoft Graph API integration/),
    ).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(
      screen.getByText('Master’s degree of Business Project Management'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Lviv Polytechnic National University'),
    ).toBeInTheDocument();
  });
});
