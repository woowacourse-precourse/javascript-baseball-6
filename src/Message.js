const Message = {
  START: "숫자 야구 게임을 시작합니다.",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  ERROR: Object.freeze({
    NUMBERS: "[ERROR] 서로 다른 3자리의 수가 아닙니다.",
    RESTART: "[ERROR] 1과 2 중 하나의 수가 아닙니다.",
  }),
};
Object.freeze(Message);

export default Message;
