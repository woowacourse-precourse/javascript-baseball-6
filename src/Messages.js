const Messages = {
  START: "숫자 야구 게임을 시작합니다.",
  GET_INPUT: "숫자를 입력해주세요 : ",
  THREE_STRIKE: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART_OR_EXIT: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
  GAME_OVER: "숫자 야구 게임이 종료되었습니다.",
  ERROR: {
    INVALID_EMPTY: "[ERROR] 숫자를 입력해주세요.",
    INVALID_INPUT: "[ERROR] 숫자만 입력 가능합니다.",
    INVALID_LENGTH: "[ERROR] 숫자를 3자리 숫자로 입력해주세요",
    INVALID_ENTER_DUPLICATE: "[ERROR] 숫자가 중복되지 않게 입력해주세요.",
    CHOOSE_ONE_OR_TWO: "[ERROR] 1 또는 2만 입력 가능합니다.",
  },
};

export default Messages;
