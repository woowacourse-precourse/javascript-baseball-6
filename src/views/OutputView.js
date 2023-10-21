import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE_METHOD, OUTPUT_MESSAGE_TEXT } from '../constants/message';

/**
 * '전달 받은 값을 화면에 렌더링'의 역할을 수행하는 메서드
 */
const OutputView = {
  /**
   * 주어진 메시지를 출력하기 위한 추상화 된 메서드
   * @param {string} message - 출력할 메시지
   */
  print(message) {
    Console.print(message);
  },

  /**
   * '게임 시작' 메시지를 출력하는 메서드
   */
  printStartGame() {
    this.print(OUTPUT_MESSAGE_TEXT.gameStart);
  },

  /**
   * '플레이어와 컴퓨터 야구공의 비교 결과'를 출력하는 메서드
   * @param {Object} result - 스트라이크와 볼의 결과를 포함하는 객체
   * @param {number} result.strike - 스트라이크 개수
   * @param {number} result.ball - 볼의 개수
   */
  printCompareResult({ strike, ball }) {
    this.print(OUTPUT_MESSAGE_METHOD.compareResult({ strike, ball }));
  },

  /**
   * '게임 종료' 메시지를 출력하는 메서드
   */
  printExitGame() {
    this.print(OUTPUT_MESSAGE_TEXT.exitGame);
  },
};

export default OutputView;
