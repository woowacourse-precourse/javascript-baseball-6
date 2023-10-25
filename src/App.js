import { Console, MissionUtils } from "@woowacourse/mission-utils"

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.')

    let is_play = true
    while (is_play){
      const computer_number = this.computerSelect()

      while (true) {
        let guess = await Console.readLineAsync('숫자를 입력해주세요 (세 자리 숫자): ')
        guess = guess.split('').map(char=>parseInt(char,10))
  
        if (guess.length !== 3 || guess.some(isNaN) || new Set(guess).size !== 3){
          throw new Error('[ERROR]')
        }
          
        const result = this.checkGuess(computer_number,guess)
  

        if (result.strikes === 0 && result.balls === 0){
          Console.print('낫싱')
        }else {
          if (result.balls === 0 && result.strikes !== 0){
            Console.print(`${result.strikes}스트라이크`)
            if (result.strikes === 3)break
          }
          else if (result.balls !== 0 && result.strikes === 0){
            Console.print(`${result.balls}볼`)
          }
          else{
            Console.print(`${result.balls}볼 ${result.strikes}스트라이크`)
          }
        }
      }

      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.')
      const is_re = await Console.readLineAsync('')
      if (is_re == 1) continue
      else if (is_re == 2) is_play = false
      else{
        throw new Error('[ERROR]')
      }
    }
    
  }

  computerSelect() {
    const select = []
    while (select.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9)
      if (!select.includes(number)) {
        select.push(number)
      }
    }
    return select
  }

  checkGuess(computer_number, guess) {
    let strikes = 0
    let balls = 0

    for (let i = 0; i < 3; i++) {
      if (guess[i] === computer_number[i]) {
        strikes++
      } else if (computer_number.includes(guess[i])) {
        balls++
      }
    }

    return { strikes, balls }
  }
}

export default App

const app = new App()
app.play()
