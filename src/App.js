import {Console} from "@woowacourse/mission-utils"
import Computer from "./Computer.js";
import GameMessage from "./GameMessage.js";
import Validator from "./Validator.js";
class App {

  constructor() {
    this.solution;
    this.userInput;
    this.computer = new Computer();
    this.validator = new Validator()
  }

  async play() {
    Console.print(GameMessage.GAME_START_MESSAGE);
    this.gameMainLogic();
  }

  async gameMainLogic(){
    this.solution = this.computer.makeRandomNumber()
    let strike = 0
    let ball = 0
    while (strike !== 3){
      await this.getUserInput()
      let result  = this.computer.checkStrikeBall(this.userInput, this.solution);
      strike = result.strike
      ball = result.ball
      this.printStrikeBall(strike,ball)
    }
    this.userInput = ''
    await this.rePlay();
  }

  async rePlay() {
    const input = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요')
    let userInput = Number(input)
    this.validator.checkLength1(userInput)
    if (userInput === 1) {
      this.gameMainLogic()
    } else {
      return
    }
  }

  async getUserInput() {
    let input = await Console.readLineAsync('숫자를 입력해주세요 : ');
    if (this.validator.isValidInput(input)) this.userInput = input.split("").map((v) => Number(v));
  }

  printStrikeBall(strike,ball){
    if (strike > 0 && ball > 0) Console.print(`${ball}볼 ${strike}스트라이크`)
    if (strike == 0 && ball > 0) Console.print(`${ball}볼`)
    if (3 > strike && strike > 0 && ball == 0) Console.print(`${strike}스트라이크`)
    if (strike == 0 && ball == 0) Console.print(`낫싱`)
    if (strike == 3) {
      Console.print(GameMessage.GAME_END_MESSAGE)
    }
  }
}

export default App;
