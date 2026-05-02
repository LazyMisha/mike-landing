import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProjectDetailPage from './page';
import { projects } from '@/lib/project-data';

describe('ProjectDetailPage', () => {
  it('renders project details', async () => {
    const project = projects[0];
    const params = Promise.resolve({ id: project.id });
    render(await ProjectDetailPage({ params }));

    expect(screen.getByText(project.name)).toBeInTheDocument();
    expect(screen.getByText(project.description.split('\n\n')[0])).toBeInTheDocument();
  });

  it('renders technologies', async () => {
    const project = projects[0];
    const params = Promise.resolve({ id: project.id });
    render(await ProjectDetailPage({ params }));

    expect(screen.getByText(project.technologies.join(', '))).toBeInTheDocument();
  });

  it('renders external links when a project has them', async () => {
    const project = projects.find((item) => item.name === 'QuizLab');
    if (!project) {
      throw new Error('QuizLab project fixture is missing');
    }

    const params = Promise.resolve({ id: project.id });
    render(await ProjectDetailPage({ params }));

    expect(screen.getByRole('link', { name: 'Live project' })).toHaveAttribute(
      'href',
      'https://lazymisha.github.io/quizlab/',
    );
    expect(screen.getByRole('link', { name: 'Source code' })).toHaveAttribute(
      'href',
      'https://github.com/LazyMisha/quizlab',
    );
  });

  it('renders AI Prompt Laba detail page with links', async () => {
    const project = projects.find((item) => item.name === 'AI Prompt Laba');
    if (!project) {
      throw new Error('AI Prompt Laba project fixture is missing');
    }

    const params = Promise.resolve({ id: project.id });
    render(await ProjectDetailPage({ params }));

    expect(screen.getByText(project.name)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Live project' })).toHaveAttribute(
      'href',
      'https://ai-prmptlaba-web.vercel.app/',
    );
    expect(screen.getByRole('link', { name: 'Source code' })).toHaveAttribute(
      'href',
      'https://github.com/LazyMisha/ai-prmptlaba-web',
    );
  });

  it('does not render project metadata labels', async () => {
    const project = projects[0];
    const params = Promise.resolve({ id: project.id });
    render(await ProjectDetailPage({ params }));

    expect(screen.queryByText('Role:')).not.toBeInTheDocument();
    expect(screen.queryByText('Company:')).not.toBeInTheDocument();
    expect(screen.queryByText('Date:')).not.toBeInTheDocument();
    expect(screen.queryByText('Location:')).not.toBeInTheDocument();
  });
});
