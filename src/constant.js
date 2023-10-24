export const GAME = {
  START: '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER: '숫자를 입력해주세요 : ',
  STRIKE: 3,
  CLEAR: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  OPTION: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  RESULT: (strike, ball) => {
    if (ball === 0 && strike > 0) {
      return `${strike}스트라이크`;
    }

    if (ball === 0 && strike === 0) {
      return '낫싱';
    }

    if (strike === 0 && ball > 0) {
      return `${ball}볼`;
    }

    return `${ball}볼 ${strike}스트라이크`;
  },
  RESTART: '1',
  QUIT: '2',
  END: '게임을 종료합니다.',
};

export const ERROR = {
  LENGTH: '[ERROR] 야구 숫자는 3개여야 합니다.',
  RANGE: '[ERROR] 야구 숫자는 1과 9 사이의 숫자여야 합니다.',
  UNIQUE: '[ERROR] 야구 숫자는 중복이 없어야 합니다.',
  OPTION: '[ERROR] 옵션으로 1 또는 2를 선택해 주세요.',
};
