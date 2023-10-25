// Constants

export const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자를 입력해주세요.',
  NOT_THREE_DIGITS: '[ERROR] 3자리 숫자를 입력해주세요.',
  DUPLICATE_DIGITS: '[ERROR] 중복되지 않는 숫자를 입력해주세요.',
  NOT_IN_RANGE: '[ERROR] 1~9 사이의 숫자를 입력해주세요.',
  NOT_VALID_OPTION: '[ERROR] 잘못된 입력입니다.',
});

export const GAME = Object.freeze({
  STRIKE_MESSAGE: '3스트라이크',
  INPUT_PROMPT: '숫자를 입력해주세요 : ',
  GAME_START_MESSAGE: '숫자 야구 게임을 시작합니다.',
  GAME_END_MESSAGE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  ERROR_MESSAGES: {},
  RESTART_OR_EXIT_MESSAGE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  RESTART_OPTION: '1',
  EXIT_OPTION: '2',
});
