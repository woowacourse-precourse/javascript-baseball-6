const gameMessage = {
  start: '숫자 야구 게임을 시작합니다.',
  end: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  nothing: '낫싱',
};

const userInput = {
  restart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요\n',
  numberPrompt: '숫자를 입력해주세요 : ',
};

const gameRules = {
  numberLength: 3,
  minNumber: 1,
  maxNumber: 9,
};

const BASEBALL_CONSTANT = { gameMessage, userInput, gameRules };

export default BASEBALL_CONSTANT;
