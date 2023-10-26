import { BaseballMaker } from '../model/index.js';
import { EXIT_COMMAND_TYPES } from './gameOption.js';
import { SYMBOLS } from './symbols.js';

export const OUTPUT_MESSAGE_TEXT = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  exitGame: `${BaseballMaker.BASEBALL_SHAPE.size}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
});

export const COMPARE_RESULT_FORMAT_TYPES = Object.freeze({
  strike: '스트라이크',
  ball: '볼',
  nothing: '낫싱',
});

export const OUTPUT_MESSAGE_METHOD = Object.freeze({
  compareResult({ strike, ball }) {
    return (
      [
        [ball, COMPARE_RESULT_FORMAT_TYPES.ball],
        [strike, COMPARE_RESULT_FORMAT_TYPES.strike],
      ]
        .filter(([count]) => count > 0)
        .map(([count, suffix]) => `${count}${suffix}`)
        .join(SYMBOLS.space) || COMPARE_RESULT_FORMAT_TYPES.nothing
    );
  },
});

export const INPUT_MESSAGE = Object.freeze({
  playerBaseball: '숫자를 입력해주세요 : ',
  exitGameCommand: `게임을 새로 시작하려면 ${EXIT_COMMAND_TYPES.restart}, 종료하려면 ${EXIT_COMMAND_TYPES.exit}을 입력하세요.\n`,
});
