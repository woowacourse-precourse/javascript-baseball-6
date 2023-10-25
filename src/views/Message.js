class ErrorMessage {
  #ERROR_PREFIX = "[ERROR]";

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (typeof target[prop] === "string") {
          return `${target.#ERROR_PREFIX} ${target[prop]}`;
        }
        return target[prop];
      },
    });
  }

  INVALID_INPUT = "1 또는 2만 입력할 수 있습니다.";
  RE_PROMPT = "다시 입력해주세요.";
  INVALID_SIZE = "입력되는 숫자는 3자리여야합니다.";
  DUPLICATE_BALLS = "각 공의 숫자는 중복되지 않아야합니다.";
  OUT_OF_RANGE_BALLS = "각 공의 숫자는 1이상 9이하의 정수이어야만합니다.";
}

class PromptMessage {
  static GAME_START_OR_END =
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
  static GAME_START = "숫자 야구 게임을 시작합니다.";
  static GAME_END = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
  static ENTER_NUMBERS = "숫자를 입력해주세요 : ";
  static NOTHING = "낫싱";
  static BALL(count) {
    return `${count}볼`;
  }
  static STRIKE(count) {
    return `${count}스트라이크`;
  }
}

const errorMessage = new ErrorMessage();

export { errorMessage, PromptMessage };
