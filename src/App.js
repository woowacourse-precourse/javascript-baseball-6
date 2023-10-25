import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {
    const answerNumber = await this.makeAnsNumber();
    console.log(answerNumber);
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    let inputNumber = await this.makeInputNumber();
    let [strike, ball, out] = this.checkNumber(answerNumber, inputNumber);
    console.log(strike, ball, out);
    
  }

  async makeAnsNumber() {
    const numberArr = [];
    while (numberArr.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) {
        numberArr.push(number);
      }
    }
    return numberArr;
  }

  async makeInputNumber() {
    try {
      let number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. : ');
      number = [...number].map(el => +el);
      return number;

    } catch (error) {
    // reject 되는 경우
    }
  }

  checkNumber(answerNumber, inputNumber) {
    let strike = 0;
    let ball = 0;
    let out = 0;
    inputNumber.map((num) => {
      let idx = inputNumber.indexOf(num);
      if (answerNumber.includes(num)) {
        if (answerNumber[idx] === num) strike++;
        else ball++;
      } else out++;
    })
    return [strike, ball, out];
  }

}
const a = new App();
a.play();
export default App;
