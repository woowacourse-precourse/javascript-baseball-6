const MESSAGES = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  CORRECT_NUMBER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART_OR_DONE: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  END: '숫자 야구 게임을 종료합니다.',

  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',

  ERROR: {
    TYPE_ERROR: '[ERROR] 숫자가 아닌 값이 들어왔습니다',
    OUT_OF_LENGTH: '[ERROR] 숫자의 길이가 3이 아닙니다.',
    OUT_OF_INPUT_NUMBER_RANGE: '[ERROR] 각 자리의 숫자가 1에서 9사이가 아닙니다.',
    DUPLICATION_ERROR: '[ERROR] 서로 같은 수가 존재합니다.',
    OUT_OF_RESTART_NUMBER_RANGE: '[ERROR] 재시작 여부 선택 시, 1 또는 2를 입력해야합니다.',
  },
};

export { MESSAGES };
