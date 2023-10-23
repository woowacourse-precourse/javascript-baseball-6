const MESSAGE = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  BALL: '볼',
  STRIKE: '스트라이크',
  NOTHING: '낫싱',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  SUGGEST_NEW_GAME: `게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n`,
});

const SETTING = Object.freeze({
  MAX_STRIKE_COUNT: 3,
  // 난수 생성 시, 최솟값과 최댓값
  MIN: 1,
  MAX: 9,
  // 사용자 입력 시, 최대 입력길이
  MAX_INPUT_LENGTH: 3,
  // 게임 종료 시, 사용자 입력값
  RESTART: 1,
  END: 2,
});

const ERROR = Object.freeze({
  HEADER: '[ERROR] ',
  INPUT: '사용자 입력값이 잘못되었습니다. 다시 확인해주세요.',
  RESTART: '재시작 입력값이 잘못되었습니다. 다시 확인해주세요.',
});

export { MESSAGE, SETTING, ERROR };
