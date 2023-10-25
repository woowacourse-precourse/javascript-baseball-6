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

export {
  NUMBER_SIZE,
  START_MESSAGE,
  INPUT_MESSAGE,
  END_MESSAGE,
  DECISION_MESSAGE,
  FORM_ERROR,
  DUPLICATION_ERROR,
  DECISION_ERROR,
  VALID_INPUT_FORM,
};
