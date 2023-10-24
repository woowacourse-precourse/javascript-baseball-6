export const SIZE = 3;

export const GuideText = Object.freeze({
  START_GAME: '숫자 야구 게임을 시작합니다.',
  USER_INPUT: '숫자를 입력해주세요 : ',
  CORRECT_ANSWER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  END_GAME: '게임 종료',
});

export const ErrorMessage = Object.freeze({
  INVALID_PATTERN:
    "[ERROR] 잘못된 형식입니다. 공백과 중복없이 숫자 세개를 입력해야합니다. 게임을 종료합니다.",
  INVALID_LENGTH:
    "[ERROR] 잘못된 형식입니다. 입력된 값의 총 길이는 3이 되어야합니다. 게임을 종료합니다.",
  INVALID_RESTART:
    "[ERROR] 잘못된 입력입니다. 1 또는 2 외의 숫자나 문자는 입력할 수 없습니다. 게임을 종료합니다.",
  ERROR_WHILE_PLAYING:
    "[ERROR] 게임 실행 중 에러가 발생하였습니다. 게임을 종료합니다.",
});