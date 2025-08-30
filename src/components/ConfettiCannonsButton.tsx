"use client";

import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

export function ConfettiCannonsButton({
  onTrigger,
  children,
  className,
  type,
  size,
  disabled,
}: {
  onTrigger: any;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
}) {
  const handleClick = async () => {
    await onTrigger();
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative">
      <Button
        onClick={handleClick}
        className={className}
        type={type}
        size={size}
        disabled={disabled}
      >
        {children}
      </Button>
    </div>
  );
}
