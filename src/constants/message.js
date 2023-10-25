export const MESSAGE = Object.freeze({
  GAME_START: "숫자 야구 게임을 시작합니다.",
  RESTART_OR_QUIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  APPLICATION_TERMINATED: "숫자 야구 게임을 종료합니다. 감사합니다.",
  GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",

  GUESS_NUMBER: "숫자를 입력해주세요 : ",

  JUDGE_NOTHING: "낫싱",
  JUDGE_BALL: "볼",
  JUDGE_STRIKE: "스트라이크",

  ERROR_RESTART_OR_QUIT_INPUT_WRONG:
    "[ERROR] 잘못된 형식의 입력입니다. 1 또는 2를 입력해야합니다.",
  ERROR_GUESS_NUMBER_INPUT_WRONG:
    "[ERROR] 잘못된 형식의 입력입니다. 1부터 9까지 서로 다른 수 세 자리를 입력해야합니다. (예: 123)",
});
