import { PolaroidFrame } from "./PolaroidFrame";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] gap-8 px-4">
      {/* Left side - Vertical text (reading bottom to top) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight whitespace-nowrap" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Hey, I am {personalInfo.name}
        </h1>
      </div>

      {/* Mobile view - horizontal */}
      <div className="md:hidden">
        <h1 className="text-5xl font-bold tracking-tight">
          Hey, I am {personalInfo.name}
        </h1>
      </div>

      {/* Right side - Photo */}
      <div className="md:w-1/2 flex flex-col items-center">
        <PolaroidFrame>
          {personalInfo.photo ? (
            <img
              src={personalInfo.photo}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              [Photo coming soon]
            </div>
          )}
        </PolaroidFrame>
        <p className="mt-4 text-muted-foreground text-sm">
          {personalInfo.tagline}
        </p>
      </div>
    </section>
  );
}
