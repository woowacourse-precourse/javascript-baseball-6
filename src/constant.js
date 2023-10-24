export const SIZE = 3;

export const GuideText = Object.freeze({
  START_GAME: '숫자 야구 게임을 시작합니다.',
  USER_INPUT: '숫자를 입력해주세요 : ',
  CORRECT_ANSWER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  END_GAME: '게임 종료',
});

export const ErrorMessage = Object.freeze({
  INVALID_PATTERN: '[ERROR] 잘못된 입력입니다. 게임을 종료합니다.',
  ERROR_WHILE_PLAYING:
    '[ERROR] 게임 실행 중 에러가 발생하였습니다. 게임을 종료합니다.',
  INVALID_ANSWER: '[ERROR] 잘못된 형식입니다. 게임을 종료합니다.',
});