import { GAME_SETTINGS } from './GameSettings.js';

export const NOTIFICATION_MESSAGE = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  needInput: '숫자를 입력해주세요 : ',
  gameEnd: `${GAME_SETTINGS.numberLength}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
  gameRetry: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
});

const ERROR_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  notAValidNumber: `${ERROR_PREFIX} 입력한 값이 유효한 값이 아닙니다. 1 - 9 까지의 값을 입력해주세요`,
  notAValidNumberLength: `${ERROR_PREFIX} 입력한 값이 유효한 값이 아닙니다. 중복되지 않는 3개의 숫자를 입력해주세요`,
  notAValidRetryCommand: `${ERROR_PREFIX} 입력한 값이 유효한 재시작 코드가 아닙니다. 1 또는 2의 값을 입력해주세요`,
});

export const STATUS_MESSAGE = Object.freeze({
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
});
