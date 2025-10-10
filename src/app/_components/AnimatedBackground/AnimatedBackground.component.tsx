"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="animated-bg pointer-events-none">
      {/* Medium floating orbs */}
      <motion.div
        className="floating-orb absolute w-32 h-32 rounded-full bg-gradient-to-r from-gray-300/20 to-gray-500/20"
        style={{
          left: "10%",
          top: "20%",
          y: y,
        }}
      />

      <motion.div
        className="floating-orb absolute w-28 h-28 rounded-full bg-gradient-to-r from-gray-400/20 to-gray-600/20"
        style={{
          right: "15%",
          top: "60%",
          y: y,
        }}
      />

      <motion.div
        className="floating-orb absolute w-24 h-24 rounded-full bg-gradient-to-r from-gray-200/20 to-gray-400/20"
        style={{
          left: "60%",
          top: "10%",
          y: y,
        }}
      />

      {/* Small floating orbs */}
      <motion.div
        className="floating-orb absolute w-16 h-16 rounded-full bg-gradient-to-r from-gray-500/30 to-gray-700/30"
        style={{
          left: "20%",
          top: "70%",
          y: y,
        }}
      />

      <motion.div
        className="floating-orb absolute w-20 h-20 rounded-full bg-gradient-to-r from-gray-300/25 to-gray-600/25"
        style={{
          right: "25%",
          top: "30%",
          y: y,
        }}
      />

      {/* Subtle grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(156,163,175,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(156,163,175,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          y: y,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
