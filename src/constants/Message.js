const GAME_MESSAGE = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  NUMBER_INPUT: '숫자를 입력해주세요 : ',
  CORRECT_ANSWER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
})

const ERROR_MESSAGE = Object.freeze({
  INVALID_LENGTH: '[ERROR] 입력한 숫자의 길이가 3이 아닙니다.',
  INVALID_NUMBER: '[ERROR] 1부터 9까지의 숫자만 입력해야 합니다.',
  DUPLICATE_NUMBER: '[ERROR] 중복된 숫자를 입력하셨습니다.'
})

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE
};

