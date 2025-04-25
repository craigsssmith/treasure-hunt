import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { setupSafeAreas } from './utils.ts';
import { App } from './App.tsx';
import './index.css';

setupSafeAreas();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
