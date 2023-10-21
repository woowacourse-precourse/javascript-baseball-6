const ERROR_MESSAGE_GENERATOR = Object.freeze({
  OUT_OF_RANGE: (min, max) => `${min} 이상 ${max} 이하의 값을 입력해주세요!`,
});

export const ERROR_MESSAGE = Object.freeze({
  COMMON: Object.freeze({
    NOT_NUMBER: '숫자를 입력해주세요!',
    NOT_INTEGER: '정수를 입력해주세요!',
  }),

  TARGET_BALL: Object.freeze({
    OUT_OF_RANGE: ERROR_MESSAGE_GENERATOR.OUT_OF_RANGE(1, 9),
  }),
});
