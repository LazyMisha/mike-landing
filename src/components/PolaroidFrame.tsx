import { Fragment } from 'react';

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
        <div className="h-full flex justify-center overflow-hidden bg-muted">
          {children}
        </div>
        {captionParts ? (
          <p className="absolute inset-x-3 bottom-0 flex h-12 items-center justify-center gap-2 whitespace-nowrap text-center tracking-[0.12em] text-[#4a4135] text-[7px] sm:text-[9px] md:text-xs">
            {captionParts.map((captionPart, index) => (
              <Fragment key={captionPart}>
                {index > 0 ? (
                  <span aria-hidden="true" className="inline-flex items-center justify-center tracking-normal">
                    ·
                  </span>
                ) : null}
                <span>{captionPart}</span>
              </Fragment>
            ))}
          </p>
        ) : null}
      </div>
    </div>
  );
}
