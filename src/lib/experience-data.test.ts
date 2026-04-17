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
    });
  });
});
