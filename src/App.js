import { Console, Random } from "@woowacourse/mission-utils";



class App {
  async play() {
    let KEEP_PLAY = true
    
    while (KEEP_PLAY) {
      let HOME_RUN = false
      let TARGET_NUMBER = getRandomNumber()
      Console.print("숫자 야구 게임을 시작합니다.")

      while (!HOME_RUN) {
        let printMsg = ""
        const userInputNumber = await Console.readLineAsync('숫자를 입력해 주세요 : ')

        if (!checkExceptionalInput(userInputNumber)) {
          throw new Error('[ERROR] 3자리 숫자를 입력해 주세요.')
        }

        const userInputArray = numberToArray(userInputNumber)
        let result = compareTwo3digitNumbers(TARGET_NUMBER, userInputArray)
        result[0] == 0 && result[1] == 0
          ? printMsg = '낫싱'
          : result[1] == 3
            ? (
              printMsg = '3스트라이크',
              HOME_RUN = true
            )
            : printMsg = `${result[0] != 0 ? (result[0] + '볼') : ""}${result[1] != 0 ? (result[1] + '스트라이크') : ""}`
        Console.print(printMsg)
      }
      Console.print('3개의 숫자를 모두맞히셨습니다! 게임 종료')
      let userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'); 
      (userInput == 2) && (KEEP_PLAY = false)
    }
  }
}

function getRandomNumber() {
    const number = []; 
    while (number.length < 3) {
      const tempDigit = Random.pickNumberInRange(1, 9)
      !number.includes(tempDigit) && number.push(tempDigit)
    }
    return number
}


function checkExceptionalInput(input) {
  // return input.toString().length == 3 && !isNaN(input) && checkDuplicateNumber(input)  
  return input.toString().length == 3 && !isNaN(input)
    ? true
    : false
}

function checkDuplicateNumber(number) {
  const numberToString = number.toString()
  for (let i = 0; i < numberToString.length; i++) {
    for (let j = i+1; j < numberToString.length; j++) {
      return (numberToString[i] == numberToString[j]) 
        ? false
        : true
    }
  }
}

function compareTwo3digitNumbers(targetNumber, userInputNumber) {
  let strike = 0;
  let ball = 0;

  for (let i =0 ; i < targetNumber.length; i++) {
    targetNumber.includes(userInputNumber[i])
        ? targetNumber[i] == userInputNumber[i]
          ? strike++
          : ball++
        : {}
    }
  return [ball, strike];
}

function numberToArray(targetNumber) { 
  return Array.from(String(targetNumber),x => Number(x))
}

const app = new App();
app.play();

export default App;