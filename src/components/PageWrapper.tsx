type PageWrapperProps = {
  children: React.ReactNode;
  as?: "div" | "main" | "section";
  className?: string;
};

export function PageWrapper({
  children,
  as: Tag = "main",
  className = "",
}: PageWrapperProps) {
  return (
    <Tag
      className={`min-h-screen bg-background text-foreground max-w-[75ch] mx-auto px-4 md:py-4 ${className}`}
    >
      {children}
    </Tag>
  );
}