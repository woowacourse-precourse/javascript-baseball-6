export const GAME_MESSAGE = {
  PROMPT: "숫자를 입력해주세요 : ",
  START: "숫자 야구 게임을 시작합니다.",
  RESTART: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_INPUT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  END_GAME: "게임을 종료합니다.",
};

export const VALIDATOR_ERROR_MESSAGE = {
  INPUT: "[ERROR] 값을 입력하지 않았습니다.",
  LENGTH: "[ERROR] 입력값이 세 자리 숫자가 아닙니다.",
  ZERO: "[ERROR] 0은 입력할 수 없습니다.",
  NAN: "[ERROR] 숫자만 입력 가능합니다.",
  UNIQUE: "[ERROR] 세 개의 서로 다른 숫자를 입력해야 합니다.",
};

export const RESTART_MANAGER_ERROR_MESSAGE = {
  INPUT: "잘못된 값을 입력하였습니다.",
};

export const COMPUTER_RULES = {
  MIN: 1,
  MAX: 9,
  DIGITS: 3,
};

export const CALCULATOR_RULES = {
  STRIKE: 3,
};
