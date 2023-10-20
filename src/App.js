import { Console } from "@woowacourse/mission-utils";
class App  {
  constructor(){
    this.init();
  }

  init () {
    Console.print("숫자 야구 게임을 시작합니다.");
  }
  
  async play() {
    try{
      const numberInput = await Console.readLineAsync("숫자를 입력해주세요 : ")
    }
    catch (error) {

    }

  }
  async invalidateInput (query) {

  }
  
}
const app = new App()
app.play()
export default App;
