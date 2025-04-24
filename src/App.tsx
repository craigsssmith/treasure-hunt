import { useState } from 'react';
import { Divider, Button, Screen } from './components';
import './App.css';

export const App = () => {
  const [screen, setScreen] = useState(0);
  
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
        <Screen pos={0} show={screen === 0}>
          <h1>Oulton Hall Treasure Hunt</h1>
          <Divider />
          <div className="grow" />
          <div className="actions">
            <Button onPress={() => setScreen(1)}>Start</Button>
          </div>
        </Screen>

        {/* 1. Instructions */}
        <Screen pos={1} show={screen === 1}>
          <h2>The hunt is on!</h2>
          <Divider />
          <div className="grow" />
          <div className="actions">
            <Button onPress={() => setScreen(2)}>Next</Button>
          </div>
        </Screen>

        {/* 2. Enter team name */}
        <Screen pos={2} show={screen === 2}>
          <h2>Choose your team name</h2>
          <Divider />
          <div className="grow" />
          <div className="actions">
            <Button onPress={() => setScreen(3)}>Next</Button>
          </div>
        </Screen>

        {/* 3. Home screen */}
        <Screen pos={3} show={screen === 3}>
          <h1>0/7</h1>
          <h1>Books<br />found</h1>
          <Divider />
          <div className="grow" />
          <div className="actions">
            <Button onPress={() => setScreen(5)}>&lt;</Button>
            <Button onPress={() => {}}>+</Button>
            <Button onPress={() => setScreen(4)}>&gt;</Button>
          </div>
        </Screen>

        {/* 4. Enter quote */}
        <Screen pos={4} show={screen === 4}>
          <h2>Enter quote</h2>
          <Divider />
          <div className="grow" />
          <div className="actions">
            <Button onPress={() => setScreen(3)}>Submit</Button>
          </div>
        </Screen>

        {/* 5. Found books */}
        <Screen pos={2} show={screen === 5}>
          <Divider />
          <div className="grow" />
          <div className="actions">
            <Button onPress={() => setScreen(3)}>Back</Button>
          </div>
        </Screen>

      </div>
    </div>
  )
};
