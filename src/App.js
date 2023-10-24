class App {
  async play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  generateRandomNumbers() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }

    return computer;
  }
}

export default App;
