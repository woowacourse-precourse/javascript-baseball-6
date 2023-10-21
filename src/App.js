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
}

const GameStart = new App(); // App 클래스의 인스턴스 생성
GameStart.play();

export default App;
