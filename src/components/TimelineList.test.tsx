import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TimelineList from './timeline/TimelineList';
import type { TimelineListItem } from './timeline/TimelineList';

describe('TimelineList', () => {
  const mockItems: TimelineListItem[] = [
    {
      id: '1',
      title: 'Microsoft Graph API adoption prototype',
      company: '',
      description:
        'Evaluated whether Microsoft Graph API could support a planned product direction.',
      linkHref: '/case-studies/1',
    },
    {
      id: '2',
      title: 'AI-powered prototype delivery for IBC2023',
      company: '',
      description:
        'Created UI prototypes and integrated them with AI-powered services.',
      linkHref: '/case-studies/2',
    },
  ];

  it('renders all timeline items', () => {
    render(<TimelineList items={mockItems} />);

    expect(
      screen.getByText(/Microsoft Graph API adoption prototype/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText('AI-powered prototype delivery for IBC2023'),
    ).toBeInTheDocument();
  });

  it('renders metadata for each item', () => {
    render(<TimelineList items={mockItems} />);

    expect(screen.queryByText('Date:')).not.toBeInTheDocument();
    expect(screen.queryByText('Location:')).not.toBeInTheDocument();
  });

  it('renders more... links for all items', () => {
    render(<TimelineList items={mockItems} />);

    const moreLinks = screen.getAllByText(/more\.\.\./);
    expect(moreLinks).toHaveLength(2);
  });

  it('renders items without optional metadata', () => {
    const itemsWithoutMeta: TimelineListItem[] = [
      {
        id: '3',
        title: 'Frontend quality foundations',
        company: '',
        description: 'Built testing foundations for reusable React components.',
        linkHref: '/case-studies/3',
      },
    ];
    render(<TimelineList items={itemsWithoutMeta} />);
    expect(
      screen.getByText('Frontend quality foundations'),
    ).toBeInTheDocument();
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
    expect(screen.getAllByText(/more\.\.\./)).toHaveLength(3);
    expect(screen.getByText('...')).toBeInTheDocument();
  });
});
