class App {
  constructor() {
    this.rightAnswer = [];
  }

  async play() {
    await this.createNewGame();
  }

  // TODO: 새 게임 생성 및 게임 시작 메시지 출력 후 새로운 턴을 호출
  async createNewGame() {}

  // TODO: 게임의 각 턴으로써, 사용자 입력값을 받아 검증 후 카운트 결과 계산
  async startGameTurn() {}

  // TODO: 게임 종료 후 사용자에게 재시작 여부를 확인
  async checkRestartGame() {}
}

const app = new App();
app.play();

export default App;
