import { twMerge } from 'tailwind-merge';

type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

export function Heading({
  children,
  as: Tag = 'h1',
  className = '',
}: HeadingProps) {
  const sizes: Record<string, string> = {
    h1: 'text-xl leading-tight sm:text-2xl font-bold',
    h2: 'text-lg leading-tight sm:text-xl font-bold',
    h3: 'text-base leading-tight sm:text-lg font-bold',
    h4: 'text-sm leading-tight sm:text-base font-bold',
  };

  return <Tag className={twMerge(className, sizes[Tag])}>{children}</Tag>;
}
