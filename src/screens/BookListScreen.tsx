import { Divider, Button, Screen } from "../components"
import { getQuotes } from "../services";

type BookListScreenProps = {
  pos: number;
  show: boolean;
  onBack: () => void;
};

export const BookListScreen: React.FC<BookListScreenProps> = ({ pos, show, onBack }) => {
  const quotes = getQuotes();
  
  return (
    <Screen pos={pos} show={show}>
      <Divider />
      <div className="book-list">
        {quotes.map((quote, index) => (
          <Book key={quote} index={index + 1} quote={quote} />  
        ))}
        {new Array(7 - quotes.length).fill(true).map((_, index) => (
          <Book index={index + quotes.length + 1} quote="? ? ?" />  
        ))}
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
