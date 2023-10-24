export const BASEBALL_NUMBER = {
  DIGIT: 3,
  MAX: 9,
  MIN: 1,
  THREE_STRIKE: 3,
};

export const GAME_RESULT = {
  STRIKE: (strike) => `${strike}스트라이크`,
  BALL: (ball) => `${ball}볼`,
  NOTHING: "낫싱",
  WIN: (strike) => `${strike}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
};

export const COMMAND = {
  RESTART: "1",
  END: "2",
};
