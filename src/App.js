import readline from 'readline';

class App {
  async play() {
    this.StartMessage(); // StartMessage 메서드 호출
    const userInput = await this.InputPlayerNumbers();
  }

  StartMessage() {
    const StartMessage = '숫자 야구 게임을 시작합니다.';
    console.log(StartMessage);
  }

  MakeRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }

  InputPlayerNumbers() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    return new Promise((resolve) => {
      let input = [];
      rl.question('숫자를 입력해주세요 : ', (userInput) => {
        input = userInput.split('').map((number) => parseInt(number));
        rl.close();
        resolve(userInput);
      });
    });
  }
}

const app = new App();
app.play();

export default App;
