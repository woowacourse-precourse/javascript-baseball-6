export function getResultMessage(ball, strike) {
  const textArray = [];
  if (ball > 0) {
    textArray.push(`${ball}볼`);
  }
  if (strike > 0) {
    textArray.push(`${strike}스트라이크`);
  }

  return textArray.length > 0 ? textArray.join(" ") : "낫싱";
}

export const START_MESSAGE = {
  initial: "숫자 야구 게임을 시작합니다.",
  input: "숫자를 입력해주세요 : ",
};

export const ERROR_MESSAGE = {
  numberError: "[ERROR] 숫자가 아닌 입력이 있습니다.",
  rangeError: "[ERROR] 숫자가 잘못된 형식입니다.",
  dupError: "[ERROR] 중복되는 숫자가 있습니다.",
  oneTwoError: "[ERROR] 1과 2를 제외한 다른 입력이 있습니다.",
};

export const END_MESSAGE = {
  perfect: "3스트라이크",
  ending: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  restart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

export const RESTART_CHECK = {
  continue: "1",
  stop: "2",
};
