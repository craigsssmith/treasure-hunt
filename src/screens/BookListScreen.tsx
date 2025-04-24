import { Divider, Button, Screen } from "../components"

type BookListScreenProps = {
  pos: number;
  show: boolean;
  onBack: () => void;
};

export const BookListScreen: React.FC<BookListScreenProps> = ({ pos, show, onBack }) => {
  return (
    <Screen pos={pos} show={show}>
      <Divider />
      <div className="grow" />
      <div className="actions">
        <Button onPress={onBack}>Back</Button>
      </div>
    </Screen>
  );
};
