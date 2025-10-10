import { socialMedia } from "@/app/_constants";
import Link from "next/link";

export default function Intro() {
  return (
    <header id="intro" className="min-h-screen flex items-center">
      <div className="grid lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-7">
          <div className="space-y-2">
            <div className="space-y-4">
              <h1 className="text-7xl lg:text-5xl font-medium tracking-tight text-black dark:text-white leading-none">
                <span className="text-gray-500 dark:text-gray-400">
                  Hi, I'm
                </span>{" "}
                Juani
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                <span className="text-white">Frontend Engineer</span>,{" "}
                <span className="text-white">UX Designer</span>, and{" "}
                <span className="text-white">world explorer</span>. Passionate
                about crafting accessible, scalable, and meaningful digital
                experiences.
              </p>
            </div>

            <div className="flex items-center gap-2 text-lg text-gray-500 dark:text-gray-500">
              <span>La Paz, Bolivia</span>
              <span>•</span>
              <span>Remote</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="space-y-2">
            <div className="space-y-0">
              <p className="text-xl text-gray-900 dark:text-white font-medium">
                Senior Frontend Engineer
              </p>
              <Link href="https://omedym.com" target="_blank">
                <p className="text-lg text-gray-500 dark:text-gray-500 font-light hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                  Omedym
                </p>
              </Link>
              <p className="text-md text-gray-500 dark:text-gray-500 font-light">
                2023 — Present
              </p>
            </div>

            <div className="flex flex-wrap gap-1 text-lg text-gray-600 dark:text-gray-400 font-light">
              <span>React</span>
              <span>•</span>
              <span>Next.js</span>
            </div>

            <div className="flex gap-3 mt-4">
              {socialMedia.map((social) => (
                <Link key={social.name} href={social.url} target="_blank">
                  <social.icon className="cursor-pointer w-5 h-5 fill-current hover:fill-gray-400 transition-colors duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
