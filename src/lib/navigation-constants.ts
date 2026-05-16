export const navigationLabels = {
  backToCaseStudies: '[back to case studies]',
  backToHome: '[back to home]',
} as const;

export const ariaLabels = {
  readMoreAbout: (title: string, company: string) =>
    `Read more about ${title} at ${company}`,
} as const;
