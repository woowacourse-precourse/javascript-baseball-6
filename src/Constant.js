export const CONSTANT = {
  MAX_NUM_LEN: 3,
  RESTART_GAME: 1,
  FINISH_GAME: 2,
};

export const MESSAGE = {
  START_GAME: '숫자 야구 게임을 시작합니다.',
  ENTER_NUMBERS: '숫자를 입력해주세요 : ',
  CORRECT_ANSWER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  WANT_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

export const ERROR = {
  NOT_A_NUMBER: '[ERROR] 입력값이 숫자가 아닙니다.',
  NOT_THREE_NUMBERS: '[ERROR] 입력값이 세자리 숫자가 아닙니다.',
  HAS_DUPLICATE: '[ERROR] 입력값이 중복된 숫자를 가지고 있습니다.',
  HAS_ZERO: '[ERROR] 입력값이 0을 가지고 있습니다. 1-9사이의 숫자만 입력 가능합니다.',
  NOT_ONE_OR_TWO: '[ERROR] 1이나 2를 입력해야 합니다.',
};

export const RESULT = {
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  THREE_STRIKE: '3스트라이크',
};
