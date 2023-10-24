const GUIDE_MESSAGES = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  PLAYER_WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART_GAME: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
  END: `숫자 야구 게임을 종료합니다.`,
});

const ERROR_MESSAGES = Object.freeze({
  INVALID_COUNT_NUMBER: '[ERROR] 서로 다른 3자리의 수를 입력해주세요.',
  INVALID_REPLAY_NUMBER: '[ERROR] 1 또는 2를 입력해주세요.',
});

const PATTERN = Object.freeze({
  THREE_DIGIT_REGEX: new RegExp(/^([1-9])(?!.*\1)([1-9])(?!.*\1|\2)([1-9])$/),
});

const BALL_COUNTS = Object.freeze({
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
});

const RESTART_GAME_NUMBERS = Object.freeze({
  RESTART: '1', // 게임을 다시 시작하기 위한 입력값
  END: '2', // 게임을 종료하기 위한 입력값
});

const SETTINGS = Object.freeze({
  MAX_RANGE: 9, // 1부터 9까지의 숫자 범위의 상한값
  MIN_RANGE: 1, // 1부터 9까지의 숫자 범위의 하한값
  NUMBER_OF_RANDOM: 3, // 3개의 임의 숫자를 생성
});

export {
  GUIDE_MESSAGES,
  ERROR_MESSAGES,
  PATTERN,
  BALL_COUNTS,
  RESTART_GAME_NUMBERS,
  SETTINGS,
};
