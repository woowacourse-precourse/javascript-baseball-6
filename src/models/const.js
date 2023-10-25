export const Message = {
  GameStart: '숫자 야구 게임을 시작합니다.',
  GameEnd: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  NewGame: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  InputNumber: '숫자를 입력해주세요 : ',
};

export const ErrorMessage = {
  InValidNumber: '[ERROR] 중복되지 않은 세 자리 숫자를 입력하세요. 게임 종료',
  Terminate: '[ERROR] 올바른 값을 입력하지 않아 게임을 종료합니다.',
};

export const GameRule = {
  AnswerLength: 3,
  MinAnswer: 1,
  MaxAnswer: 9,
};

export const GameCommand = {
  NewGame: '1',
  EndGame: '2',
};

export const GameScore = {
  Strike: '스트라이크',
  Ball: '볼',
  Nothing: '낫싱',
};
