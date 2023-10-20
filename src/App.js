import {makeRandomNumber} from './MakeRandomNumber.js'
import {MissionUtils} from "@woowacourse/mission-utils";
class App {
  async play() {
    console.log('숫자 야구 게임을 시작합니다.');
    let randomNumber = makeRandomNumber();
    const inputNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세 :');

  }
}

const san = new App();
san.play();

export default App;
