import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
import { SpeechRecognition } from "@capacitor-community/speech-recognition";
import { useFixedUpdate } from "@overreact/engine";

export const useSpeechRecognition = (
  onResult: (text: string) => void,
  onEnd: () => void,
) => {
  const active = useRef(false);
  const timeout = useRef(0);
  const text = useRef('');

  const handleResults = useCallback(({ matches }: { matches: string[] }) => {
    timeout.current = 0;
    text.current = matches[0];
    onResult(matches[0]);
  }, [onResult]);

  SpeechRecognition.available();
  SpeechRecognition.addListener('partialResults', handleResults);

  const start = useCallback(() => {
    active.current = true;
    timeout.current = 0;
    text.current = '';
    
    SpeechRecognition.start({
      language: "en-GB",
      maxResults: 2,
      prompt: "Say something",
      partialResults: true,
    });
  }, []);

  const stop = useCallback(() => {
    active.current = false;
    SpeechRecognition.stop();
  }, []);

  useFixedUpdate(10, (delta) => {
    if (active.current) {
      timeout.current += delta;
      
      if ((timeout.current > 2000 && text.current !== '') || timeout.current > 5000) {
        stop();
        onEnd();
      }
    }
  });

  useLayoutEffect(() => {
    SpeechRecognition.requestPermissions();
  }, []);

  return useMemo(() => ({ start, stop }), [start, stop]);
};
