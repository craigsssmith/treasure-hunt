import { useState } from "react";

export const useSpeechRecognition = () => {
  const [value] = useState(() => {
    const Constructor = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new Constructor();
    recognition.continuous = false;
    recognition.lang = "en-GB";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    return recognition;
  });

  return value;
};
