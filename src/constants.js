export const COMPUTER_MESSAGE = Object.freeze({
  START: "숫자 야구 게임을 시작합니다.",
  COMPLETED: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
});

export const INPUT_MESSAGE = Object.freeze({
  PLAY_NUMBER: "숫자를 입력해주세요 : ",
  SELECT_REPLAY_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
});

export const ERROR_MESSAGE = Object.freeze({
  NOT_NUMBER: "문자를 입력했습니다.",
  OVER_OR_UNDER_LIMIT: "입력된 숫자의 개수가 초과/미달 입니다.",
  DUPLICATED: "중복된 입력이 있습니다.",
  UNDEFINED: "입력값을 확인할 수 없습니다. 종료하겠습니다.",
});

export const INTERFACE = Object.freeze({
  REPLAY: "1",
  EXIT: "2",
});

export const COUNT = Object.freeze({
  NOTHING: "낫싱",
  BALL: (count) => `${count > 0 ? `${count}볼 ` : ""}`,
  STRIKE: (count) => `${count > 0 ? `${count}스트라이크` : ""}`,
});
