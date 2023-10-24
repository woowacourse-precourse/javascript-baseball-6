const GAME_MESSAGE = Object.freeze({
  START : '숫자 야구 게임을 시작합니다.',
  INPUT_BASEBALLNUMBER : '숫자를 입력해주세요 : ',
  BALL : (ballCount) => `${ballCount}볼`,
  STRIKE : (strikeCount) => `${strikeCount}스트라이크`,
  NOTHING : '낫싱' ,
  GAMEOVER : '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n'
})

const ERROR_MESSAGE = Object.freeze({
  LENGTH : '[ERROR] 숫자의 길이는 3이여야 합니다.',
  NUMBER : '[ERROR] 숫자를 입력하셔야 합니다.',
  DUPLICATE : '[ERROR] 숫자가 중복되면 안됩니다.',
  RANGE : '[ERROR] 숫자는 1~9까지 입력해야 합니다.',
  ONEORTWO : '[ERROR] 1,2만 입력하셔야 합니다.'
})

export { GAME_MESSAGE, ERROR_MESSAGE };