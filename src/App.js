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
          throw new Error('[ERROR] 중복되지 않은 3자리 숫자를 입력해 주세요.')
        }

        const userInputArray = numberToArray(userInputNumber)
        let result = compareTwo3digitNumbers(TARGET_NUMBER, userInputArray)
        
        result[1] == 3 ?  HOME_RUN = true : {}
        printMsg = `${result[0] !== 0 ? (result[0] + '볼 ') : ""}${result[1] !== 0 ? (result[1] + '스트라이크') : ""}`
        !printMsg && (printMsg = "낫싱")
        Console.print(printMsg)
      }
      Console.print('3개의 숫자를 모두맞히셨습니다! 게임 종료')
      let userInput = await Console.readLineAsync('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.'); 
      (userInput == 2) && (KEEP_PLAY = false)
    }
  }

  

  getRandomNumber() {
    const randomNumber = []; 
    
    while (randomNumber.length < 3) {
      const digit = Random.pickNumberInRange(1, 9)
      !randomNumber.includes(digit) && randomNumber.push(digit)
    }

    return randomNumber
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
  return input.toString().length == 3 && !isNaN(input) ? true : false
}

function compareTwo3digitNumbers(targetNumber, userInputNumber) {
  let strike = 0;
  let ball = 0; 

  userInputNumber.forEach((digit, index) => {
    targetNumber.includes(digit) && (
      targetNumber[index] == digit 
        ? strike ++
        : ball++
    )
  })

  return [ball, strike];
}

function numberToArray(targetNumber) { 
  return Array.from(String(targetNumber),x => Number(x))
}

const app = new App();
app.play();

export default App;