import {Console} from "@woowacourse/mission-utils";
import { CREATE_RANDOM_NUMBER } from './Computer.js'
class App {
  async play() {
    //랜덤으로 값 입력
    const RANDOM_NUMBER = CREATE_RANDOM_NUMBER();
    console.log(RANDOM_NUMBER);
  }
}




//실행
const app = new App();
app.play();




export default App;


