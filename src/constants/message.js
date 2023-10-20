import { GAME_TERMS } from './gameTerms';
import { SYMBOLS } from './symbols';

export const OUTPUT_MESSAGE_TEXT = Object.freeze({
  gameStart: '숫자 야구 게임을 시작합니다.',
  exitGame: `${GAME_TERMS.baseball.digit}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
});

export const OUTPUT_MESSAGE_METHOD = Object.freeze({
  compareResult({ strike, ball }) {
    return (
      [
        [ball, GAME_TERMS.compareResult.ball],
        [strike, GAME_TERMS.compareResult.strike],
      ]
        .filter(([count]) => count > 0)
        .map(([count, suffix]) => `${count}${suffix}`)
        .join(SYMBOLS.space) || GAME_TERMS.compareResult.nothing
    );
  },
});

export const INPUT_MESSAGE = Object.freeze({
  playerBaseball: '숫자를 입력해주세요 : ',
});
