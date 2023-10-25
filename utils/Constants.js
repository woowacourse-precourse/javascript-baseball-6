const IN_GAME_SETTING = {
  answerLength: 3,
  answerMinNumber: 1,
  answerMaxNumber: 9,
};

const IN_GAME_MESSAGE = {
  startGame: "숫자 야구 게임을 시작합니다.",
  getUserAnswer: "숫자를 입력해주세요: ",
  getUserCommandToRestart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  rightAnswer: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  exitGame: "게임을 종료합니다.",
};

const IN_GAME_ERROR = {
  invalidFormat: "[ERROR] 입력값은 3자리의 서로 다른 숫자여야 합니다.",
  invalidRange: "[ERROR] 입력하신 각 자리의 숫자는 1에서 9 사이여야 합니다.",
  duplicatedNumber: "[ERROR] 입력하신 각 자리의 숫자는 중복되지 않아야 합니다.",
  invalidCommand: "[ERROR] 게임 재시작/종료 선택은 오직 1 또는 2로만 입력하셔야 합니다.",
};

const IN_GAME_RESULT_ITEM = {
  strike: "스트라이크",
  ball: "볼",
  none: "낫싱",
};

const AFTER_GAME_USER_COMMAND = {
  restart: 1,
  exit: 2,
};

export { IN_GAME_SETTING, IN_GAME_MESSAGE, IN_GAME_ERROR, IN_GAME_RESULT_ITEM, AFTER_GAME_USER_COMMAND };
