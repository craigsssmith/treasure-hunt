import { useState } from 'react';
import divider from './assets/divider.svg';
import './App.css';

export const App = () => {
  const [screen, setScreen] = useState(0);

  const handleNext = () => {
    setScreen(screen + 1);
  };

  const handlePrevious = () => {
    setScreen(screen - 1);
  };
  
  return (
    <div className="view" data-screen={screen}>
      <div className="background">
      </div>
      <div className="duo1">
      </div>
      <div className="duo2">
      </div>
      <div className="screens">

        {/* 0. Welcome screen */}
        <div className="screen">
          <h1>Oulton Hall Treasure Hunt</h1>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onPointerDown={handleNext}>Start</button>
          </div>
        </div>

        {/* 1. Instructions */}
        <div className="screen">
          <h2>The hunt is on!</h2>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onPointerDown={handleNext}>Next</button>
          </div>
        </div>

        {/* 2. Enter team name */}
        <div className="screen">
          <h2>Choose your team name</h2>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onPointerDown={handleNext}>Next</button>
          </div>
        </div>

        {/* 3. Home screen */}
        <div className="screen">
          <h1>0/7</h1>
          <h1>Books<br />found</h1>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onPointerDown={handleNext}>Next</button>
          </div>
        </div>

        {/* 4. Enter quote */}
        <div className="screen">
          <h2>Enter quote</h2>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onPointerDown={handlePrevious}>Next</button>
          </div>
        </div>

      </div>
    </div>
  )
};
