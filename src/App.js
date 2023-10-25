import { CREATE_RANDOM_NUMBER } from './Computer.js'
import { PLAYER_INPUT } from './Player.js'
import { RETURN_RESULT } from "./GameRefree.js";
class App {
  async play() {
    //랜덤으로 값 입력
    const RANDOM_NUMBER = CREATE_RANDOM_NUMBER();
    console.log("컴퓨터"+RANDOM_NUMBER);
    const PLAYER_NUMBER = (await PLAYER_INPUT()).split('').map(Number);
  }
}

//실행
const app = new App();
app.play();
export default App;


