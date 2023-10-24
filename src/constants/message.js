import { TargetBalls } from '../domain';
import { RESTART_COMMAND } from './system';

export const MESSAGE = Object.freeze({
  enterSubmitBall: '숫자 야구 게임을 시작합니다.\n숫자를 입력해주세요 : ',
  score(strike, ball) {
    return `${ball ? `${ball}볼 ` : ''}${strike ? `${strike}스트라이크` : ''}`.trim();
  },
  nothing: '낫싱',
  completeGame: `${TargetBalls.BALL_QUANTITY}개의 숫자를 모두 맞히셨습니다! 게임 종료 \n`,
  askRestart: `게임을 새로 시작하려면 ${RESTART_COMMAND.confirm}, 종료하려면 ${RESTART_COMMAND.deny}를 입력하세요.`,
});
