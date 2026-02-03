"use client";
import { TextLoop } from "@/components/core/text-loop";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RotatingTagProps {
  items: Array<{
    text: string;
    icon?: React.ReactNode;
  }>;
  className?: string;
  color?: "primary" | "secondary" | "accent";
}

export function RotatingTag({
  items,
  className,
  color = "primary",
}: RotatingTagProps) {
  const [direction, setDirection] = useState(-1);

  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/20 text-secondary-700",
    accent: "bg-accent/40 text-accent-700",
  };

  return (
    <span
      className={cn(
        "px-2.5 py-1 text-xs rounded-md font-medium inline-flex items-center",
        colorClasses[color],
        className
      )}
    >
      <TextLoop
        className="text-xs"
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 19,
          mass: 1.2,
        }}
        interval={2.5}
        onIndexChange={(index) => {
          setDirection(index === 0 ? -1 : 1);
        }}
        variants={{
          initial: {
            y: -direction * 20,
            rotateX: -direction * 90,
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
            y: -direction * 20,
            rotateX: -direction * 90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        {items.map((item, index) => (
          <span key={index} className="inline-flex items-center gap-1">
            {item.icon}
            {item.text}
          </span>
        ))}
      </TextLoop>
    </span>
  );
}
