export const RULES = Object.freeze({
  digitCount: 3,
});

export const GAME_TYPE = Object.freeze({
  restart: '1',
  end: '2'
});

export const GAME_MESSAGE = Object.freeze({
  startGame: "숫자 야구 게임을 시작합니다.",
  inputNumberPrompt: "숫자를 입력해주세요 : ",
  win: `${RULES.digitCount}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  restartPrompt: `게임을 새로 시작하려면 ${GAME_TYPE.restart}, 종료하려면 ${GAME_TYPE.end}를 입력하세요.}`
});

export const ERROR_MESSAGE = Object.freeze({
  invalidInput: `[ERROR] 1 ~ 9사이의 ${RULES.digitCount}자리 숫자가 필요합니다.`,
  duplicateNumber: "[ERROR] 중복된 숫자가 존재합니다."
});
