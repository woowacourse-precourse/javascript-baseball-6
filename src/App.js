import { Console, Random } from '@woowacourse/mission-utils'

class App {
  getCompuerNumbers() {
    const computerNumbers = [];

    while (computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerNumbers.includes(number)) {
        computerNumbers.push(number);
      };
    };

    return computerNumbers;
  };

  throwError() {
    throw new Error('[ERROR] 숫자가 잘못된 형식입니다')
  }

  async getUserNumbers() {
    return new Promise((resolve) => {
      Console.readLineAsync('숫자를 입력해주세요 : ').then((userNumbers) => {
        resolve(userNumbers.split('').map((number) => parseInt(number)));
      });
    });
  };

  async play() {
    const computerNumbers = this.getCompuerNumbers();
    Console.print(computerNumbers);
    const userNumbers = await this.getUserNumbers();
    Console.print(userNumbers);
  };
};

const app = new App();

app.play();

export default App;