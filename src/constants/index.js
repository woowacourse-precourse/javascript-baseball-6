const GAME_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  SUCCESS: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  END: "게임 종료",
};

const BASEBALL_MESSAGE = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};

const END_OPTION = {
  NEW_GAME: 1,
  EXIT: 2,
};

const ERROR_MESSAGE = {
  IS_INVALID: "[ERROR] 유효하지 않은 값입니다.",
  IS_NUMBER: "[ERROR] 숫자만 입력해주세요.",
  IS_DUPLICATION: "[ERROR] 중복되는 숫자가 존재합니다.",
  IS_DIGIT: "[ERROR] 자리수가 맞지 않습니다. 3자리 숫자를 입력해주세요.",
  IS_START: "[ERROR] 게임에 문제가 있습니다. 코드를 확인해주세요."
};

module.exports = { GAME_MESSAGE, BASEBALL_MESSAGE, END_OPTION, ERROR_MESSAGE };
