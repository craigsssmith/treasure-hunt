import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0);
  const installPrompt = useRef<Event | null>(null);

  const onInstall = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await (installPrompt.current as any).prompt();
    alert(`Install prompt was: ${result.outcome}`);
  };

  const onInstallPrompt = useCallback((event: Event) => {
    event.preventDefault();
    installPrompt.current = event;
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
      </div>
    </>
  )
};
