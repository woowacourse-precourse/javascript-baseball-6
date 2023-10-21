class App {
  async play() {
    const StartMessage = '숫자 야구 게임을 시작합니다.';
    console.log(StartMessage);
  }
}

const GameStart = new App(); // App 클래스의 인스턴스 생성
GameStart.play();

export default App;
