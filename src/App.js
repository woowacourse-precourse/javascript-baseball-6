import { MissionUtils } from "@woowacourse/mission-utils";


class App {
  async play() {
    

  }

  async makeNumber() {
    const numberArr = [];
    while (numberArr.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!numberArr.includes(number)) {
        numberArr.push(number);
      }
    }
    return numberArr;
  }

  async inputNumber() {
    try {
      let number = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요. : ');
      number = [...number].map(el => +el);
      return number;

    } catch (error) {
    // reject 되는 경우
    }
  }

  checkNumber(answerNumber, inputNumber) {
    
  }

}
const a = new App();
a.play();
export default App;
