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
});
