import { Divider, Button, Screen } from "../components"

type WelcomeScreenProps = {
  pos: number;
  show: boolean;
  onStart: () => void;
};

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ pos, show, onStart }) => {
  return (
    <Screen pos={pos} show={show}>
      <h1>Oulton Hall Treasure Hunt</h1>
      <Divider />
      <div className="grow" />
      <div className="actions">
        <Button onPress={onStart}>Start</Button>
      </div>
    </Screen>
  );
};
