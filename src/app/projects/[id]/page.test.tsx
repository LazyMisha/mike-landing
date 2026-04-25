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
});
