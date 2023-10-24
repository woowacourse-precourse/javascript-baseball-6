export const SYSTEM = Object.freeze({
  GAME_NUMBER_RANGE_START: 1,
  GAME_NUMBER_RANGE_END: 9,
  GAME_NUMBER_COUNT: 3,
});

export const HINT = Object.freeze({
  nothing: '낫싱',
  message(ball, strike) {
    return `${ball}볼 ${strike}스트라이크`;
  },
  clear: /0볼|0스트라이크/g,
});

export const GAME_NUMBER = Object.freeze({
  without_number: 0,
  length: 3,
});

export const GAME_COMMAND = Object.freeze({
  restart: 1,
  end: 2,
});
