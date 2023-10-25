export const GAME_MESSAGE = {
  start: "숫자 야구 게임을 시작합니다.",
  input: "숫자를 입력해주세요 :",
  invalidInput: "[ERROR] 세 자리 숫자를 입력하세요.",
  dupulicateInput: "[ERROR] 서로 다른 세 자리 숫자를 입력하세요.",
  end: `
  3스트라이크
  3개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  newGame: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  nothing: "낫싱",
  ball: "볼",
  strike: "스트라이크",
  ballStrike: (balls, strikes) => `${balls}볼 ${strikes}스트라이크`,
};

export const INPUT_REG_EX = /^[1-9]{3}$/;
