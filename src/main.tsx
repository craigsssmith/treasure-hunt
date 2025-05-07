import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Device, Engine, ParticleEngine } from '@overreact/engine';
import { setupSafeAreas } from './utils.ts';
import { App } from './App.tsx';
import './index.css';

setupSafeAreas();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Engine>
      <Device>
        <ParticleEngine pool={400}>
          <App />
        </ParticleEngine>
      </Device>
    </Engine>
  </StrictMode>,
);
