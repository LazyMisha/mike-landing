type PolaroidFrameProps = {
  children: React.ReactNode;
  caption?: string;
};

export function PolaroidFrame({ children, caption }: PolaroidFrameProps) {
  const captionParts = caption?.split(' · ');

  return (
    <div className="h-full md:w-full">
      {/*
        Colors are intentionally fixed (no dark mode variants).
        A real Polaroid frame stays beige regardless of ambient light,
        so the off-white border and warm caption color are preserved
        across both themes for authenticity.
      */}
      {/* White frame like polaroid */}
      <div className="relative h-full bg-[#f7f1e2] p-3 pb-12 shadow-[0_12px_24px_rgba(37,27,16,0.35)]">
        {/* Photo area */}
        <div className="bg-muted flex h-full justify-center overflow-hidden">
          {children}
        </div>
        {captionParts ? (
          <div className="absolute inset-x-3 bottom-0 flex h-12 flex-col items-center justify-center gap-0.5 text-center text-[10px] tracking-[0.12em] text-[#4a4135] sm:text-xs md:text-sm">
            <p className="whitespace-nowrap">
              {captionParts.slice(0, 2).join(' · ')}
            </p>
            {captionParts.length > 2 ? (
              <p className="whitespace-nowrap">
                {captionParts.slice(2).join(' · ')}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
