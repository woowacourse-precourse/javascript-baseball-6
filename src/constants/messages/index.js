export const MESSAGES = {
  GAME_START: "숫자 야구 게임을 시작합니다.",
  INPUT_NUMBER: "숫자를 입력해주세요 : ",
  INPUT_ACTION: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  INPUT_ERROR: "[ERROR] 숫자가 잘못된 형식입니다.",
  COMPARE_RESULT: {
    ALL_MATCH: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료",
    NO_MATCH: "낫싱",
    BALL_STRIKE: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
  },
};
