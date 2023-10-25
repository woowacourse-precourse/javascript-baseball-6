import { GAME_CONSTANTS, GAME_MESSAGES } from './constants.js';

export function getResultString([ball, strike]) {
  if (!ball && !strike) {
    return GAME_RESULTS.noMatch;
  }
  const text = [GAME_RESULTS.ball, GAME_RESULTS.strike];
  const parsedResults = [ball, strike].map((item, idx) => {
    if (!item) return;
    return item.toString() + text[idx];
  });
  const resultString = parsedResults.join(' ');
  if (strike === GAME_CONSTANTS.strikeOutCount) {
    return `${resultString}\n${GAME_MESSAGES.finish}`.trim();
  }
  return resultString.trim();
}

const GAME_RESULTS = {
  ball: '볼',
  strike: '스트라이크',
  noMatch: '낫싱',
};
