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

  async play() {
    const computerNumbers = this.getCompuerNumbers();
    Console.print(computerNumbers);
  };
};

const app = new App();

app.play();

export default App;