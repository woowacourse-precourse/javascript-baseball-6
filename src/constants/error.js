import { RESTART_COMMAND } from './system.js';

const ERROR_MESSAGE_GENERATOR = Object.freeze({
  OUT_OF_RANGE: (min, max) => `${min} 이상 ${max} 이하의 값을 입력해주세요!`,
});

export const ERROR_MESSAGE = Object.freeze({
  COMMON: Object.freeze({
    NOT_NUMBER: '숫자를 입력해주세요!',
    NOT_INTEGER: '정수를 입력해주세요!',
    NOT_ARRAY: '배열을 입력해주세요!',
  }),

  TARGET_BALL: Object.freeze({
    OUT_OF_RANGE: ERROR_MESSAGE_GENERATOR.OUT_OF_RANGE(1, 9),
  }),

  TARGET_BALLS: Object.freeze({
    NOT_VALID_QUANTITY: '3개의 숫자를 가진 배열을 입력해주세요!',
    IS_DUPLICATED: '중복되지 않는 숫자들로 입력해주세요!',
  }),

  ANSWER_BALLS: Object.freeze({
    INVALID_CONTAINS_ARGS: 'contains의 인자에 TargetBall을 입력해주세요!',
    INVALID_MATCH_BALL_ARG: 'match의 첫번째 인자에 TargetBall을 입력해주세요!',
    INVALID_MATCH_INDEX_ARG: 'match의 두번째 인자에 올바른 index값을 입력해주세요!',
  }),

  RESTART_COMMAND: Object.freeze({
    INVALID_RESTART_COMMAND: `${RESTART_COMMAND.CONFIRM} 혹은 ${RESTART_COMMAND.DENY}를 입력해주세요!`,
  }),
});
