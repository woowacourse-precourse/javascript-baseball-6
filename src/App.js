import Computer from './Computer.js';
import Playgame from './Playgame.js';
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.computer = new Computer();
    this.playgame= new Playgame();
  }

  async play() {
    console.print('숫자 야구 게임을 시작합니다.');

      while(1) {
        const input = await Console.readLineAsync('숫자를 입력해주세요 : ');
        const checkinput = this.playgame.check(input);

        //사용자가 잘못된 값을 입력할 경우
        if (checkinput === false) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        //사용자가 정상적인 값을 입력할 경우
        const result = this.playgame.hint(this.computer.numbers, input);
        Console.print(result);
        
        if (result === '3스트라이크') {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        const restart = await Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n");

        //게임 재시작 여부
        if (restart === '1') {
          this.computer = new Computer();
        } else {
          break;
        }

       }

      }
  
    }
      
  }
  
  
const app = new App();
app.play();

export default App;
