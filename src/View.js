import { Console } from '@woowacourse/mission-utils';

class View {
  opening() {
    Console.print('숫자 야구 게임을 시작합니다.');
    return this;
  }

  async ending() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    await this.input('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n');
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

  update(model) {
    const { strike, ball } = model.getState();
    let string = '';
    if (ball > 0) {
      string += `${ball}볼`;
    }
    if (strike > 0) {
      string += ` ${strike}스트라이크`;
    }
    if (strike === 0 && ball === 0) {
      string += '낫싱';
    }
    Console.print(string);
    return this;
  }

  getInputNumber() {
    return this.inputValue;
  }
}

export default View;
