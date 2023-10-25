const NUM = 3;

const PRINT_STRING = {
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  GAME_START: '숫자 야구 게임을 시작합니다.',
  GAME_OVER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
};

const PRINT_ERROR_STRING = {
  ERROR_DUPLE: '[ERROR] 숫자가 중복 되어 프로그램이 종료 됩니다.',
  ERROR_LENGTH: '[ERROR] 3개의 숫자가 아니므로 프로그램이 종료 됩니다.',
  ERROR_RANGE: '[ERROR] 1부터 9까지의 숫자가 아니므로 프로그램이 종료 됩니다.',
  ERROR_INPUT_GAME_RESTART:
    '[Error] 알맞은 숫자가 아니므로 프로그램이 종료 됩니다.',
};

export {
  NUM,
  PRINT_STRING,
  PRINT_ERROR_STRING,
};