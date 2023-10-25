import { GAME_MESSAGE } from "../constants";

export function getStrikesAndBallsCount(userNumber, computerNumber) {
  const userNumberArray = Array.from(userNumber, Number);

  const strikes = userNumberArray.reduce((count, number, i) => {
    return number === computerNumber[i] ? count + 1 : count;
  }, 0);

  const balls = userNumberArray.filter((number, i) => {
    return number !== computerNumber[i] && computerNumber.includes(number);
  }).length;

  return { strikes, balls };
}

export function showMessage({ strikes, balls }) {
  if (strikes === 3) {
    return GAME_MESSAGE.end;
  }

  if (strikes === 0 && balls === 0) {
    return GAME_MESSAGE.nothing;
  }

  return GAME_MESSAGE.ballStrike(balls, strikes);
}
