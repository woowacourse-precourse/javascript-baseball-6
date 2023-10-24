import { TargetBalls } from '../domain/index.js';
import { RESTART_COMMAND } from './system.js';

export const MESSAGE = Object.freeze({
  enterSubmitBall: '숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ',
  score: (strike, ball) => `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크` : ''}`,
  nothing: '낫싱',
  completeGame: `${TargetBalls.BALL_QUANTITY}개의 숫자를 모두 맞히셨습니다! 게임 종료 \n게임을 새로 시작하려면 ${RESTART_COMMAND.CONFIRM}, 종료하려면 ${RESTART_COMMAND.DENY}를 입력하세요.`,
});
