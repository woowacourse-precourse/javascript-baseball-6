const IN_GAME_SETTING = {
  answerLength: 3,
  answerMinNumber: 1,
  answerMaxNumber: 9,
};

const IN_GAME_MESSAGE = {
  startGame: "숫자 야구 게임을 시작합니다.",
  getUserAnswer: "숫자를 입력해주세요: ",
  getUserCommandToRestart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  userInputError: "[ERROR] 올바르지 않은 형식의 입력입니다.",
  rightAnswer: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  exitGame: "게임을 종료합니다.",
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

export { IN_GAME_SETTING, IN_GAME_MESSAGE, IN_GAME_RESULT_ITEM, AFTER_GAME_USER_COMMAND };
