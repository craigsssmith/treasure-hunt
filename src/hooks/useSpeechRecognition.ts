import { useEffect, useState } from "react";

export const useSpeechRecognition = (
  onResult: (event: SpeechRecognitionEvent) => void,
  onEnd: () => void,
) => {
  const [value] = useState(() => {
    const Constructor = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new Constructor();
    recognition.continuous = false;
    recognition.lang = "en-GB";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    return recognition;
  });

  useEffect(() => {
    value.addEventListener('result', onResult);
    value.addEventListener('end', onEnd);
    return () => {
      value.removeEventListener('result', onResult);
      value.removeEventListener('result', onEnd);
    }
  }, [onEnd, onResult, value]);

  return value;
};
