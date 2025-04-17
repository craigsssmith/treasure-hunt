import { useCallback, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
};

export const App = () => {
  const [count, setCount] = useState(0);
  const [prompt, setPrompt] = useState<Event | null>(null);

  const onInstall = async () => {
    if (prompt) {
      (prompt as BeforeInstallPromptEvent).prompt();
    }
  };

  const onInstallPrompt = useCallback((event: Event) => {
    event.preventDefault();
    setPrompt(event);
  }, []);

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', onInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', onInstallPrompt);
    }
  }, [onInstallPrompt]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={onInstall}>
          install
        </button>
        <a href="/away-days/" target="_blank">
          open
        </a>
      </div>
    </>
  )
};
