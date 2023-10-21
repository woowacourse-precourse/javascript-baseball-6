import { Console } from '@woowacourse/mission-utils'
import { messages } from './message.js'

class App {
  constructor() {
    this.computer = []
    this.player = []
    this.feedback = ''
  }
  async printFeedback() {
    if (!ball && !strike) this.feedback = messages.nothing
    else this.feedback = feedbackMessage(ball, strike)
    if (strike === 3) this.flag = false
    Console.print(this.feedback)
  }
  async checkNumber() {
    let strike = 0,
      ball = 0
    for (let [idx, value] of this.computer.entries()) {
      const playerNum = Number(this.player[idx])
      if (value === playerNum) strike++
      else if (this.computer.includes(playerNum)) ball++
    }
    this.printFeedback()
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
    await this.createRandomNumber()
    await this.getPlayerNumber()
    await this.isError()
  }
}

const app = new App()
app.play()

export default App
