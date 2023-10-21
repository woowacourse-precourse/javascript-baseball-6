class App {
  async play() {}

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
    const InputMessage = '숫자를 입력해주세요 : ';
    console.log(InputMessage);

    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let input = [];
    rl.on('line', (line) => {
      input = line.split('').map((number) => parseInt(number));
      rl.close();
    });

    rl.on('close', () => {
      process.exit();
    });
  }
}

const GameStart = new App(); // App 클래스의 인스턴스 생성
GameStart.play();

export default App;
