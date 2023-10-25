import { VALIDATION, GAME_CODE } from './constants';

export const INPUT_MESSAGE = Object.freeze({
  playerNumbers: '숫자를 입력해주세요 : ',
  confirmRestart: `게임을 새로 시작하려면 ${GAME_CODE.restart}, 종료하려면 ${GAME_CODE.finish}를 입력하세요.`,
});

export const OUTPUT_MESSAGE = Object.freeze({
  ball: '볼',
  strike: '스트라이크',
  nothing: '낫싱',
  gameStart: '숫자 야구 게임을 시작합니다.',
  gameEnd: `${VALIDATION.maxSize}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
});

export const ERROR_MESSAGE = Object.freeze({
  invalidNumber: `[ERROR] 입력값은 ${VALIDATION.minNumber}~${VALIDATION.maxNumber} 까지의 숫자만 가능합니다.`,
  invalidLength: `[ERROR] 입력값은 ${VALIDATION.maxSize}자리여야 합니다.`,
  duplicateNumber: '[ERROR] 중복된 숫자가 존재합니다.',
  invalidGameCode: '[ERROR] 올바른 선택이 아닙니다.',
});
