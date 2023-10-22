class App {
  constructor() {
    this.MIN_VALUE = 1;
    this.MAX_VALUE = 999;
  }

  async play() {
    const randomNumber = Random.pickNumberInRange(
      this.MIN_VALUE,
      this.MAX_VALUE,
    ).toString();
    let strikeCounts = 0;
    let ballCounts = 0;
    let isInGame = true;

    Console.print("숫자 야구 게임을 시작합니다.");
  }
}

export default App;
