export const PROMPT = {
  RESTART: '1',
  END: '2',
};

export const REQUEST = {
  NUMBER: '숫자를 입력해주세요 : ',
  RESTART: `게임을 새로 시작하려면 ${PROMPT.RESTART}, 종료하려면 ${PROMPT.END}를 입력하세요.\n`,
};

export const RESULT = {
  NOTHING: '낫싱',
  BALL: '볼',
  STRIKE: '스트라이크',
};

export const RULES = {
  MAX_LENGTH: 3,
};

export const COMPUTER_RANGE = {
  MIN: 1,
  MAX: 9,
};

export const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다',
  CORRECT: `${RULES.MAX_LENGTH}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
};

const ERROR_PREFIX = '[ERROR]';

export const ERROR = {
  EMPTY: `${ERROR_PREFIX} 값을 입력하세요`,
  INVALID_LENGTH: `${ERROR_PREFIX} ${RULES.MAX_LENGTH}자리 숫자를 입력하세요`,
  INVALID_NUMBER_RANGE: `${ERROR_PREFIX} ${COMPUTER_RANGE.MIN}-${COMPUTER_RANGE.MAX} 범위의 숫자를 입력하세요`,
  DUPLICATED_NUMBER: `${ERROR_PREFIX} 중복되지 않는 숫자를 입력하세요`,
};
