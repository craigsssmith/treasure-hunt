import { useAudio, useShaker } from "@overreact/engine";
import { useState, ChangeEvent } from "react";
import { Divider, Button, Screen } from "../components"

import soundInvalid from '../assets/quote-invalid.ogg';

type TeamNameScreenProps = {
  pos: number;
  show: boolean;
  onSubmit: (name: string) => void;
};

export const TeamNameScreen: React.FC<TeamNameScreenProps> = ({ pos, show, onSubmit }) => {
  const audio = useAudio();
  const shaker = useShaker({ strength: 20 });
  const [name, setName] = useState('');
  
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setName(event.target.value);
  }

  const handleSubmit = () => {
    if (name.trim() !== '') {
      onSubmit(name);
      setName('');
    } else {
      shaker.shake();
      audio.play(soundInvalid);
    }
  };

  return (
    <Screen pos={pos} show={show}>
      <h2>Choose your team name</h2>
      <Divider />
      <div>
        <textarea value={name} onChange={handleChange} />
      </div>
      <div className="actions" ref={shaker.ref}>
        <Button onPress={handleSubmit}>Next</Button>
      </div>
      <div className="grow" />
    </Screen>
  );
};
