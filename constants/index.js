const constants = Object.freeze({
  MESSAGES: {
    START: '숫자 야구 게임을 시작합니다.',
    INPUT: '숫자를 입력해주세요 : ',
    ERROR: {
      INVALID_COUNT_NUMBER: '서로 다른 3자리의 수를 입력해주세요.',
    },
  },
  THREE_DIGIT_PATTERN: new RegExp(/^[1-9]{3}$/g),
});

export default constants;
