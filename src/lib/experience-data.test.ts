import { describe, it, expect } from 'vitest';
import { experiences } from '../lib/experience-data';

describe('Experience Data', () => {
  it('should have at least one experience entry', () => {
    expect(experiences.length).toBeGreaterThan(0);
  });

  it('should have all required fields for each experience', () => {
    experiences.forEach((exp) => {
      expect(exp.id).toBeDefined();
      expect(exp.title).toBeDefined();
      expect(exp.company).toBeDefined();
      expect(exp.dateRange).toBeDefined();
      expect(exp.description).toBeDefined();
      expect(exp.fullDescription).toBeDefined();
      expect(exp.technologies).toBeDefined();
      expect(exp.achievements).toBeDefined();
      expect(exp.timeline).toBeDefined();
      expect(exp.linkHref).toBeDefined();
    });
  });

  it('should have unique IDs for all experiences', () => {
    const ids = experiences.map(exp => exp.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it('should have descriptions that are not empty', () => {
    experiences.forEach(exp => {
      expect(exp.description.trim().length).toBeGreaterThan(0);
      expect(exp.fullDescription.trim().length).toBeGreaterThan(0);
    });
  });

  it('should have at least one technology for each experience', () => {
    experiences.forEach(exp => {
      expect(exp.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should have at least one achievement for each experience', () => {
    experiences.forEach(exp => {
      expect(exp.achievements.length).toBeGreaterThan(0);
    });
  });

  it('should have timeline with milestones for each experience', () => {
    experiences.forEach(exp => {
      expect(exp.timeline.start).toBeDefined();
      expect(exp.timeline.end).toBeDefined();
      expect(exp.timeline.milestones.length).toBeGreaterThan(0);
    });
  });

  it('should have valid linkHref pointing to experience detail page', () => {
    experiences.forEach(exp => {
      expect(exp.linkHref).toMatch(/^\/experience\/[\w-]+$/);
    });
  });

  it('should have timeline milestones with date and event', () => {
    experiences.forEach(exp => {
      exp.timeline.milestones.forEach(milestone => {
        expect(milestone.date).toBeDefined();
        expect(milestone.event).toBeDefined();
      });
    });
  });
});
