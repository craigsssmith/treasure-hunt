import { useCallback, useEffect, useRef, useState } from 'react';
import { useInstallPrompt } from '../hooks/useInstallPrompt';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { stringSimilarity } from '../utils';
import './App.css';

export const App = () => {
  const [count, setCount] = useState(0);
  const prompt = useInstallPrompt();
  const recognition = useSpeechRecognition(() => {}, () => {});
  const ref = useRef<HTMLDivElement>(null);

  const onInstall = async () => {
    prompt?.prompt();
  };

  const onListen = useCallback(() => {
    recognition.start();
  }, [recognition]);

  const onRegcognitionResult = useCallback((event: SpeechRecognitionEvent) => {
    const result = event.results[0];
    const text = result[0].transcript;

    console.log(text);

    if (ref.current) {
      ref.current.textContent = text;
    }

    if (result.isFinal) {
      console.log('match: ', stringSimilarity(text, 'The hall was filled with portraits and statues, watching silently.'));
    }
  }, []);

  useEffect(() => {
    recognition.addEventListener('result', onRegcognitionResult);
    return () => {
      recognition.removeEventListener('result', onRegcognitionResult);
    }
  }, [onRegcognitionResult, recognition]);

  return (
    <div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={onInstall}>
          install
        </button>
        <a href="/treasure-hunt/" target="_blank">
          open
        </a>
        <button onClick={onListen}>
          listen
        </button>
      </div>
      <div className="output" ref={ref} />
    </div>
  )
};
