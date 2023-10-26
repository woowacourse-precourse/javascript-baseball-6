import { GAME_CONSTANTS, GAME_MESSAGES } from './constants.js';

export function getResultMessage(matchResult) {
  const [ball, strike] = matchResult;
  if (!ball && !strike) {
    return GAME_RESULTS.noMatch;
  }

  const resultString = getResultString(ball, strike);

  if (strike === GAME_CONSTANTS.strikeOutCount) {
    return `${resultString}\n${GAME_MESSAGES.finish}`;
  }
  return resultString;
}

function getResultString(ball, strike) {
  const text = [GAME_RESULTS.ball, GAME_RESULTS.strike];
  const parsedResults = [ball, strike].map((item, idx) => {
    if (!item) return;
    return item.toString() + text[idx];
  });

  return parsedResults.join(' ').trim();
}

const GAME_RESULTS = {
  ball: '볼',
  strike: '스트라이크',
  noMatch: '낫싱',
};
