import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {

    //게임 시작
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    //야구 게임 정답만들기
    const baseball = [];
    while (baseball.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!baseball.includes(number)) {
        baseball.push(number);
      }
    }

    while (true) {
      
      //정답 입력 받기
      const answer = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ');
      // 에러가 나는 경우
      if (answer === null || !answer) { // 입력이 없거나 공백일 때
        throw new Error("[ERROR] 숫자를 입력해주세요");
      } else if (answer.match(/\D/) || answer.length !== 3) { // 숫자가 아니거나 3자리 수가 아닐 때
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다");
      } else {
        const str = String(answer);
        const mapfn = (arg) => Number(arg);
        const answerNum = str.split('').map(mapfn);

        if (answerNum.includes(0)) { // 0을 입력했을 때
          throw new Error("[ERROR] 0이외의 숫자를 입력해주세요");
        } else if (answerNum[0] === answerNum[1] || answerNum[0] === 
          answerNum[2] || answerNum[1] === answerNum[2]) { // 같은 수를 입력했을 때
          throw new Error("[ERROR] 서로 다른 숫자를 입력해주세요");
        }
      }
      // 스트라이크와 볼 체크
      let s = 0;
      let b = 0;

      let str = String(answer);
      let mapfn = (arg) => Number(arg);
      let answerNum = str.split('').map(mapfn);

      for (let i = 0; i < 3; i++) {
        if (baseball[i] === answerNum[i]) {
          s++;
        } else if (answerNum.includes(baseball[i])) {
          b++;
        }
      }

      if (s === 0 && b === 0) { // 스트라이크와 볼이 하나도 없을 때 
        MissionUtils.Console.print("낫싱");
      } else if (s === 3) { // 정답을 맞췄을 경우
        MissionUtils.Console.print("3스트라이크 \n 3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        const repeat = await MissionUtils.Console.readLineAsync("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. \n");
        if (repeat === '1') { // 1을 입력하면 다시 시작
          return this.play();
        } else if (repeat === '2') { // 2를 입력하면 종료
          break;
        }
      } else if (s === 0) { //스트라이크가 0이면 볼만 출력
        MissionUtils.Console.print(b + "볼");
      } else if (b === 0) { //볼이 0이면 스트라이크만 출력
        MissionUtils.Console.print(s + "스트라이크");
      } else {
        MissionUtils.Console.print(b + "볼 " + s + "스트라이크");
      }
    }
  }
}

const app = new App();
app.play();

export default App;
