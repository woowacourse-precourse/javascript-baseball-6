export const DEFAULT = {
  RANDOM_RANGE_MIN: 1, //랜덤 선택할 숫자 범위의 최소값
  RANDOM_RANGE_MAX: 9, //랜덤 선택할 숫자 범위의 최대값
  RESTART: 1, //게임 재시작
  END: 2, //게임 종료
  MAX_LENGTH: 3, //숫자의 최대 길이
};

export const SCORE = {
  STRIKE: "스트라이크",
  BALL: "볼",
  NOTHING: "낫싱",
};

export const LOG = {
  START: "숫자 야구 게임을 시작합니다.",
  INPUT: "숫자를 입력해주세요 : ",
  CORRECT: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  CONTROL: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
};

export const ERROR = {
  NOT_NUMBER: "[ERROR] 숫자만 입력해주세요.",
  NOT_UNIQUE: "[ERROR] 중복된 숫자가 있습니다.",
  NOT_FORMAL: "[ERROR] 1 ~ 9 사이의 숫자 3개를 입력해주세요.",
  NOT_GAME_CONTROL: "[ERROR] 1 또는 2를 입력해주세요.",
};
