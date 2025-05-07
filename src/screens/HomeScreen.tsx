import { useAudio, useShaker } from "@overreact/engine";
import { forwardRef, useState } from "react";
import { Divider, Screen, IconButton } from "../components";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";
import { useConfetti } from "../particles/useConfetti";
import { checkQuote, getQuotes } from "../services";

import iconBook from '../assets/icon-book.svg';
import iconMicrophone from '../assets/icon-microphone.svg';
import iconPencil from '../assets/icon-pencil.svg';

import soundQuoteValid from '../assets/quote-valid.mp3';
import soundQuoteInvalid from '../assets/quote-invalid.ogg';

type HomeScreenProps = {
  pos: number;
  show: boolean;
  onShowBookList: () => void;
  onEnterQuote: () => void;
  onSubmitQuote: (quote: string) => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ pos, show, onShowBookList, onEnterQuote }) => {
  const confetti = useConfetti();
  const audio = useAudio();
  const shaker = useShaker({ strength: 20 });
  const quotes = getQuotes();
  const [listening, setListening] = useState(false);
  const [quote, setQuote] = useState('');

  const recognition = useSpeechRecognition(setQuote, () => {
    if (checkQuote(quote)) {
      confetti.trigger(shaker.ref.current);
      audio.play(soundQuoteValid);
    } else {
      shaker.shake();
      audio.play(soundQuoteInvalid);
    }

    setTimeout(() => setListening(false), 500);
  });

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
        <SpeechBubble ref={shaker.ref} show={listening} text={quote} />
      </div>
    </Screen>
  );
};

type SpeechBubbleProps = {
  show?: boolean;
  text: string;
};

export const SpeechBubble = forwardRef<HTMLDivElement, SpeechBubbleProps>(({ text, show = false }, ref) => (
  <div ref={ref} className={`speech-bubble ${show ? 'active' : ''} ${text === '' ? 'placeholder' : ''}`}>
    <div className="inner">
      {text || 'Say something'}
    </div>
  </div>
));