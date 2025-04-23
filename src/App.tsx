import { useState } from 'react';
import divider from './assets/divider.svg';
import './App.css';

export const App = () => {
  const [screen, setScreen] = useState(0);

  const handleNext = () => {
    setScreen((screen + 1) % 4);
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

        {/* Welcome screen */}
        <div className="screen">
          <h1>Oulton Hall Treasure Hunt</h1>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onMouseDown={handleNext}>Start</button>
          </div>
        </div>

        {/* Instructions */}
        <div className="screen">
          <h2>The hunt is on!</h2>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onMouseDown={handleNext}>Next</button>
          </div>
        </div>

        {/* Enter team name */}
        <div className="screen">
          <h2>Choose your team name</h2>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onMouseDown={handleNext}>Next</button>
          </div>
        </div>

        {/* Home screen */}
        <div className="screen">
          <h1>0/7</h1>
          <h1>Books<br />found</h1>
          <img className="divider" src={divider} />
          <div className="grow" />
          <div className="actions">
            <button onMouseDown={handleNext}>Next</button>
          </div>
        </div>

      </div>
    </div>
  )
};
