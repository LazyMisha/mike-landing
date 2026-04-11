import { personalInfo } from "@/lib/data";

export function PolaroidFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-64 rotate-3">
      {/* White frame like polaroid */}
      <div className="bg-white p-3 pb-12 shadow-lg">
        {/* Photo area */}
        <div className="relative w-full aspect-square overflow-hidden bg-muted">
          {children}
        </div>
      </div>
    </div>
  );
}
