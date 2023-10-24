const SystemMessage = {
  START : '숫자 야구 게임을 시작합니다.',
  INPUT_NUMBER : '숫자를 입력해주세요 : ',
  THREE_STRIKE : '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  RESTART_OR_EXIT : '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
  GAME_OVER : '게임 종료',

  ERROR: {
    INVALID_BALL_NUMBER : "[ERROR] 숫자는 3자리 숫자가 입력되어야 합니다.",
    INVALID_SELECTED_NUMBER : "[ERROR] 1과 2 중 하나를 입력하셔야 합니다.",
  }, 
};

export default SystemMessage; 