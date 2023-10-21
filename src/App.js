import { Console } from '@woowacourse/mission-utils'
import { messages } from './message.js'

class App {
  constructor() {
    this.computer = []
  }
  async startMessage() {
    Console.print(messages.gameStart)
  }
  async createRandomNumber() {
    while (this.computer.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9)
      if (!this.computer.includes(random)) this.computer.push(random)
    }
  }
  async play() {
    this.startMessage()
    await this.createRandomNumber()
  }
}

const app = new App()
app.play()

export default App
