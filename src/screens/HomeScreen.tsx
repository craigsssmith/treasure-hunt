import { Divider, Button, Screen } from "../components"

type HomeScreenProps = {
  pos: number;
  show: boolean;
  onShowBookList: () => void;
  onEnterQuote: () => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ pos, show, onShowBookList, onEnterQuote }) => {
  return (
    <Screen pos={pos} show={show}>
      <h1 className="big">0/7</h1>
      <h1>Books<br />found</h1>
      <Divider />
      <div className="grow" />
      <div className="actions">
        <Button onPress={onShowBookList}>&lt;</Button>
        <Button onPress={() => {}}>+</Button>
        <Button onPress={onEnterQuote}>&gt;</Button>
      </div>
    </Screen>
  );
};
