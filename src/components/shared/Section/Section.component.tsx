import * as motion from "motion/react-client";

import type { HTMLMotionProps } from "motion/dist/react";

export default function Section({
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
