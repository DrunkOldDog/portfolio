import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Based in: https://dev.to/harshhhdev/create-a-satisfying-wavy-text-animation-with-framer-motion-3hb5
export default function MotionText({
  children,
  delay = 0,
  duration = 0.05,
  as = "h1",
  ...props
}) {
  if (typeof children !== "string") return;

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const letters = children.split("");
  return (
    <Text
      as={motion[as]}
      initial="hidden"
      animate="visible"
      variants={container}
      style={{ display: "flex", overflow: "hidden" }}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={`${letter}-${index}`} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Text>
  );
}
