import { Divider, Button, Screen } from "../components"

type EnterQuoteScreenProps = {
  pos: number;
  show: boolean;
  onSubmit: () => void;
};

export const EnterQuoteScreen: React.FC<EnterQuoteScreenProps> = ({ pos, show, onSubmit }) => {
  return (
    <Screen pos={pos} show={show}>
      <h2>Enter quote</h2>
      <Divider />
      <div>
        <textarea className="tall" />
      </div>
      <div className="actions">
        <Button onPress={onSubmit}>Submit</Button>
      </div>
      <div className="grow" />
    </Screen>
  );
};
