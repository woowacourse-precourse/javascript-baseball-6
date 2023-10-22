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

    while (isInGame) {
        const number = await Console.readLineAsync("숫자를 입력해주세요. : ");
        
    }
  }
}

export default App;
