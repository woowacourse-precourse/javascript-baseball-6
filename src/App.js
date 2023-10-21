import { Console, MissionUtils } from '@woowacourse/mission-utils'
import { feedbackMessage, messages } from './message.js'

class App {
  constructor() {
    this.computer = []
    this.player = []
    this.flag = true
  }
  async gameStart() {
    await this.createRandomNumber()
    try {
      while (this.flag) {
        await this.getPlayerNumber()
        await this.isError()
        await this.checkNumber()
      }
      await this.gameOver()
    } catch (e) {
      throw new Error(e)
    }
  }
  async gameOver() {
    Console.print(messages.correctNumber)
    let rePlay = await Console.readLineAsync(messages.reStart)
    if (rePlay == 1) {
      await this.reset()
      this.gameStart()
    } else if (rePlay != 2) throw new Error(messages.errorMessage)
  }
  async reset() {
    this.computer = []
    this.flag = true
  }
  async printFeedback(strike, ball, feedback) {
    if (!ball && !strike) feedback = messages.nothing
    else feedback = feedbackMessage(ball, strike)
    if (strike === 3) this.flag = false
    Console.print(feedback)
  }
  async checkNumber() {
    let strike = 0,
      ball = 0,
      feedback = ''
    for (let [idx, value] of this.computer.entries()) {
      const playerNum = Number(this.player[idx])
      if (value === playerNum) strike++
      else if (this.computer.includes(playerNum)) ball++
    }
    this.printFeedback(strike, ball, feedback)
  }
  async isError() {
    if (!(this.player.length === 3 && !!Number(this.player[0]) && !!Number(this.player[1]) && !!Number(this.player[2]))) {
      throw new Error(messages.errorMessage)
    }
  }
  async getPlayerNumber() {
    this.player = [...(await Console.readLineAsync(messages.inputNumber))]
  }
  async createRandomNumber() {
    while (this.computer.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9)
      if (!this.computer.includes(random)) this.computer.push(random)
    }
  }
  async startMessage() {
    Console.print(messages.gameStart)
  }
  async play() {
    this.startMessage()
    await this.gameStart()
  }
}

const app = new App()
app.play()

export default App
