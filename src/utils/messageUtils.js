import { GAME_RESULT } from '../constants/baseballGame.js';

export const GameResultMessage = {
  formatStrike: (strike) => `${strike}스트라이크`,
  formatBall: (ball) => `${ball}볼`,
  formatWin: (strike) => `${strike}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
};

export const getResultMessage = ({ strike, ball }) => {
  const { formatBall, formatStrike } = GameResultMessage;

  if (!strike && !ball) return GAME_RESULT.NOTHING;

  return [ball && formatBall(ball), strike && formatStrike(strike)]
    .filter(Boolean)
    .join(' ');
};
