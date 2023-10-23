const SETTING = {
  SIZE: 3,
  RESTART_NUMBER: 1,
  EXIT_NUMBER: 2,
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
  NOT_NUMBER: '[ERROR] 숫자가 잘못된 형식입니다.',
  NOT_UNIQUE: '[ERROR] 중복된 숫자가 있습니다.',
  NOT_SIZE: `[ERROR] 숫자 ${SETTING.SIZE}자리를 입력하세요.`,
  NOT_RETRY_NUMBER: `[ERROR] ${SETTING.RESTART_NUMBER} 또는 ${SETTING.EXIT_NUMBER}를 입력하세요.`,
}