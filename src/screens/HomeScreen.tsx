import { useState } from "react";
import { Divider, Screen, IconButton } from "../components";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";
import { getQuotes } from "../services";

import iconBook from '../assets/icon-book.svg';
import iconMicrophone from '../assets/icon-microphone.svg';
import iconPencil from '../assets/icon-pencil.svg';

type HomeScreenProps = {
  pos: number;
  show: boolean;
  onShowBookList: () => void;
  onEnterQuote: () => void;
  onSubmitQuote: (quote: string) => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ pos, show, onShowBookList, onEnterQuote, onSubmitQuote }) => {
  const quotes = getQuotes();
  const [listening, setListening] = useState(false);
  const [quote, setQuote] = useState('');

  const handleSpeechResult = (event: SpeechRecognitionEvent) => {
    const result = event.results[0];
    const text = result[0].transcript;

    if (text.length >= quote.length) {
      setQuote(text);
    }

    if (result.isFinal) {
      onSubmitQuote(text);
    }
  };

  const handleSpeechEnd = () => {
    setTimeout(() => {
      setListening(false);
    }, 1000);
  };

  const recognition = useSpeechRecognition(handleSpeechResult, handleSpeechEnd);

  const handleListenPress = () => {
    if (listening) {
      setListening(false);
      recognition.stop();
    } else {
      setQuote('');
      setListening(true);
      recognition.start();
    }
  };

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
        <IconButton big onPress={handleListenPress}>
          <img src={iconMicrophone} className="icon-microphone" />
        </IconButton>
        <IconButton disabled={listening} onPress={onEnterQuote}>
          <img src={iconPencil} className="icon-pencil" />
        </IconButton>
        <SpeechBubble show={listening} text={quote} />
      </div>
    </Screen>
  );
};

type SpeechBubbleProps = {
  show?: boolean;
  text: string;
};

export const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text, show = false }) => {
  return (
    <div className={`speech-bubble ${show ? 'active' : ''} ${text === '' ? 'placeholder' : ''}`}>
      {text || 'Say something'}
    </div>
  );
};