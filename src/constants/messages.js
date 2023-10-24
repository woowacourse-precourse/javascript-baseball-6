const MESSAGE = {
  GAME: {
    START: '숫자 야구 게임을 시작합니다.',
    INPUT: '숫자를 입력해주세요 : ',
    RESULT: {
      BALL: '볼',
      STRIKE: '스트라이크',
      NOTHING: '낫싱',
      SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    },
    END: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n',
  },
  ERROR: {
    LENGTH_ERROR: '[ERROR] : 길이 오류',
    INCLUDE_ZERO_ERROR: '[ERROR] : 0 포함 오류',
    DUPLICATE_ERROR: '[ERROR] : 중복 오류',
    NUMBER_ERROR: '[ERROR] : 숫자 아닌 오류',
  },
};

export default MESSAGE;
