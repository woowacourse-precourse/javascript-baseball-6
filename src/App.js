import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    while (
      await this.startGame(this.getRandomNumbers()) === 1
    );
  }

  async startGame(answer) {
    while (true) {
      const input = (await Console.readLineAsync('숫자를 입력해주세요 : '))
        .split(' ').join('')
        .split('').map(Number);

      if (input.length !== 3 || input.some((n) => !Number.isInteger(n))) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }

      const [strike, ball] = this.getStrikesBalls(input, answer);

      const message = this.getMessage(strike, ball);
      Console.print(message);

      if (strike === 3) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
        const isRetry = Number(await Console.readLineAsync(''));

        if (isRetry !== 1 && isRetry !== 2) {
          throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
        }

        return isRetry;
      }
    }
  }

  getRandomNumbers() {
    const arr = [];
    while (arr.length < 3) {
      const rand = Random.pickNumberInRange(1, 9);
      if (arr.includes(rand)) continue;
      arr.push(rand);
    }
    return arr;
  }

  getStrikesBalls(input, answer) {
    let [strike, ball] = [0, 0];
    for (let i = 0; i < 3; i += 1) {
      if (input[i] === answer[i]) {
        strike += 1;
      } else if (answer.includes(input[i])) {
        ball += 1;
      }
    }
    return [strike, ball];
  }

  getMessage(strike, ball) {
    let message = '';
    if (ball > 0) {
      message += `${ball}볼`;
    }
    if (strike > 0) {
      message += ` ${strike}스트라이크`;
    }
    if (message === '') {
      message = '낫싱';
    }
    return message.trim();
  }
}

export default App;
