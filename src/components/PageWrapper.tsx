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
      className={`h-full text-foreground max-w-[75ch] mx-auto px-4 md:py-2 ${className}`}
    >
      {children}
    </Tag>
  );
}