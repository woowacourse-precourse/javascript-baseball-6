const MESSAGE = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  INPUT_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  SUCCESS: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  END: '게임 종료',
}

const NUMBER = {
  MAX_LENGTH: 3,
}

const FLAG = {
  NEW_GAME: '1',
  END_GAME: '2',
}

const ERROR = {
  INPUT_NUMBER_IN_STRING: '[ERROR] 숫자가 아닌 값이 있습니다.',
  INPUT_NUMBER_DUPLICATION: '[ERROR] 중복된 숫자가 있습니다.',
  INPUT_NUMBER_OVER: '[ERROR] 세자리 숫자가 아닙니다.',
  INPUT_FLAG: '[ERROR] 정해진 값이 아닙니다.',
}

export { MESSAGE, NUMBER, FLAG, ERROR };