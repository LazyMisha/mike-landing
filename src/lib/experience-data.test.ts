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
      expect(exp.dateRange).toBeDefined();
      expect(exp.readTime).toBeDefined();
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

  it('should have read time in correct format (X min read)', () => {
    const readTimeRegex = /^\d+ min read$/;
    experiences.forEach(exp => {
      expect(readTimeRegex.test(exp.readTime)).toBe(true);
    });
  });

  it('should include real company names (not placeholders)', () => {
    const titles = experiences.map(exp => exp.title);
    const hasRealCompanies = titles.some(title => 
      title.includes('Avid') || title.includes('GlobalLogic') || title.includes('AB Soft')
    );
    expect(hasRealCompanies).toBe(true);
  });

  it('should NOT contain placeholder company names', () => {
    const titles = experiences.map(exp => exp.title);
    const hasPlaceholders = titles.some(title => 
      title.includes('Monolith Corp') || 
      title.includes('NeuralNexus') || 
      title.includes('CyberDyne')
    );
    expect(hasPlaceholders).toBe(false);
  });
});
