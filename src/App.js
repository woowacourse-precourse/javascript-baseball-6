import { Console, MissionUtils } from '@woowacourse/mission-utils'

import feedback from './feedback/feedback.js'
import isError from './validation.js'
import { messages } from './message.js'

class App {
  constructor() {
    this.computer = []
    this.player = []
  }
  async gameStart() {
    let correct = true
    await this.createRandomNumber()
    try {
      while (correct) {
        await this.getPlayerNumber()
        await isError(this.player)
        correct = await feedback(this.computer, this.player)
      }
      await this.gameOver()
    } catch (e) {
      throw new Error(e)
    }
  }
  async reStart() {
    this.computer = []
    this.gameStart()
  }
  async gameOver() {
    Console.print(messages.correctNumber)
    let rePlay = await Console.readLineAsync(messages.reStart)
    if (rePlay == 1) this.reStart()
    else if (rePlay != 2) throw new Error(messages.errorMessage)
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
