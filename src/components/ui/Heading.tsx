type HeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
};

export function Heading({ children, as: Tag = "h1", className = "" }: HeadingProps) {
  const sizes: Record<string, string> = {
    h1: "text-3xl leading-tight sm:text-4xl md:text-3xl lg:text-4xl font-bold",
    h2: "text-2xl leading-tight sm:text-3xl md:text-2xl lg:text-3xl font-bold",
    h3: "text-xl leading-tight sm:text-2xl font-bold",
    h4: "text-lg leading-tight sm:text-xl font-bold",
  };

  return <Tag className={`${sizes[Tag]} ${className}`}>{children}</Tag>;
}