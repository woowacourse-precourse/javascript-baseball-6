import { GAME_SETTINGS } from './GameSettings.js';

export const NOTIFICATION_MESSAGE = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  needInput: '숫자를 입력해주세요 : ',
  gameEnd: `${GAME_SETTINGS.numberLength}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  gameRetry: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
});

export const STATUS_MESSAGE = Object.freeze({
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
});
