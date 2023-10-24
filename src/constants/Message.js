export const MESSAGE_INFO = Object.freeze({
  gameStart: "숫자 야구 게임을 시작합니다.",
  gameInput: "숫자를 입력해주세요 : ",
  gameEnd: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  gameRestart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

export const MESSAGE_STATE = Object.freeze({
  strike: "스트라이크",
  ball: "볼",
  nothing: "낫싱",
});

const ERROR = "[ERROR]";

export const MESSAGE_ERROR = Object.freeze({
  errorLengthNumber: `${ERROR} 숫자 1~9까지 3자리로 입력해주세요.`,
  errorDuplicate: `${ERROR} 중복되지 않는 숫자를 입력해주세요.`,
  errorRestart: `${ERROR} 1 또는 2를 입력해주세요.`,
});
