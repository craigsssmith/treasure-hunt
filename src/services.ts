import { stringSimilarity } from "./utils";

const QUOTES = [
  'She pushed the door slowly open and stepped into the garden.',
  'Music drifted softly through the dark room.',
  'He looked out over the wide world, imagining far-off places.',
  'The hall was filled with portraits and statues, watching silently.',
  'Barrels of rum lined the wall, like treasure waiting to be found.',
  'She sat under a tree, wondering what might happen next.',
  'He stood by the stairs, unable to speak.',
];

export const checkQuote = (input: string): boolean => {
  let bestSimilarity = 0;
  let bestQuote = '';

  for (const quote of QUOTES) {
    const similarity = stringSimilarity(quote, input);

    if (similarity > bestSimilarity) {
      bestSimilarity = similarity;
      bestQuote = quote;
    }
  }

  console.log(bestSimilarity, bestQuote);

  if (bestSimilarity >= 0.9) {
    addQuote(bestQuote);
    return true;
  }

  return false;
};

export const addQuote = (quote: string): void => {
  const quotes = getQuotes();
  localStorage.setItem('quotes', JSON.stringify([...quotes, quote]));
};

export const getQuotes = (): string[] => {
  return JSON.parse(localStorage.getItem('quotes') || '[]');
};

export const setTeamName = (name: string): void => {
  localStorage.setItem('teamName', JSON.stringify(name));
};

export const getTeamName = (): string | null => {
  return JSON.parse(localStorage.getItem('teamName') || 'null');
};
