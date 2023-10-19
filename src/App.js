const START_MESSAGE = "숫자 야구 게임을 시작합니다.";

class App {
  async play() {
    outputMessage(START_MESSAGE);
  }
}

function outputMessage(message) {
  console.log(message);
}

export default App;
