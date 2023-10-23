import { NUMS } from './number.js';

export const ERROR = {
  INVALID_CONTROL_NUM: `${NUMS.REPLAY}, ${NUMS.END} 중 1개를 입력하세요.`,
  INVALID_LENGTH: `서로 다른 숫자 ${NUMS.THREE}개를 입력하세요.`,
  PREFIX: '[ERROR]',
};

export const COMMAND = {
  WELCOME: '숫자 야구 게임을 시작합니다.',
  ASK_NUMBER: '숫자를 입력해주세요 : ',
  ASK_REPLAY: `게임을 새로 시작하려면 ${NUMS.REPLAY}, 종료하려면 ${NUMS.END}를 입력하세요.\n`,
  MATCH: `${NUMS.THREE}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
};

export const MATCH = {
  STRIKE: '스트라이크',
  BALL: '볼',
  NOTHING: '낫싱',
};
