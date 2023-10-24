export const GAMEMESSAGE = Object.freeze({
  startGame: '숫자 야구 게임을 시작합니다.',
  inputNumber: '숫자를 입력해주세요 : ',
  correctGame: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  restartGame: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
  endGame: '게임 종료',
});

export const ERRORMESSAGE = Object.freeze({
  invalidLength: '[ERROR] 입력한 숫자의 길이가 3이 아닙니다.',
  invaildNumber: '[ERROR] 1부터 9까지의 숫자만 입력해야 합니다.',
  duplicateNumber: '[ERROR] 중복된 숫자를 입력하셨습니다.',
  inputError:'[ERROR] 잘못된 값을 입력하셨습니다.',
  invalidChoice: '[ERROR] 올바른 선택이 아닙니다. 게임을 종료합니다.',
  playError:'[ERROR] 실행 중 에러가 발생하였습니다.',
});

export const RESULTMESSAGE = Object.freeze({
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
});
