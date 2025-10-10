import { socialMedia } from "@/app/_constants";
import { Section } from "@/components/shared";
import Link from "next/link";

export default function Intro() {
  return (
    <header id="intro" className="min-h-screen flex items-center">
      <Section>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="space-y-2">
              <div className="space-y-4">
                <h1 className="text-5xl font-medium tracking-tight text-foreground leading-none">
                  <span className="text-muted-foreground">Hi, I&apos;m</span>{" "}
                  Juani
                </h1>

                <p className="text-lg max-w-xl lg:text-xl text-muted-foreground leading-relaxed font-light">
                  <span className="text-foreground">Frontend Engineer</span>,{" "}
                  <span className="text-foreground">UX Designer</span>, and{" "}
                  <span className="text-foreground">world explorer</span>.
                  Passionate about crafting accessible, scalable, and meaningful
                  digital experiences.
                </p>
              </div>

              <div className="flex items-center gap-2 text-lg text-muted-foreground">
                <span>La Paz, Bolivia</span>
                <span>•</span>
                <span>Remote</span>
              </div>

              <div className="flex gap-3 mt-4 lg:hidden">
                {socialMedia.map((social) => (
                  <Link key={social.name} href={social.url} target="_blank">
                    <social.icon className="cursor-pointer w-5 h-5 fill-current hover:fill-muted-foreground transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="space-y-2">
              <div className="space-y-0">
                <p className="text-xl text-foreground font-medium">
                  Senior Frontend Engineer
                </p>
                <Link href="https://omedym.com" target="_blank">
                  <p className="text-lg text-muted-foreground font-light hover:text-foreground transition-colors duration-300">
                    Omedym
                  </p>
                </Link>
                <p className="text-md text-muted-foreground font-light">
                  2023 — Present
                </p>
              </div>

              <div className="flex flex-wrap gap-1 text-lg text-muted-foreground font-light">
                <span>React</span>
                <span>•</span>
                <span>Next.js</span>
              </div>

              <div className="flex gap-3 mt-4">
                {socialMedia.map((social) => (
                  <Link key={social.name} href={social.url} target="_blank">
                    <social.icon className="cursor-pointer w-5 h-5 fill-current hover:fill-muted-foreground transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </header>
  );
}
