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
      <div className="book-list">
        <Book index={1} quote="She pushed the door slowly open and stepped into the garden." />
        <Book index={2} quote="Music drifted softly through the dark room." />
        <Book index={3} quote="He looked out over the wide world, imagining far-off places." />
        <Book index={4} quote="The hall was filled with portraits and statues, watching silently." />
        <Book index={5} quote="Barrels of rum lined the wall, like treasure waiting to be found." />
        <Book index={6} quote="She sat under a tree, wondering what might happen next." />
        <Book index={7} quote="He stood by the stairs, unable to speak." />
      </div>
      <div className="actions">
        <Button onPress={onBack}>Back</Button>
      </div>
    </Screen>
  );
};

type BookProps = {
  index: number;
  quote: string;
};

const Book: React.FC<BookProps> = ({ index, quote }) => (
  <div className="book">
    <h3>Book {index}:</h3>
    <p className="big">“{quote}”</p>
  </div>
);
