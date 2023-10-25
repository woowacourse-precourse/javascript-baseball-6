const MESSAGE = Object.freeze({
  EMPTY_INPUT: '사용자 입력이 없습니다.',
  INVALID_TYPE: '숫자가 아닙니다.',
  INVALID_DIGITS: '숫자는 3자리여야 합니다.',
  OUT_OF_RANGE: '숫자는 1~9 사이여야 합니다.',
  DUPLICATE_NUMBERS: '중복되는 숫자가 있습니다.',
});

const NAME = Object.freeze({
  INPUT_VIEW: 'InputView',
  BASEBALL_NUMBER: 'BaseballNumber',
  BASEBALL_GAME: 'BaseballGame',
});

export const ERROR = Object.freeze({
  MESSAGE,
  NAME,
});
