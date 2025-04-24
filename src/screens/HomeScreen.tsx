import { useState } from "react";
import { Divider, Screen, IconButton } from "../components";
import { getQuotes } from "../services";

import iconBook from '../assets/icon-book.svg';
import iconMicrophone from '../assets/icon-microphone.svg';
import iconPencil from '../assets/icon-pencil.svg';

type HomeScreenProps = {
  pos: number;
  show: boolean;
  onShowBookList: () => void;
  onEnterQuote: () => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ pos, show, onShowBookList, onEnterQuote }) => {
  const quotes = getQuotes();
  const [listening, setListening] = useState(false);

  return (
    <Screen pos={pos} show={show}>
      <h1 className="big">{quotes.length}/7</h1>
      <h1>Books<br />found</h1>
      <Divider />
      <div className="grow" />
      <div className="actions">
        <IconButton disabled={listening} onPress={onShowBookList}>
          <img src={iconBook} className="icon-book" />
        </IconButton>
        <IconButton big onPress={() => setListening(!listening)}>
          <img src={iconMicrophone} className="icon-microphone" />
        </IconButton>
        <IconButton disabled={listening} onPress={onEnterQuote}>
          <img src={iconPencil} className="icon-pencil" />
        </IconButton>
        <SpeechBubble show={listening} />
      </div>
    </Screen>
  );
};

type SpeechBubbleProps = {
  show?: boolean;
};

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({ show = false }) => {
  return (
    <div className={`speech-bubble ${show ? 'active' : ''}`}>
      Testing!
    </div>
  );
};