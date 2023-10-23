export const GAME_MESSAGE = Object.freeze({
  START_GAME: '숫자 야구 게임을 시작합니다.',
  END_GAME: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RE_GAME: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  INPUT_MESSAGE: '숫자를 입력해주세요 : ',
  RESTART: '1',
  END: '2',
});

export const ERROR_MESSAGE = Object.freeze({
  INPUT_ONLY_NUMBER: '[ERROR] 오직 숫자만 입력해야 합니다.',
  NUMBER_LENGTH_MUST_THREE: '[ERROR] 숫자의 길이는 3이여야 합니다.',
  DUPLICATE_NUMBER: '[ERROR] 3개의 숫자는 서로 다른 숫자여야 합니다',
  INPUT_INVALID: '1 또는 2 값만 입력해야 합니다.',
});

export const BALL_COUNT = Object.freeze({
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
});
