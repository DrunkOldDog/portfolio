import { Intro, Work, Projects, Connect } from "@/app/_components";

import "./global.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "connect"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="w-2 h-8 rounded-full transition-all duration-500 bg-muted-foreground/30 hover:bg-muted-foreground/60 block"
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="mx-auto px-6 sm:px-8 lg:px-16">
        <Intro />

        <Work />

        <Projects />

        <Connect />

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Juani Reyes.
              </div>
              <div className="text-xs text-muted-foreground">
                Built with a Vercel's v0.
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
