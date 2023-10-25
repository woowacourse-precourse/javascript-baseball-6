class App {
  constructor() {
    this.pitcherNumbers = [];
    this.hitterNumbers = [];
    this.score = [0, 0]; // [ball, strike]
  }

  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }
}

export default App;
