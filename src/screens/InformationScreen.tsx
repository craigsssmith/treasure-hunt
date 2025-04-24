import { Divider, Button, Screen } from "../components"

type InformationScreenProps = {
  pos: number;
  show: boolean;
  onNext: () => void;
};

export const InformationScreen: React.FC<InformationScreenProps> = ({ pos, show, onNext }) => {
  return (
    <Screen pos={pos} show={show}>
      <h2>The hunt is on!</h2>
      <Divider />
      <p>Hidden throughout the house and grounds of Oulton Hall are a series of books, each of which contains a highlighted passage: a clue to help you locate the next book in the chain.</p>
      <p>Once you&apos;ve found a book, speak the passage into the app to track your progress.</p>
      <p>Find all seven books faster than any other team to claim your reward!</p>
      <div className="grow" />
      <div className="actions">
        <Button onPress={onNext}>Next</Button>
      </div>
    </Screen>
  );
};
