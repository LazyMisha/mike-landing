import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineList from './TimelineList';
import type { TimelineListItem } from './TimelineList';

describe('TimelineList', () => {
  const mockItems: TimelineListItem[] = [
    {
      id: '1',
      title: 'Senior Front-end Engineer & Scrum Master',
      company: 'Avid',
      dateRange: '05.2024 - Present',
      description: 'Designing scalable React components and supporting Agile delivery.',
      location: 'Poland',
      linkHref: '/experience/1',
    },
    {
      id: '2',
      title: 'Senior Front-end Engineer',
      company: 'GlobalLogic',
      dateRange: '04.2022 - 05.2024',
      description: 'Implemented frontend features with React, JavaScript, and TypeScript.',
      location: 'Ukraine, Kyiv',
      linkHref: '/experience/2',
    },
  ];

  it('renders all timeline items', () => {
    render(<TimelineList items={mockItems} />);

    expect(screen.getByText(/Senior Front-end Engineer & Scrum Master/i)).toBeInTheDocument();
    expect(screen.getByText('Senior Front-end Engineer')).toBeInTheDocument();
  });

  it('renders metadata for each item', () => {
    render(<TimelineList items={mockItems} />);

    expect(screen.getByText('05.2024 - Present')).toBeInTheDocument();
    expect(screen.getByText('04.2022 - 05.2024')).toBeInTheDocument();
  });

  it('renders read more links for all items', () => {
    render(<TimelineList items={mockItems} />);

    const readMoreLinks = screen.getAllByText(/read more/i);
    expect(readMoreLinks).toHaveLength(2);
  });

  it('renders items without optional metadata', () => {
    const itemsWithoutMeta: TimelineListItem[] = [
      {
        id: '3',
        title: 'AI Prompt Laba',
        company: 'Personal',
        description: 'A prompt engineering tool.',
        linkHref: '/projects/ai-prompt-laba',
      },
    ];
    render(<TimelineList items={itemsWithoutMeta} />);
    expect(screen.getByText('AI Prompt Laba')).toBeInTheDocument();
    expect(screen.queryByText('Date:')).not.toBeInTheDocument();
    expect(screen.queryByText('Location:')).not.toBeInTheDocument();
  });

  it('shows only first 3 items in preview mode', () => {
    const manyItems: TimelineListItem[] = Array.from({ length: 5 }, (_, i) => ({
      id: String(i),
      title: `Item ${i}`,
      company: 'Company',
      description: 'Description',
      linkHref: `/test/${i}`,
    }));
    render(<TimelineList items={manyItems} preview />);
    expect(screen.getAllByText(/read more/i)).toHaveLength(3);
    expect(screen.getByText('...')).toBeInTheDocument();
  });
});
