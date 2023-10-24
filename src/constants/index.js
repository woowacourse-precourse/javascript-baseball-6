export const MESSAGES = Object.freeze({
  game: {
    start: "숫자 야구 게임을 시작합니다.",
    done: "숫자 야구 게임을 종료합니다.",
    success: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    restartOrDone: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    playerInput: "숫자를 입력해주세요 : ",
  },
  result: {
    strike: "스트라이크",
    ball: "볼",
    nothing: "낫싱",
    success: "3스트라이크",
  },
  errors: {
    invalidNumber: "[ERROR] 서로 다른 3자리의 숫자를 입력해 주세요. (1~9)",
    invalidChoice: "[ERROR] 1 또는 2 중 하나를 입력해 주세요.",
  },
});
