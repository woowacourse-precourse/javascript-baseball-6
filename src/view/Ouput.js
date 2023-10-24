import { MESSAGE } from "../utils/Constant.js";

const Output = {
  // 시작 메세지
  async getStart() {
    return MESSAGE.START;
  },

  // 볼, 스트라이크 개수 반환
  async getAnswer(ball, strike) {
    if (ball && strike) {
      return `${ball}볼 ${strike}스트라이크`;
    } else if (ball) {
      return `${ball}볼`;
    } else if (strike) {
      return `${strike}스트라이크`;
    } else {
      return '낫싱';
    }
  },

  // 성공 메세지
  async getSuccess() {
    return MESSAGE.SUCCESS;
  },

  // 종료 메세지
  async getEnd() {
    return MESSAGE.END;
  },
};

export { Output };