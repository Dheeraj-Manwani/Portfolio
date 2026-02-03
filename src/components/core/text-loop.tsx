"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextLoopProps {
  children: ReactNode[];
  className?: string;
  interval?: number;
  transition?: {
    type?: string;
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
  variants?: {
    initial?: Record<string, any>;
    animate?: Record<string, any>;
    exit?: Record<string, any>;
  };
  onIndexChange?: (index: number) => void;
}

export function TextLoop({
  children,
  className,
  interval = 2.5,
  transition = {
    type: "spring",
    stiffness: 150,
    damping: 19,
    mass: 1.2,
  },
  variants,
  onIndexChange,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (children.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % children.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [children.length, interval, onIndexChange]);

  const defaultVariants = {
    initial: {
      y: -20,
      rotateX: -90,
      opacity: 0,
      filter: "blur(4px)",
    },
    animate: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: {
      y: 20,
      rotateX: 90,
      opacity: 0,
      filter: "blur(4px)",
    },
  };

  const finalVariants = variants || defaultVariants;

  return (
    <div className={cn("relative inline-block overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={finalVariants.initial}
          animate={finalVariants.animate}
          exit={finalVariants.exit}
          transition={transition}
          className="inline-block"
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
