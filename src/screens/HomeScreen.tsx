import { Divider, Screen, IconButton } from "../components";
import iconBook from '../assets/icon-book.svg';
import iconMicrophone from '../assets/icon-microphone.svg';
import iconPencil from '../assets/icon-pencil.svg';
import { getQuotes } from "../services";

type HomeScreenProps = {
  pos: number;
  show: boolean;
  onShowBookList: () => void;
  onEnterQuote: () => void;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ pos, show, onShowBookList, onEnterQuote }) => {
  const quotes = getQuotes();

  return (
    <Screen pos={pos} show={show}>
      <h1 className="big">{quotes.length}/7</h1>
      <h1>Books<br />found</h1>
      <Divider />
      <div className="grow" />
      <div className="actions">
        <IconButton onPress={onShowBookList}>
          <img src={iconBook} className="icon-book" />
        </IconButton>
        <IconButton big onPress={() => {}}>
          <img src={iconMicrophone} className="icon-microphone" />
        </IconButton>
        <IconButton onPress={onEnterQuote}>
          <img src={iconPencil} className="icon-pencil" />
        </IconButton>
      </div>
    </Screen>
  );
};
