const VALUE = require('./value');

const MESSAGE = Object.freeze({
    START: '숫자 야구 게임을 시작합니다.',
    ASK_NUMBERS: '숫자를 입력해주세요 : ',
    NOTHING: '낫싱',
    BALL: (ball) => `${ball}볼`,
    STRIKE: (strike) => `${strike}스트라이크`,
    ASK_OPTION: `게임을 새로 시작하려면 ${VALUE.OPTION_RESTART}, 종료하려면 ${VALUE.OPTION_FINISH}를 입력하세요.\n`,
    FINISH: '게임 종료',
  });
  
  module.exports = MESSAGE;