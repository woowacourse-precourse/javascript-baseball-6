import { Console, Random } from "@woowacourse/mission-utils";


class App {
  async play() {
    // const userInputNumber = await Console.readLineAsync('숫자를 입력해 주세요 : ')
    const result = compare([1, 2, 3], numberToArray(123))

    Console.print(result)
  }
}


async function getRandomNumber() {
    const number = []; 
    while (number.length < 3) {
      const tempDigit = Random.pickNumberInRange(1, 9)
      if (!number.includes(tempDigit)) {
        number.push(tempDigit)
      }
    }
    return number
}
  
function compare(targetNumber, userInputNumber) {
  let strike = 0
  let ball = 0
  for (let i =0 ; i < targetNumber.length; i++) {
    targetNumber.includes(userInputNumber[i])
      && targetNumber[i] == userInputNumber[i]
        ? strike ++
        : ball ++
    }
  return [ball, strike]
}

function numberToArray(targetNumber) { 
  return Array.from(String(targetNumber),x => Number(x))
}

const app = new App();
app.play();


export default App;

