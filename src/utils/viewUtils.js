import { GAME_CONSTANTS, GAME_MESSAGES, GAME_RESULTS } from "./constants";

export function getResultString([ball, strike]) {
  if (!ball && !strike) {
    return GAME_RESULTS.NO_MATCH;
  }
  const text = [GAME_RESULTS.BALL, GAME_RESULTS.STRIKE];
  const parsedResults = [ball, strike].map((item, idx) => {
    if (!item) return;
    return item.toString() + text[idx];
  });
  const resultString = parsedResults.join(" ");
  if (strike === GAME_CONSTANTS.STRIKE_OUT_COUNT) {
    return `${resultString}\n${GAME_MESSAGES.FINISH}`.trim();
  }
  return resultString;
}
