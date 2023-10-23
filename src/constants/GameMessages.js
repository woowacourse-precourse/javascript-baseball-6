const GAME_MESSAGES = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ENTER_NUMBER: "숫자를 입력해주세요 : ",
  CONFIRM_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  PREDICT_RESULT: {
    NOTHING: "낫싱",
    STRIKE: (strike) => `${strike}스트라이크`,
    BALL: (ball) => `${ball}볼 `,
  },
});

export default GAME_MESSAGES;
