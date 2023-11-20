import { RULE } from './Rule.js';

const FORMAT = Object.freeze({
  numbers: `${RULE.rangeOfNumber.start}~${RULE.rangeOfNumber.end}까지의 서로 다른 ${RULE.lengthOfNumbers}개의 숫자를 입력해주세요.`,
  gameRestart: `게임을 새로 시작하려면 ${RULE.reStartNumber}, 종료하려면 ${RULE.endNumber}를 입력하세요.`,
});

const QUERY = Object.freeze({
  numbers: '숫자를 입력해주세요.' + FORMAT.numbers,
  gameRestart: FORMAT.gameRestart,
});

const COMMON_ERROR_MESSAGE = Object.freeze('[ERROR] 숫자가 잘못된 형식입니다.');

const ERROR_MESSAGE = Object.freeze({
  numbers: COMMON_ERROR_MESSAGE + FORMAT.numbers,
  gameRestart: COMMON_ERROR_MESSAGE + FORMAT.gameRestart,
});

const MESSAGE = {
  gameStart: '숫자 야구 게임을 시작합니다.',
  gameOver: '게임종료',
  strike: '스트라이크',
  threeStrike: `${RULE.numberOfStrikeForWin}스트라이크`,
  ball: '볼',
  nothing: '낫싱',
  win: `${RULE.numberOfStrikeForWin}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
};

export { COMMON_ERROR_MESSAGE, FORMAT, ERROR_MESSAGE, MESSAGE, QUERY };
