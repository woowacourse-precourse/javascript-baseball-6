const GAME_MESSAGE = Object.freeze({
  START : "숫자 야구 게임을 시작합니다.",
  INPUT_BASEBALLNUMBER : "숫자를 입력해주세요 : ",
  BALL : (ballCount) => `${ballCount}볼`,
  STRIKE : (strikeCount) => `${strikeCount}스트라이크`,
  NOTHING : '낫싱' 
})

const ERROR_MESSAGE = Object.freeze({
  LENGTH : "숫자의 길이는 3이여야 합니다.",
  NUMBER : "숫자를 입력하셔야 합니다.",
  DUPLICATE : "숫자가 중복되면 안됩니다.",
})

export { GAME_MESSAGE, ERROR_MESSAGE };