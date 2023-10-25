class App {
  constructor() {
    this.pitcherNumbers = [];
    this.hitterNumbers = [];
    this.score = [0, 0]; // [ball, strike]
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    await this.gameStart();
  }

  async gameStart() {
    this.pitcherNumbers = [];
    await this.getPitcherNumbers();
  }

  async getPitcherNumbers() {
    while (this.pitcherNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.pitcherNumbers.includes(number)) {
        this.pitcherNumbers.push(number);
      }
    }
  }
}

export default App;
