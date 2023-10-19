import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("test")
    const TARGET_NUMBER = this.get_random_number()
    Console.print(TARGET_NUMBER)
  }
  get_random_number() {
    const number = []; 
    while (number.length < 3) {
      const tempDigit = Random.pickNumberInRange(1, 9)
      if (!number.includes(tempDigit)) {
        number.push(tempDigit)
      }
    }
    return number
  }
}

const app = new App();
app.play();


export default App;

