export const GAME = Object.freeze({
  REPLAY_NUMBER: '1',
  END_NUMBER: '2',
});

export const STRIKE_OUT = 3;

export const MESSAGE = Object.freeze({
  GAME_START: '숫자 야구 게임을 시작합니다.',
  ENTER_NUMBER: '숫자를 입력해주세요 : ',
  GAME_OVER: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  GAME_RESET: `게임을 새로 시작하려면 ${GAME.REPLAY_NUMBER}, 종료하려면 ${GAME.END_NUMBER}를 입력하세요.\n`,
});

export const ERROR = Object.freeze({
  TREBLE_FIGURES: '[ERROR] 세자리 수가 아닙니다.',
  DIFFERENT_NUMBER: '[ERROR] 중복되는 숫자가 있으면 안됩니다.',
  TYPE_NUMBER: '[ERROR] 숫자를 입력하셔야 합니다.',
  REGAME_NUMBER: `[ERROR] 재시작하려면 ${GAME.REPLAY_NUMBER}, 종료하려면 ${GAME.END_NUMBER}를 입력하셔야 합니다.`,
});
