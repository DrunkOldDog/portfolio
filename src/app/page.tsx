'use client';

import { useState, useEffect } from "react";

import "./global.css";

export default function Home(): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = (): void => {
    // Resume download functionality
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="flex flex-col justify-center h-screen gap-4">
          <div>
            <div className="flex gap-1 mb-[-0.25rem] lg:mb-[-0.5rem]">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Hello there, I&apos;m
              </h1>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#979527]">
                Juani
              </h1>
            </div>

            <div className="flex gap-2 flex-wrap mb-1 lg:mb-0">
              <h1 className="text-2xl lg:text-4xl font-bold text-[#979527] -mb-1">
                Frontend Engineer
              </h1>

              <h1 className="text-2xl lg:text-4xl font-bold">
                UX Designer
              </h1>
            </div>

            <div className="flex gap-1 flex-wrap mb-1">
              <h3 className="text-xl lg:text-3xl font-bold">
                based in La Paz,
              </h3>

              <h3 className="text-xl lg:text-3xl font-bold text-[#979527]">
                Bolivia
              </h3>
            </div>
          </div>

          <div
            className={`transition-all duration-1200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
            }`}
          >
            <p className="font-bold text-lg lg:text-2xl">
              Sorry to bother you but this site is under construction{" "}
              <span className="text-[#979527]">(since 1996)</span>
            </p>
            <p className="font-bold text-lg lg:text-2xl mb-6">
              So if you are on a hurry you can download my lovely:
            </p>

            <a
              href="/juani_reyes_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="font-bold cursor-pointer transition-all duration-250 rounded px-6 py-4 text-lg bg-white text-gray-900 border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white"
                onClick={handleButtonClick}
              >
                Resume Here!
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
