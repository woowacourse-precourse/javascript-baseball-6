import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.numbers = [1,2,3,4,5,6,7,8 ,9];
    this.answer = [];
  }

  generateRandomNumbers() {
    while(this.answer.length < 3) {
      let randomIndex = Random.pickNumberInRange(0,this.numbers.length -1);
      let number = this.numbers.splice(randomIndex ,1)[0];
      this.answer.push(number);
    }
  }

  async playGame() {
    console.log("숫자 야구 게임을 시작합니다.");

    this.generateRandomNumbers();

    while (true) {
      const userInput = await Console.readLineAsync('세 개의 숫자를 입력해주세요: ');
      const userNumbers = userInput.split('').map(Number);

      if (userNumbers.length !== 3) {
        throw new Error();
        process.exit(1);
      }

      let strikes = 0;
      let balls = 0;

      for (let i=0; i<3; i++) {
        if (this.answer[i] === userNumbers[i]) strikes++;
        else if (this.answer.includes(userNumbers[i])) balls++;
      }

      if (strikes === 0 && balls === 0) console.log("낫싱");
      else if (strikes === 3) break;

      console.log(`${balls}볼 ${strikes}스트라이크`);
    }

    console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");

    const restartInput = await Console.readLineAsync('재시작 "1", 종료 "2"를 입력하세요: ');

    if(restartInput === '1') return this.playGame();

    console.log("게임 종료");
  }

  async play() {
    await this.playGame();
  }
}

const appInstance = new App();
appInstance.play();

export default App;
