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
        // 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고 애플리케이션을 종료한다.
        // 1. 숫자인지, 숫자라면 3자리인지 체크
        const isValid = /^\d{3}$/.test(userNumbers)
        // 2. 숫자가 중복되는지 체크
        const isDuplicated = userNumbers.split('').some((number, index, numbers) => numbers.indexOf(number) !== index);

        if (!isValid || isDuplicated) {
          this.throwError();
        }

        resolve(userNumbers.split('').map((number) => parseInt(number)));
      });
    });
  };

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.')
    const computerNumbers = this.getCompuerNumbers();
    const userNumbers = await this.getUserNumbers();
    Console.print(userNumbers);
  };
};

const app = new App();

app.play();

export default App;