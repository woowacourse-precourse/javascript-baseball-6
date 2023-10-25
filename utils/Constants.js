export const NUMBER_LENGTH = 3;
export const CORRECT_NUMBER = 3;
export const NO_MATCH_NUMBER = -1;

export const GAME_MESSAGE = Object.freeze({
  START: '숫자 야구 게임을 시작합니다.',
  INPUT: '숫자를 입력해주세요 : ',
  CORRECT: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RETRY: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  FINISH: '게임 종료',
});

export const ANSWER = Object.freeze({
  RESTART: '1',
  FINISH: '2',
});

export const ERROR = Object.freeze({
  NUMBER_LENGTH: '[ERROR] 3개의 숫자를 입력해주세요.',
  ONLY_NUMBER: '[ERROR] 숫자만 입력해주세요.',
  NOT_DUPLICATION: '[ERROR] 중복되지 않는 수를 입력해주세요.',
  UNCORRECT_RETRY_ANSWER: '[ERROR] 1과 2만 입력해주세요.',
});
