import { Console } from '@woowacourse/mission-utils'
import { messages } from './message.js'

class App {
  async startMessage() {
    Console.print(messages.gameStart)
  }
  async play() {
    this.startMessage()
  }
}

const app = new App()
app.play()

export default App
