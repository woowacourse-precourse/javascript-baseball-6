import {MissionUtils} from "@woowacourse/mission-utils";

class App {

  async isGameEnd () {
    const { print, readLineAsync } = MissionUtils.Console;
    print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.")
    const gameStart = await readLineAsync("")
    return gameStart !== "1";
  }
  checkingScore (computer, user) {
    const { print } = MissionUtils.Console;
    let strike = 0;
    let ball = 0;
    computer.forEach((score, idx) => {
      if(user[idx] === score ){
        strike++
      }else if(computer.includes(parseInt(user[idx]))){
        ball++
      }
    })
    if (ball || strike) {
      let message = [];
      ball && message.push(`${ball}볼`);
      strike && message.push(`${strike}스트라이크`);
      print(message.join(" "));
      if (strike === 3) {
        print(`3개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        return true;
      }
    } else {
      print("낫싱");
    }
    return false;
  }
  async userInputNum () {
    const { print, readLineAsync } = MissionUtils.Console;
    const user = []
    const inputNumber = await readLineAsync("숫자를 입력해주세요 ")
    const ErrorMessage = new Error('[ERROR] 잘못된 숫자를 입력하셨습니다1.')
    if(inputNumber.length !== 3 || isNaN(parseInt(inputNumber))) {
      throw ErrorMessage;
    }

    const userInputNumbers = inputNumber.split('')
    userInputNumbers.forEach((number) => {
      if(!user.includes(parseInt(number)) ||  number !== "0"){
        user.push(parseInt(number))
      }else {
        throw ErrorMessage;
      }
    })
    return user
  }
  static readyForBaseballGame () {
    const { print } = MissionUtils.Console;
    print('숫자 야구 게임을 시작합니다.')
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer
  }
  async play() {
    while(true){
      const computerNum = App.readyForBaseballGame()
      while(true){
        const userNum = await this.userInputNum()
        if(this.checkingScore(computerNum, userNum)){
          break;
        }
      }
      if(await this.isGameEnd()){
        break;
      }
    }
  }
}

export default App;
