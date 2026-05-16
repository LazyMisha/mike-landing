type PageWrapperProps = {
  children: React.ReactNode;
  as?: 'div' | 'main' | 'section';
  className?: string;
};

export function PageWrapper({
  children,
  as: Tag = 'main',
  className = '',
}: PageWrapperProps) {
  return (
    <Tag
      className={`text-foreground mx-auto h-full max-w-[75ch] px-4 md:py-2 ${className}`}
    >
      {children}
    </Tag>
  );
}
