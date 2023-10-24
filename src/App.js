import { MissionUtils } from "@woowacourse/mission-utils"
import Computer from "./Class/Computer"
import Player from "./Class/Player" 
import { checkAnswer, checkInputValidity, checkStrike, checkBall } from "./utils/Check"

let strikeCount = 0
let ballCount = 0
let isNewGame = true

class App {
    async play() {
        welcomeMsg()
        const computer = new Computer()
        const player = new Player()
        computer.generateRandNum()

        while(true){
            const playerNum = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
            if(!checkInputValidity(playerNum))
                throw new Error('[ERROR] 잘못된 형식입니다.')
            else player.convertToArray(playerNum)

            strikeCount = checkStrike(player.number, computer.number)
            ballCount = checkBall(player.number, computer.number, strikeCount)

            if(checkAnswer(player.number, computer.number)){
                endGame()
                const retry = await MissionUtils.Console.readLineAsync('숫자를 입력해주세요 : ')
                if(retry === '1'){
                    // this.isNewGame = true
                    computer.generateRandNum()
                    ballCount = 0
                    strikeCount = 0
                    continue
                }
                else{
                    break
                } 
            }
            else{   
                printResult()
            }
        }
    }
}

const initGame = () => {
    isNewGame = true
    strikeCount = 0
    ballCount = 0
}

const welcomeMsg = () => {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.')
}

const printResult = ()=>{
    if(!strikeCount && !ballCount)
        MissionUtils.Console.print('낫싱')
    else if(!strikeCount)
        MissionUtils.Console.print(`${ballCount}볼`)
    else if(!ballCount)
        MissionUtils.Console.print(`${strikeCount}스트라이크`)
    else 
        MissionUtils.Console.print(`${ballCount}볼 ${strikeCount}스트라이크`)
}

const endGame = () => {
    MissionUtils.Console.print('3스트라이크')
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료')
}

const app = new App()
app.play()

export default App;
