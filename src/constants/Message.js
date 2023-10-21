const GAME_MESSAGE = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  NUMBER_INPUT: '숫자를 입력해주세요 : ',
  CORRECT_ANSWER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'
})

const ERROR_MESSAGE = Object.freeze({
  INVALID_NUMBER: '[ERROR] 숫자가 잘못된 형식입니다.'
})

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE
};
