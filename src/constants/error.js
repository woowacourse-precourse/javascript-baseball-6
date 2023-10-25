const MESSAGE = Object.freeze({
  EMPTY_INPUT: '사용자 입력이 없습니다.',
  NOT_A_NUMBER: '숫자가 아닙니다.',
  INVALID_DIGITS: '숫자는 3자리여야 합니다.',
  OUT_OF_RANGE: '숫자는 1~9 사이여야 합니다.',
  DUPLICATE_NUMBERS: '중복되는 숫자가 있습니다.',
  INVALID_RESTART: '1 또는 2만 입력 가능합니다.',
  INVALID_BASEBALL_NUMBER_TYPE:
    '잘못된 type입니다. (Number, String, Array만 가능합니다)',
});

const NAME = Object.freeze({
  INPUT_VIEW: 'InputViewError',
  BASEBALL_NUMBER: 'BaseballNumberError',
});

export const ERROR = Object.freeze({
  MESSAGE,
  NAME,
});
