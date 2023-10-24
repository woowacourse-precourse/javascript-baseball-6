const MESSAGE = {
  GAME_START: '숫자 야구 게임을 시작합니다.',
  NUMBER_INPUT: '숫자를 입력해주세요 : ',
  GAME_CLEAR: '3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_RESET: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  NOTHING: '낫싱',
}
const BASEBALL = {
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
  MAX_LENGTH: 3,
  RESET_NUMBER: '1',
  END_NUMBER: '2',
  BALL: '볼',
  STRIKE: '스트라이크',
}

const ERROR = {
  NUMBER_TYPE: '[ERROR] 1부터 9까지의 숫자만 입력하세요.',
  NUMBER_LENGTH: '[ERROR] 3자리의 숫자만 입력하세요.',
  NUMBER_OVERLAP: '[ERROR] 중복이 없는 3자리의 숫자만 입력하세요.',
  RESET_NUMBER: '[ERROR] 1 또는 2 중 하나의 숫자를 입력해야합니다.',
};

const REGEXP = {
  IS_NOT_NUMBER: /[^1-9]/,
}

module.exports = {
  MESSAGE, 
  BASEBALL,
  ERROR,
  REGEXP,
};