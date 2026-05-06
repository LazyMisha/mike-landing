type BodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function Body({ children, className = "" }: BodyProps) {
  return (
    <p className={`text-base leading-relaxed ${className}`}>
      {children}
    </p>
  );
}