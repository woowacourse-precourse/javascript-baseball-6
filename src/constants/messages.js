export const GAME_START_MESSAGE = "숫자 야구 게임을 시작합니다.";

export const INPUT_PROMPT = "숫자를 입력해주세요 :";
export const NUMBER_COUNT_ERROR = "[ERROR] 세 자리 숫자를 입력해야 합니다.";
export const DUPLICATE_DIGIT_ERROR =
  "[ERROR] 서로 다른 숫자를 입력해야 합니다.";
export const CORRECT_ANSWER_MESSAGE =
  "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료";
export const NOTHING_MESSAGE = "낫싱";
export const BALL_STRIKE_MESSAGE = (balls, strikes) =>
  `${balls}볼 ${strikes}스트라이크`;

export const GAME_RESTART_PROMPT =
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.";
export const INVALID_INPUT_ERROR = "[ERROR] 잘못된 입력입니다.";
