export const OUTPUT_MESSAGES = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  GAME_SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_NUMBER: '숫자를 입력해주세요 : ',
});

export const ERROR_MESSAGE = Object.freeze({
  ERROR: '[ERROR]',
  STRING: '숫자만 입력 가능합니다.',
  ZERO: '0 은 포함될 수 없습니다. 1~9 사이의 숫자만 입력해 주세요',
  DUPLICATION: '서로 다른 숫자를 입력해야 합니다.',
  THREE_DIGIT: '3자리 숫자만 가능합니다.',
  GAME_NUMBER_GENERATOR: '생선된 결과 값은 1~9 사이의 서로 다른 3자리 숫자가 아닙니다.',
});
