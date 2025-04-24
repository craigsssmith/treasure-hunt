import { ChangeEvent, useState } from "react";
import { Divider, Button, Screen } from "../components"

type EnterQuoteScreenProps = {
  pos: number;
  show: boolean;
  onSubmit: (quote: string) => void;
};

export const EnterQuoteScreen: React.FC<EnterQuoteScreenProps> = ({ pos, show, onSubmit }) => {
  const [quote, setQuote] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuote(event.target.value);
  }

  const handleSubmit = () => {
    onSubmit(quote);
    setQuote('');
  };

  return (
    <Screen pos={pos} show={show}>
      <h2>Enter quote</h2>
      <Divider />
      <div>
        <textarea className="tall" value={quote} onChange={handleChange} />
      </div>
      <div className="actions">
        <Button onPress={handleSubmit}>Submit</Button>
      </div>
      <div className="grow" />
    </Screen>
  );
};
