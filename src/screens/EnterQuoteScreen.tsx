import { ChangeEvent, useState } from "react";
import { Divider, Button, Screen } from "../components"
import { useConfetti } from "../particles/useConfetti";
import { checkQuote } from "../services";
import { useShaker } from "@overreact/engine";

type EnterQuoteScreenProps = {
  pos: number;
  show: boolean;
  onBack: () => void;
};

export const EnterQuoteScreen: React.FC<EnterQuoteScreenProps> = ({ pos, show, onBack }) => {
  const confetti = useConfetti();
  const shaker = useShaker({ strength: 20 });

  const [quote, setQuote] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuote(event.target.value);
  }

  const handleSubmit = () => {
    if (checkQuote(quote)) {
      confetti.trigger(shaker.ref.current);
      setTimeout(onBack, 500);
      setTimeout(() => setQuote(''), 2000);
    } else {
      shaker.shake();
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
