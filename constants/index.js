const constants = Object.freeze({
  MESSAGES: {
    START: '숫자 야구 게임을 시작합니다.',
    END: '게임을 종료합니다.',
    INPUT: '숫자를 입력해주세요 : ',
    PLAYER_WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
    PLAY_AGAIN: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
    ERROR: {
      INVALID_COUNT_NUMBER: '[ERROR] 서로 다른 3자리의 수를 입력해주세요.',
      INVALID_REPLAY_NUMBER: '[ERROR] 1 또는 2를 입력해주세요.',
    },
    BALL_COUNTS: {
      BALL: '볼',
      STRIKE: '스트라이크',
      NOTHING: '낫싱',
    },
  },
  THREE_DIGIT_PATTERN: new RegExp(/^([1-9])(?!.*\1)([1-9])(?!.*\1|\2)([1-9])$/),
});

export default constants;
