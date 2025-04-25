import { useEffect, useState } from 'react';
import { BookListScreen, EnterQuoteScreen, HomeScreen, InformationScreen, TeamNameScreen, WelcomeScreen } from './screens';
import { checkQuote, getTeamName, setTeamName } from './services';
import { ScreenName } from './types';
import './App.css';

export const App = () => {
  const [screen, setScreen] = useState<ScreenName>('welcome');

  const handleQuoteSubmit = (quote: string) => {
    checkQuote(quote);
    setScreen('home');
  };

  const handleTeamNameSubmit = (name: string) => {
    setTeamName(name);
    setScreen('home');
  };

  // Jump ahead to the home screen if the user refreshes the page after they
  // have fully onboarded into the app.
  useEffect(() => {
    if (screen === 'welcome' && getTeamName() !== null) {
      setTimeout(() => {
        setScreen('home');
      }, 1000);
    }
  }, [screen]);
  
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
          onSubmit={handleTeamNameSubmit}
          pos={2}
        />
        <HomeScreen
          show={screen === 'home'}
          onEnterQuote={() => setScreen('enter-quote')}
          onShowBookList={() => setScreen('book-list')}
          onSubmitQuote={handleQuoteSubmit}
          pos={3}
        />
        <EnterQuoteScreen
          show={screen === 'enter-quote'}
          onSubmit={handleQuoteSubmit}
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
