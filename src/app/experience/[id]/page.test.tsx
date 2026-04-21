import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import ExperienceDetailPage from './page';
import { experiences } from '@/lib/experience-data';
import { cliLabels } from '@/lib/constants';

// Mock next/navigation
vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NOT_FOUND');
  }),
}));

beforeEach(() => {
  cleanup();
  vi.clearAllMocks();
});

afterEach(() => {
  vi.resetAllMocks();
});

describe('ExperienceDetailPage', () => {
  it('should render experience detail for valid id', async () => {
    const validExperience = experiences[0];
    const pageProps = {
      params: Promise.resolve({ id: validExperience.id }),
    };

    const Page = await ExperienceDetailPage(pageProps);
    render(Page);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(validExperience.title);
    expect(screen.getByText(`@ ${validExperience.company}`)).toBeInTheDocument();
  });

  it('should render back link', async () => {
    const validExperience = experiences[0];
    const pageProps = {
      params: Promise.resolve({ id: validExperience.id }),
    };

    const Page = await ExperienceDetailPage(pageProps);
    render(Page);

    const backLink = screen.getByRole('link', { name: /back to experience list/i });
    expect(backLink).toHaveAttribute('href', '/experience');
  });

  it('should render terminal prompt with correct arguments', async () => {
    const validExperience = experiences[0];
    const pageProps = {
      params: Promise.resolve({ id: validExperience.id }),
    };

    const Page = await ExperienceDetailPage(pageProps);
    render(Page);

    // Check that the terminal prompt shows the experience id
    expect(screen.getByText(`${cliLabels.experience}/${validExperience.id}`)).toBeInTheDocument();
  });

  it('should call notFound for invalid id', async () => {
    const pageProps = {
      params: Promise.resolve({ id: 'invalid-id' }),
    };

    await expect(async () => {
      const Page = await ExperienceDetailPage(pageProps);
      render(Page);
    }).rejects.toThrow('NOT_FOUND');
    
    // Verify notFound was specifically called
    const { notFound } = await import('next/navigation');
    expect(notFound).toHaveBeenCalled();
  });

  it('should render all sections for each experience', async () => {
    for (const experience of experiences) {
      const pageProps = {
        params: Promise.resolve({ id: experience.id }),
      };

      const Page = await ExperienceDetailPage(pageProps);
      render(Page);

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(experience.title);
      expect(screen.getByRole('heading', { level: 2, name: /overview/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /technologies/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /key achievements/i })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2, name: /timeline/i })).toBeInTheDocument();
      
      cleanup();
    }
  });
});
