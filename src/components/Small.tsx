type SmallProps = {
  children: React.ReactNode;
  className?: string;
};

export function Small({ children, className = "" }: SmallProps) {
  return (
    <p className={`text-xs leading-tight ${className}`}>
      {children}
    </p>
  );
}