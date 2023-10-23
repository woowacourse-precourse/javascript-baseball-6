const ANSWER_LENGTH = 3;
const ERROR_MESSAGE = "[ERROR] 입력이 올바르지 않습니다. 게임을 종료합니다.";

const BALL_COUNT = {
  ball: "볼",
  strike: "스트라이크",
  nothing: "낫싱",
};

const PLAY_GAME = {
  restart: "1",
  end: "2",
  endMessage: "게임을 종료합니다.",
  start: "숫자 야구 게임을 시작합니다.",
  input: "숫자를 입력해주세요 : ",
  check: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  answer: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
};

export { ANSWER_LENGTH, ERROR_MESSAGE, BALL_COUNT, PLAY_GAME };
