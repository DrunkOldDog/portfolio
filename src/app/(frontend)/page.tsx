import {
  Intro,
  Work,
  Projects,
  Connect,
  Navigation,
  AnimatedBackground,
} from "./_components";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground relative">
      <AnimatedBackground />
      <Navigation />

      <main>
        <Intro />

        <Work />

        <Projects />

        <Connect />

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="text-xs text-muted-foreground">
              Built with Vercel&apos;s v0.
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
