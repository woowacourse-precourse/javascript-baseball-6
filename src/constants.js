export const NUMBER_REGEX = /^[1-9]$/;

export const ERROR_MESSAGES = {
  INVALID_NUMBER: '[ERROR] 유효한 숫자를 입력해야 합니다.',
  INVALID_NUMBER_COUNT: '[ERROR] 3개의 숫자를 입력해야 합니다.',
  DUPLICATE_NUMBERS: '[ERROR] 숫자는 중복되지 않아야 합니다.',
  INVALID_RESTART_INPUT:
    '[ERROR] 게임 종료 및 재시작의 유효한 숫자를 입력해야 합니다.',
};

export const VALID_USER_INPUTS = {
  RESTART: '1',
  EXIT: '2',
};

export const GAME_MESSAGES = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBERS: '숫자를 입력해 주세요 : ',
  INPUT_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  NOTHING: '낫싱',
  WIN: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
};

export const NUMBER_COUNT = 3;