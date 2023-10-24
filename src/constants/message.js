const INPUT_MESSAGE = Object.freeze({
  NUMBER: "숫자를 입력해주세요 : ",
  RETRY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

const OUTPUT_MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  FINISH: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
});

const ERROR_MESSAGE = Object.freeze({
  NUMBER: "[ERROR] 1~9의 숫자만 입력 가능합니다.",
  LENGTH: "[ERROR] 길이가 3이 아닙니다.",
  DUPLICATE: "[ERROR] 중복된 값이 있습니다.",
  RETRY: "[ERROR] 입력값으로 1과 2만 올 수 있습니다.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
