import { Console } from '@woowacourse/mission-utils';

class View {
  opening() {
    Console.print('숫자 야구 게임을 시작합니다.');
    return this;
  }

  async inputNumber() {
    await this.input('숫자를 입력해주세요 : ');
    return this;
  }

  async input(query) {
    const input = await Console.readLineAsync(query);
    this.inputValue = input;
    return this;
  }
}

export default View;
