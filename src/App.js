class App {
  constructor() {
    this.isRunning = true;
  }
  async play() {
    while (this.isRunning) {
      const start = makeAnswer();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    
      let result;
      while (result !== "3 스트라이크") {
        const input = await MissionUtils.Console.readLineAsync(
          "숫자를 입력해주세요 : "
        );
      }
    }
  }

  makeAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNum)) computer.push(randomNum);
    }
  
    return [...computer];
  }

}

export default App;
