import { RESTART_COMMAND } from './system.js';

export const ERROR_MESSAGE = Object.freeze({
  common: Object.freeze({
    notNumber: '숫자를 입력해주세요!',
    notInteger: '정수를 입력해주세요!',
    notArray: '배열을 입력해주세요!',
    outOfRange(min, max) {
      return `${min} 이상 ${max} 이하의 값을 입력해주세요!`;
    },
  }),

  targetBalls: Object.freeze({
    invalidQuantity(quantity) {
      return `${quantity}개의 숫자를 가진 배열을 입력해주세요!`;
    },
    isDuplicated: '중복되지 않는 숫자들로 입력해주세요!',
  }),

  ANSWER_BALLS: Object.freeze({
    invalidContainsArgs: 'contains의 인자에 TargetBall을 입력해주세요!',
    invalidMatchBallArg: 'match의 첫번째 인자에 TargetBall을 입력해주세요!',
    invalidMatchIndexArg: 'match의 두번째 인자에 올바른 index값을 입력해주세요!',
  }),

  RESTART_COMMAND: Object.freeze({
    invalidRestartCommand: `${RESTART_COMMAND.confirm} 혹은 ${RESTART_COMMAND.deny}를 입력해주세요!`,
  }),
});
