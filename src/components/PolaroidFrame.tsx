type PolaroidFrameProps = {
  children: React.ReactNode;
  caption?: string;
};

export function PolaroidFrame({ children, caption }: PolaroidFrameProps) {
  return (
    <div className="h-full md:w-full">
      {/* White frame like polaroid */}
      <div className="relative h-full bg-[#f7f1e2] p-3 pb-12 shadow-[0_12px_24px_rgba(37,27,16,0.35)]">
        {/* Photo area */}
        <div className="h-full flex justify-center overflow-hidden bg-muted">
          {children}
        </div>
        {caption ? (
          <p className="absolute inset-x-3 bottom-0 flex h-12 items-center justify-center whitespace-nowrap text-center text-[10px] tracking-[0.12em] text-[#4a4135] sm:text-xs sm:tracking-[0.18em]">
            {caption}
          </p>
        ) : null}
      </div>
    </div>
  );
}
