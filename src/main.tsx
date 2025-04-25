import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Engine } from '@overreact/engine';
import { setupSafeAreas } from './utils.ts';
import { App } from './App.tsx';
import './index.css';

setupSafeAreas();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Engine>
      <App />
    </Engine>
  </StrictMode>,
);
