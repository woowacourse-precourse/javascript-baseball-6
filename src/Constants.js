export const NUMBER_LENGTH = 3;
export const EXIT_COMMAND = {
  RESTART: '1',
  END: '2',
};
export const CONSOLE_MESSAGE = {
  INPUT_NUMBER: '숫자를 입력하세요: ',
  THREE_STRIKE: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  IS_RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  END: '게임을 종료합니다.',
};
export const ERROR_MESSAGE = {
  NOT_UNIQUE_DIGIT: '[ERROR] 입력된 숫자의 자릿수는 모두 달라야합니다.',
  NO_INPUT: '[ERROR] 입력한 값이 없습니다.',
  NOT_NUMBER: '[ERROR] 숫자만 입력 가능합니다.',
  NOT_THREE_GUESSNUMBER: '[ERROR] 1~9사이의 세개의 숫자만 입력 가능합니다.',
  NOT_NUMBER_ONE_OR_TWO: '[ERROR] 숫자 1혹은 2만 입력하여야 합니다.',
}
