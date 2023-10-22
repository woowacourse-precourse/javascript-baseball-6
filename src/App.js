import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {   
    Console.readLine('숫자를 입력해주세요.', (answer) => {
      console.log(`입력한 숫자: ${answer}`);
    }); 
  }
}

const app = new App();
app.play();