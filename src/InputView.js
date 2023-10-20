import { Console } from '@woowacourse/mission-utils';

export default class InputView {
  static async readUserInput() {
    const answer = await Console.readLineAsync('숫자를 입력해주세요 : ');
    return answer;
  }
  static async readRetryAnswer() {
    const answer = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    return answer;
  }
}
