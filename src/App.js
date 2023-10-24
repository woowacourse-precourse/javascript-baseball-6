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
        if (
          input.length !== 3 ||
          new Set(input).size !== 3 ||
          [...input].some((item) => Number(item) < 1 || Number(item) > 9)
        ) {
          throw new Error("제시된 조건을 확인해주세요(1~9까지의 서로 다른 3자리의 수)")
        }
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
