import * as MissionUtils from "@woowacourse/mission-utils";
class App {
  async play() {
    await MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')

    const checkNumberType = (number) => {
      if (number[0] == number[1] || number[1] == number[2] || number[0] == number[2]){
        return false
      }
      return true
    }
    const strikesBalls = async(randomNumberStr, numberStr) => {
      let strikes = 0;
      let balls = 0

      if (numberStr[0] == randomNumberStr[0]){
        strikes += 1
      }
      if (numberStr[1] == randomNumberStr[1]){
        strikes += 1
      }
      if (numberStr[2] == randomNumberStr[2]){
        strikes += 1
      }
      let commonDigits = []
      for (let i = 0; i < randomNumberStr.length; i++) {
        const digit = randomNumberStr[i];
        if (numberStr.includes(digit) && !commonDigits.includes(digit)) {
          commonDigits.push(digit);
        }
      }

      balls = commonDigits.length - strikes

      if (strikes>0 && balls>0){
        await MissionUtils.Console.print(`${balls}볼 ${strikes}스트라이크`)
      } else if(strikes>0){
        await MissionUtils.Console.print(`${strikes}스트라이크`)
      } else if(balls>0){
         await MissionUtils.Console.print(`${balls}볼`)
      } else {
         await MissionUtils.Console.print('낫싱')
      }

      if (strikes === 3) {
        await MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
        process.stdout.write('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
        await MissionUtils.Console.readLineAsync('')
        .then(async(input) => {
          if (input === '1'){
            await gameRestart()
          }
        })
      } else {
        await gameStart(randomNumberStr)
      }
    }

    const gameRestart = async() => {
      let randomNumber1 = MissionUtils.Random.pickNumberInRange(1, 9);
      let randomNumber2 = MissionUtils.Random.pickNumberInRange(1, 9);
      let randomNumber3 = MissionUtils.Random.pickNumberInRange(1, 9);
      
      let randomNumberStr = randomNumber1.toString() + randomNumber2.toString() + randomNumber3.toString()
      while (!checkNumberType(randomNumberStr)) {
        randomNumber1 = MissionUtils.Random.pickNumberInRange(1, 9);
        randomNumber2 = MissionUtils.Random.pickNumberInRange(1, 9);
        randomNumber3 = MissionUtils.Random.pickNumberInRange(1, 9);

        randomNumberStr = randomNumber1.toString() + randomNumber2.toString() + randomNumber3.toString()

      }
      await gameStart(randomNumberStr)
    }

    const gameStart = async(randomNumberStr) =>{
      await MissionUtils.Console.readLineAsync('숫자를 입력해주세요: ')
      .then(async(input)=>{
          const number = parseInt(input);
          const numberStr = number.toString()

          if (isNaN(number) || numberStr.length !== 3 || !checkNumberType(numberStr)) {
            throw new Error("[ERROR]: 숫자가 잘못된 형식입니다.")
          }

          strikesBalls(randomNumberStr, numberStr)
      }
      );
        
    }
    await gameRestart()
  }
}

export default App;
