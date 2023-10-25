export const GAME_MESSAGE = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  FINISH: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  REPLAY: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

export const ERROR_MESSAGE = {
  INPUT_EXIST_ERROR: "[ERROR] 값을 입력해주세요.",
  INPUT_REPLAY_TYPE_ERROR: "[ERROR] 1 또는 2를 입력하세요.",
  INPUT_USER_NUMBER_LENGTH_ERROR: "[ERROR] 3자리 숫자만 입력하세요.",
  INPUT_DATA_TYPE_ERROR: "[ERROR] 숫자만 입력하세요.",
  INPUT_DUPLICATE_ERROR: "[ERROR] 서로 다른 숫자만 입력하세요.",
  POSITIVE_NUMBER_ERROR: "[ERROR] 1부터 9 사이의 숫자를 입력하세요.",
};

module.exports = {
  GAME_MESSAGE,
  ERROR_MESSAGE,
};
