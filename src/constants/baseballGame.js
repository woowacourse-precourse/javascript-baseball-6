export const BASEBALL_NUMBER = Object.freeze({
  DIGIT: 3,
  MAX: 9,
  MIN: 1,
});

export const WINNING_CONDITION = Object.freeze({
  THREE_STRIKE: 3,
});

export const GAME_RESULT = Object.freeze({
  STRIKE: (strike) => `${strike}스트라이크`,
  BALL: (ball) => `${ball}볼`,
  NOTHING: '낫싱',
  WIN: (strike) =>
    `${strike}스트라이크\n${strike}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
});
