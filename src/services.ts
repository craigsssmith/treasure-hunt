import { stringSimilarity } from "./utils";

const QUOTES = [
  "She pushed the door slowly open and stepped into the garden.",
  "Music drifted softly through the dark room.",
  "He looked out over the wide world, imagining far-off places.",
  "The hall was filled with portraits and statues, watching silently.",
  "Barrels of rum lined the wall, like treasure waiting to be found.",
  "She sat under a tree, wondering what might happen next.",
  "He stood by the stairs, unable to speak.",

  // Test quotes:
  "It is never too late to be what you might have been",
  "There is nothing either good or bad, but thinking makes it so.",
  "Not all those who wander are lost.",
  "In spite of everything, I still believe people are really good at heart.",
  "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.",
  "But you know, happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
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

  if (bestSimilarity >= 0.9 && !hasQuote(bestQuote)) {
    addQuote(bestQuote);
    return true;
  }

  return false;
};

export const hasQuote = (quote: string): boolean => {
  return getQuotes().includes(quote);
}

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
