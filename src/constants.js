import App from "./App.js";

export const RESULT = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};

export const TEXT = {
  INITIAL: "숫자 야구 게임을 시작합니다.",
  INPUT_GUESS_NUMBER: "숫자를 입력해주세요 : ",
  THREE_STRKE_MESSAGE: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

export const ERROR = {
  DUPLICATE_NUMBER_ERROR:
    "[ERROR] 서로 다른 3자리의 수로 이루어지지 않았습니다.",
  INVALID_OPTION_ERROR: "[ERROR] 1 또는 2가 아닌 잘못된 값을 입력하였습니다.",
};

export const RESTART = {
  YES: "1",
  NO: "2",
};

export const ACTION = {
  [RESTART.YES]: () => {
    new App().play();
  },
  [RESTART.NO]: () => {},
};
