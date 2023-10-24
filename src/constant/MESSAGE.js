const MESSAGE = {
  START_GAME: "숫자 야구 게임을 시작합니다.",
  ENTER_NUMBER: "숫자를 입력해주세요 : ",
  FINISH_GAME: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  NO_STRIKE_BALL: "낫싱",
  ONLY_BALL: (ballCount) => {
    return `${ballCount}볼`;
  },
  ONLY_STRIKE: (strikeCount) => {
    return `${strikeCount}스트라이크`;
  },
  STRIKE_AND_BALL: ({ ballCount, strikeCount }) => {
    return `${ballCount}볼 ${strikeCount}스트라이크`;
  },
  ASK_GAME_RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
};

const INPUT = {
  FINISH_APP: "2",
  RESTART_GAME: "1",
};

Object.freeze(MESSAGE);
Object.freeze(INPUT);

export { MESSAGE, INPUT };
