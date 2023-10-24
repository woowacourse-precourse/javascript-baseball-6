export const GAMEMESSAGE = Object.freeze({
  startGame: "숫자 야구 게임을 시작합니다.",
  inputNumberPrompt: "숫자를 입력해주세요 : ",
  gameWon: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  askReplay: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
});

export const ERRORMESSAGE = Object.freeze({
  invalidLength: "[ERROR] 숫자는 3자리여야 합니다.",
  zeroIncluded: "[ERROR] 숫자에 0이 포함되어 있습니다.",
  nonNumber: "[ERROR] 숫자가 아닌 값이 포함되어 있습니다.",
  duplicateNumber: "[ERROR] 숫자가 중복되어 있습니다.",
  spaceIncluded: "[ERROR] 숫자에 공백이 포함되어 있습니다."
});