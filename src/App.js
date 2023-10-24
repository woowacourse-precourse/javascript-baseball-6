import BaseballInput from "./BaseballInput"; // 모듈의 상대 경로를 사용

class App {
  play() {
    const baseballInput = new BaseballInput();

    baseballInput.startPrint();
    let random = baseballInput.makeComputerNum();
    baseballInput.makeUserInput(random);
  }
}

const app = new App();
app.play();

export default App;
