import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR } from "./texts.js";

class App {
  async play(){
    // 중복된 숫자를 확인하는 함수
    setAnswer();
 
    // 답안 생성, 무작위한 3자리 숫자를 만듦
    function setAnswer() {
      let answer = [];
      while (answer.length < 3) {
        const randomNum = MissionUtils.Random.pickNumberInRange(1, 9);
        if(!answer.includes(randomNum)) {
          answer.push(randomNum)
        }
      }
      MissionUtils.Console.print(`숫자 야구 시작합니다.`);
      getValue(answer);
    }

    // 사용자에게 입력값 받기
    async function checkValue() {
      const value = await MissionUtils.Console.readLineAsync(`숫자를 입력해주세요`);
      if (isNaN(value)) throw new Error(ERROR.NUMBER);
      else if (value.includes('0')) throw new Error(ERROR.INCLUDE_0);
      
      if (value.length !== 3) throw new Error(ERROR.LENGTH);

      if (new Set(value).size !== value.length) throw new Error(ERROR.REPEATED);    
      return [...value].map(Number);
      }

    // 입력값과 답안 비교
    function getValue(answer) {
      let value = checkValue();
      if (!value) return;

      let s = 0, b = 0;
      let str = '';
      value.split('').forEach((e, idx) => {
        if (answer.indexOf(e) === idx) s++;
        else if (answer.includes(e)) b++;
      });
      if (s !== 0) str = `${s}스트라이크`;
      if (b !== 0) str += `${b}볼`;
      if (s === 0 && b === 0) str = `낫싱`;
      console.log(str);

      if (s !== 3) {
        getValue(answer);
      } else {
        MissionUtils.Console.readLineAsync(`${s}스트라이크\n3개의 숫자를 모두 맞혔습니다! 게임 종료`);
        playAgain();
      }
    }

    // 게임 재시작 또는 종료 선택
    async function playAgain() {
      const choice = await MissionUtils.Console.readLineAsync('게임을 재시작하려면 1을 누르고, 종료하려면 2를 누르세요.');
      if (choice === '1') {
        setAnswer();
      } else if (choice === '2') {
        MissionUtils.Console.print('게임을 종료합니다. 감사합니다!');
      } else {
        MissionUtils.Console.print('올바른 선택지를 입력해주세요.');
        playAgain();
      }
    }
  }
}

export default App;