const GUIDE_MESSAGES = Object.freeze({
  start: '숫자 야구 게임을 시작합니다.',
  input: '숫자를 입력해주세요 : ',
  playerWin: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restartGame: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const ERROR_MESSAGES = Object.freeze({
  invalidCountNumber: '[ERROR] 서로 다른 3자리의 수를 입력해주세요.',
  invalidRestartNumber: '[ERROR] 1 또는 2를 입력해주세요.',
});

const PATTERN = Object.freeze({
  threeDigitRegex: new RegExp(/^([1-9])(?!.*\1)([1-9])(?!.*\1|\2)([1-9])$/),
});

const BALL_COUNTS = Object.freeze({
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
});

const RESTART_GAME_NUMBERS = Object.freeze({
  restart: '1', // 게임을 다시 시작하기 위한 입력값
  end: '2', // 게임을 종료하기 위한 입력값
});

const SETTINGS = Object.freeze({
  maxRange: 9, // 1부터 9까지의 숫자 범위의 상한값
  minRange: 1, // 1부터 9까지의 숫자 범위의 하한값
  numberOfRandom: 3, // 3개의 임의 숫자를 생성
  winningNumber: 3, // 승리에 필요한 스트라이크 수
});

export {
  GUIDE_MESSAGES,
  ERROR_MESSAGES,
  PATTERN,
  BALL_COUNTS,
  RESTART_GAME_NUMBERS,
  SETTINGS,
};
