import { useAudio, useShaker } from "@overreact/engine";
import { ChangeEvent, useState } from "react";
import { Divider, Button, Screen } from "../components"
import { useConfetti } from "../particles/useConfetti";
import { checkQuote } from "../services";

import soundQuoteValid from '../assets/quote-valid.mp3';
import soundQuoteInvalid from '../assets/quote-invalid.ogg';

type EnterQuoteScreenProps = {
  pos: number;
  show: boolean;
  onBack: () => void;
};

export const EnterQuoteScreen: React.FC<EnterQuoteScreenProps> = ({ pos, show, onBack }) => {
  const confetti = useConfetti();
  const audio = useAudio();
  const shaker = useShaker({ strength: 20 });

  const [quote, setQuote] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuote(event.target.value);
  }

  const handleSubmit = () => {
    if (checkQuote(quote)) {
      confetti.trigger(shaker.ref.current);
      audio.play(soundQuoteValid);
      onBack();
      setTimeout(() => setQuote(''), 2000);
    } else {
      shaker.shake();
      audio.play(soundQuoteInvalid);
    }
  };

  return (
    <Screen pos={pos} show={show}>
      <h2>Enter quote</h2>
      <Divider />
      <div>
        <textarea className="tall" value={quote} onChange={handleChange} />
      </div>
      <div className="actions" ref={shaker.ref}>
        <Button onPress={handleSubmit}>Submit</Button>
      </div>
      <div className="grow" />
      <div className="actions">
        <Button onPress={onBack}>Back</Button>
      </div>
    </Screen>
  );
};
