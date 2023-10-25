export const ERROR_MSG = {
  INVALID_INPUT_LENGTH: "[ERROR] 인풋 숫자는 세자리 수여야 합니다.",
  INVALID_INPUT_TYPE: "[ERROR] 인풋은 숫자여야 합니다.",
  DUPLICATED_INPUT: "[ERROR] 인풋 숫자는 서로 중복될 수 없습니다.",
  OUT_OF_RANGE: "[ERROR] 숫자는 1 ~ 9 범위 내의 숫자로 구성되어야 합니다.",
  INVALID_ENDING_SIGN:
    "[ERROR] 게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

export const INPUT_MSG = {
  GET_INPUT: "숫자를 입력해주세요 : ",
  END_SIGN: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

export const OUTPUT_MSG = {
  COUNT_RESULT: [
    ["낫싱", "1스트라이크", "2스트라이크", "3스트라이크"],
    ["1볼", "1볼 1스트라이크", "1볼 2스트라이크"],
    ["2볼", "2볼 1스트라이크"],
    ["3볼"],
  ],
  STARTING: "숫자 야구 게임을 시작합니다.",
  ENDING: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};
