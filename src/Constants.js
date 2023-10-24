const ANSWER_LENGTH = 3;
const ERROR_MESSAGE = "[ERROR] 입력이 올바르지 않습니다. 게임을 종료합니다.";

const BALL_COUNT = {
  BALL: "볼",
  STRIKE: "스트라이크",
  NOTHING: "낫싱",
};

const PLAY_GAME = {
  RESTART: "1",
  END: "2",
  ENDMESSAGE: "게임을 종료합니다.",
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요: ",
  CHECK: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  ANSWER: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

export { ANSWER_LENGTH, ERROR_MESSAGE, BALL_COUNT, PLAY_GAME };
