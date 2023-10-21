class App {
  async play() {
    function start() {
      console.log("숫자 야구 게임을 시작합니다.");
    }
    start();
  }
}

const app = new App(); //게임시작
app.play();

export default App;