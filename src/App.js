class App {
  constructor() {
    this.play();
  }

  async play() {
    this.playGame();
  }

  playGame() {
    console.log("숫자 야구 게임을 시작합니다.");
  }
}

const app = new App();

export default App;
