const messages = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  inputNumber: '숫자를 입력해주세요 : ',
  correctNumber: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  reStart: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  nothing: '낫싱',
  errorMessage: '[ERROR] 숫자가 잘못된 형식입니다.',
});

const feedbackMessage = (ball, strike) => {
  return `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크` : ''}`;
};

export { messages, feedbackMessage };
