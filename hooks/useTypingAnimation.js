"use client";
import { useState, useEffect } from 'react';

export const useTypingAnimation = (roles, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentRole = roles[roleIndex];
    
    const typingInterval = setInterval(() => {
      if (currentIndex < currentRole.length) {
        currentText += currentRole[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setTypedText(currentText);
            } else {
              clearInterval(deletingInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, deletingSpeed);
        }, pauseDuration);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [roleIndex, roles, typingSpeed, deletingSpeed, pauseDuration]);

  return typedText;
};