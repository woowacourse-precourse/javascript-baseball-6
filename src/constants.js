const CONDITION = {
  FULL_STRIKE: 3,
  NO_STRIKE: 0,
  FULL_BALL: 3,
  NO_BALL: 0,
  FULL_ANSWER_COUNT: 3,
};

const OUTPUT_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  INPUT: "숫자를 입력해주세요 : ",
  COUNT: (strikeCount, ballCount) => {
    if (strikeCount && ballCount) {
      return `${ballCount}볼 ${strikeCount}스트라이크`;
    } else if (strikeCount && !ballCount) {
      return `${strikeCount}스트라이크`;
    } else if (!strikeCount && ballCount) {
      return `${ballCount}볼`;
    } else {
      return "낫싱";
    }
  },
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  EXIT: "게임을 종료합니다.",
};

export { CONDITION, OUTPUT_MESSAGE };
