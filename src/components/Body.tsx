type BodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function Body({ children, className = "" }: BodyProps) {
  return (
    <p className={`text-sm leading-relaxed sm:text-base ${className}`}>
      {children}
    </p>
  );
}