import { Console, Random } from "@woowacourse/mission-utils";


class App {
  async play() {
    let isKeepPlaying = true
    while (isKeepPlaying) {
      let isCorrectAnswer = false
      let targetNumber = getRandomNumber()

      Console.print("숫자 야구 게임을 시작합니다.")
      while (!isCorrectAnswer) {
        let printMassage = ""

        const userInputNumber = await Console.readLineAsync('숫자를 입력해 주세요 : ')
        if (!checkExceptionalInput(userInputNumber)) {
          throw new Error('[ERROR] 중복되지 않은 3자리 숫자를 입력해 주세요.')
        }

        const { ballCounter, strikeCounter } = compareTwo3digitNumbers(targetNumber, userInputNumber)
        strikeCounter === 3 ?  isCorrectAnswer = true : {}
        printMassage = `${ballCounter !== 0 ? (ballCounter + '볼 ') : ''}${strikeCounter !== 0 ? (strikeCounter + '스트라이크') : ""}`
        !printMassage && (printMassage = '낫싱')
        Console.print(printMassage)
      }
      Console.print('3개의 숫자를 모두맞히셨습니다! 게임 종료')
      let userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'); 
      (userInput == 2) && (isKeepPlaying = false)
    }
  }
}

function getRandomNumber() {
  const randomNumber = []; 
  while (randomNumber.length < 3) {
    const digit = Random.pickNumberInRange(1, 9)
    !randomNumber.includes(digit) && randomNumber.push(digit)
  }
  return randomNumber
}

function checkExceptionalInput(input) {
  return input.toString().length === 3 && !isNaN(input) ? true : false
}

function compareTwo3digitNumbers(targetNumber, userInputNumber) {
  let [ballCounter, strikeCounter] = [0,0]
  numberToArray(userInputNumber).forEach((digit, index) => {
    targetNumber.includes(digit) && (
      targetNumber[index] === digit
        ? strikeCounter++
        : ballCounter++
    )
  })
  return { ballCounter, strikeCounter };
}

function numberToArray(targetNumber) { 
  return Array.from(String(targetNumber),x => Number(x))
}

const app = new App();
app.play();

export default App;