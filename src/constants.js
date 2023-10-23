const GAME_STATUS = {
  READY: 'READY',
  START: 'START',
  END: 'END',
}

const SETTING = {
  SIZE: 3,
  RESTART_NUMBER: 1,
  EXIT_NUMBER: 2,
  MIN_NUMBER: 1,
  MAX_NUMBER: 9,
}

const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요',
  CORRECT: `${SETTING.SIZE}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  RETRY: `게임을 새로 시작하려면 ${SETTING.RESTART_NUMBER}, 종료하려면 ${SETTING.EXIT_NUMBER}를 입력하세요.`,
}

const SCORE = {
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
}

const ERROR_MESSAGE = {
  NOT_NUMBER: '[ERROR] 숫자가 아닙니다.',
  NOT_SIZE: `[ERROR] 숫자 ${SETTING.SIZE}자리를 입력하세요.`,
  NOT_UNIQUE: '[ERROR] 중복된 숫자가 있습니다.',
  NOT_RANGE: `[ERROR] ${SETTING.MIN_NUMBER}부터 ${SETTING.MAX_NUMBER}까지의 숫자만 입력하세요.`,
  NOT_RETRY_NUMBER: `[ERROR] ${SETTING.RESTART_NUMBER} 또는 ${SETTING.EXIT_NUMBER}를 입력하세요.`,
}

export { GAME_STATUS, SETTING, MESSAGE, SCORE, ERROR_MESSAGE };