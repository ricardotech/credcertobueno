"use client";

import React, { useEffect, useState } from "react";

interface TextTypeProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
  cursorClassName?: string;
  onComplete?: () => void;
}

export default function TextType({
  text,
  as: Component = "span",
  className = "",
  speed = 50,
  delay = 0,
  cursor = true,
  cursorClassName = "",
  onComplete,
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else if (!isComplete) {
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [currentIndex, text, speed, delay, isComplete, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    if (!cursor) return;

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [cursor]);

  const cursorStyle = cursor
    ? {
        opacity: showCursor ? 1 : 0,
        transition: "opacity 0.1s",
      }
    : {};

  return (
    <Component className={className}>
      {displayText}
      {cursor && (
        <span
          className={`inline-block ${cursorClassName}`}
          style={cursorStyle}
        >
          |
        </span>
      )}
    </Component>
  );
}
