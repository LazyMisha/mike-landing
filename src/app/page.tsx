import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <header className="flex justify-between items-center">
        <div>Left: Date/Time + Location</div>
        <ThemeToggle />
      </header>
      <main className="mt-16">
        <h1>Test page — theme toggle should work above</h1>
        <p>Switch between dark and light mode using the sun/moon button</p>
      </main>
    </div>
  );
}
