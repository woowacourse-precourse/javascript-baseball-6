class App {
  constructor() {
    this.isRunning = true;
  }
  async play() {
    while (this.isRunning) {
      const start = setAnswer();
      MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    }
  }

  setAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(randomNum)) computer.push(randomNum);
    }
  
    return [...computer];
  }

}

export default App;
