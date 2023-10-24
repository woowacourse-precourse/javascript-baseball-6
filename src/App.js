import { Random, Console } from '@woowacourse/mission-utils'

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const computerNumbers = [];
    while(computerNumbers.length < 3){
      const randomNumber = Random.pickNumberInRange(1, 9);
      if(!computerNumbers.includes(randomNumber)){
        computerNumbers.push(randomNumber);
      }
    }
  }
}

const app = new App();
app.play();

export default App;
