const Message = Object.freeze({
  GAME_START: "숫자 야구 게임을 시작합니다.",
  RESTART_GAME: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  GUESS_NUMBER: "숫자를 입력해주세요 : ",
  GAME_OVER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
});

const StaticNumber = Object.freeze({
  RESTART_NUMBER: "1",
  END_NUMBER: "2",
  ANSWER_NUMBER_LENGTH: 3,
});

export { Message, StaticNumber };
