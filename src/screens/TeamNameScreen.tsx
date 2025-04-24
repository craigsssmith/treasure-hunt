import { useState, ChangeEvent } from "react";
import { Divider, Button, Screen } from "../components"

type TeamNameScreenProps = {
  pos: number;
  show: boolean;
  onSubmit: (name: string) => void;
};

export const TeamNameScreen: React.FC<TeamNameScreenProps> = ({ pos, show, onSubmit }) => {
  const [name, setName] = useState('');
  
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setName(event.target.value);
  }

  const handleSubmit = () => {
    onSubmit(name);
    setName('');
  };

  return (
    <Screen pos={pos} show={show}>
      <h2>Choose your team name</h2>
      <Divider />
      <div>
        <textarea value={name} onChange={handleChange} />
      </div>
      <div className="actions">
        <Button onPress={handleSubmit}>Next</Button>
      </div>
      <div className="grow" />
    </Screen>
  );
};
