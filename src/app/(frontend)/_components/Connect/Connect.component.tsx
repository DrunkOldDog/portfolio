import { Section } from "@/components/shared";
import Link from "next/link";

import { contactInfo } from "../../_constants";

export const Connect = () => {
  return (
    <Section id="connect" className="py-20 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-light">
            Let&apos;s Connect
          </h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Always interested in new opportunities, collaborations, and
              conversations about technology and design.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:reyesg.juani@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                <span className="text-base sm:text-lg">
                  reyesg.juani@gmail.com
                </span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
            >
              <div className="space-y-2">
                <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                  {social.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {social.handle}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};
