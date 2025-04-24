import { useState, useCallback, useEffect } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
};

export const useInstallPrompt = (): BeforeInstallPromptEvent | null => {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  const onInstallPrompt = useCallback((event: Event) => {
    event.preventDefault();
    setPrompt(event as BeforeInstallPromptEvent);
  }, []);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', onInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', onInstallPrompt);
    }
  }, [onInstallPrompt]);

  return prompt;
};
