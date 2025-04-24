import { useState } from 'react';
import { BookListScreen, EnterQuoteScreen, HomeScreen, InformationScreen, TeamNameScreen, WelcomeScreen } from './screens';
import { ScreenName } from './types';
import './App.css';

export const App = () => {
  const [screen, setScreen] = useState<ScreenName>('welcome');
  
  return (
    <div className="view" data-screen={screen}>
      <div className="background">
      </div>
      <div className="duo1">
      </div>
      <div className="duo2">
      </div>
      <div className="screens">
        <WelcomeScreen
          show={screen === 'welcome'}
          onStart={() => setScreen('information')}
          pos={0}
        />
        <InformationScreen
          show={screen === 'information'}
          onNext={() => setScreen('team-name')}
          pos={1}
        />
        <TeamNameScreen
          show={screen === 'team-name'}
          onNext={() => setScreen('home')}
          pos={2}
        />
        <HomeScreen
          show={screen === 'home'}
          onEnterQuote={() => setScreen('enter-quote')}
          onShowBookList={() => setScreen('book-list')}
          pos={3}
        />
        <EnterQuoteScreen
          show={screen === 'enter-quote'}
          onSubmit={() => setScreen('home')}
          pos={4}
        />
        <BookListScreen
          pos={2}
          show={screen === 'book-list'}
          onBack={() => setScreen('home')}
        />
      </div>
    </div>
  )
};
