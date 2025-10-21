"use client";
import { useState, useEffect, useRef } from "react";

export const useTypingAnimation = (
  roles,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000
) => {
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const textRef = useRef("");
  const intervalRef = useRef(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        textRef.current = currentRole.substring(0, textRef.current.length + 1);
        setTypedText(textRef.current);

        if (textRef.current === currentRole) {
          // Pause, then start deleting
          clearInterval(intervalRef.current);
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting backward
        textRef.current = currentRole.substring(0, textRef.current.length - 1);
        setTypedText(textRef.current);

        if (textRef.current === "") {
          clearInterval(intervalRef.current);
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    intervalRef.current = setInterval(handleTyping, speed);

    return () => clearInterval(intervalRef.current);
  }, [isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return typedText;
};
