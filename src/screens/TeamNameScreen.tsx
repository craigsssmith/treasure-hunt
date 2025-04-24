import { Divider, Button, Screen } from "../components"

type TeamNameScreenProps = {
  pos: number;
  show: boolean;
  onNext: () => void;
};

export const TeamNameScreen: React.FC<TeamNameScreenProps> = ({ pos, show, onNext }) => {
  return (
    <Screen pos={pos} show={show}>
      <h2>Choose your team name</h2>
      <Divider />
      <div>
        <textarea />
      </div>
      <div className="actions">
        <Button onPress={onNext}>Next</Button>
      </div>
      <div className="grow" />
    </Screen>
  );
};
