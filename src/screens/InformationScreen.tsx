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
      <div className="grow" />
      <div className="actions">
        <Button onPress={onNext}>Next</Button>
      </div>
    </Screen>
  );
};
