const NUMBER_SIZE = 3;
const VALID_INPUT_FORM = /^\d{3}$/;
const START_MESSAGE = "숫자 야구 게임을 시작합니다.";
const INPUT_MESSAGE = "숫자를 입력해주세요 : ";
const END_MESSAGE = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
const DECISION_MESSAGE =
  "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
const FORM_ERROR =
  "[ERROR] 유효하지 않은 입력입니다. 세 자릿수를 입력해주세요.";
const DUPLICATION_ERROR = "[ERROR] 중복되는 숫자는 입력 불가능합니다.";
const DECISION_ERROR = "[ERROR] 1과 2 이외의 숫자는 입력할 수 없습니다.";
const ZERO_INPUT_ERROR = "[ERROR] 세 자리 숫자에 0을 포함할 수 없습니다.";
const ZERO = "0";
const RESTART = "1";
const EXIT = "2";

export {
  NUMBER_SIZE,
  START_MESSAGE,
  INPUT_MESSAGE,
  END_MESSAGE,
  DECISION_MESSAGE,
  DUPLICATION_ERROR,
  DECISION_ERROR,
  ZERO_INPUT_ERROR,
  FORM_ERROR,
  VALID_INPUT_FORM,
  RESTART,
  EXIT,
  ZERO,
};
