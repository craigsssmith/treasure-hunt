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
        <Book index={1} quote="Barrels of rum lined the wall, like treasure waiting to be found." />
        <Book index={2} quote="Barrels of rum lined the wall, like treasure waiting to be found." />
        <Book index={3} quote="Barrels of rum lined the wall, like treasure waiting to be found." />
        <Book index={4} quote="Barrels of rum lined the wall, like treasure waiting to be found." />
        <Book index={5} quote="Barrels of rum lined the wall, like treasure waiting to be found." />
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
